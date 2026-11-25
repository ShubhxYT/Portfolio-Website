/**
 * Portfolio /api/chat worker. Reconstructed from the 14 Nov 2026
 * production module on the `portfolio` Worker (direct Wrangler upload).
 * Secrets and URLs come from Worker bindings — never commit them.
 */
const MAX_BODY = 16384;
const MAX_TEXT = 2000;
const MAX_REPLY = 6000;

export class ChatError extends Error {
  constructor(status, code) {
    super(code);
    this.status = status;
    this.code = code;
  }
}

export async function boundedText(stream, max, signal) {
  if (!stream) throw new ChatError(400, 'invalid_request');
  const reader = stream.getReader();
  const chunks = [];
  let size = 0;
  const cancel = () => { void reader.cancel().catch(() => {}); };
  signal?.addEventListener('abort', cancel, { once: true });
  try {
    while (true) {
      if (signal?.aborted) throw new ChatError(504, 'timeout');
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > max) {
        await reader.cancel();
        throw new ChatError(413, 'too_large');
      }
      chunks.push(value);
    }
    if (signal?.aborted) throw new ChatError(504, 'timeout');
    const bytes = new Uint8Array(size);
    let at = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, at);
      at += chunk.length;
    }
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } finally {
    signal?.removeEventListener('abort', cancel);
    reader.releaseLock();
  }
}

function exactKeys(value, keys) {
  return value && typeof value === 'object' && !Array.isArray(value)
    && Object.keys(value).sort().join(',') === [...keys].sort().join(',');
}

export function validate(value) {
  if (!exactKeys(value, ['message', 'history']) || !Array.isArray(value.history) || value.history.length > 8 || value.history.length % 2) {
    throw new ChatError(400, 'invalid_request');
  }
  const validText = (text) => typeof text === 'string' && text.trim().length > 0 && text.length <= MAX_TEXT && !text.includes('\0');
  if (!validText(value.message)) throw new ChatError(400, 'invalid_request');
  for (let index = 0; index < value.history.length; index++) {
    const message = value.history[index];
    if (!exactKeys(message, ['role', 'content']) || !validText(message.content) || message.role !== (index % 2 ? 'assistant' : 'user')) {
      throw new ChatError(400, 'invalid_request');
    }
  }
  return [...value.history, { role: 'user', content: value.message.trim() }];
}

const errors = {
  invalid_request: 'Use a message of 1–2000 characters and start a fresh chat if needed.',
  too_large: 'That conversation is too large. Clear the chat and try a shorter question.',
  unavailable: 'The assistant is offline. Retry shortly or download the resume.',
  timeout: 'The assistant took too long. Retry shortly or download the resume.',
  rate_limited: 'The assistant is busy or its demo budget is used. Try again later.',
  disabled: 'The assistant is paused. You can still download the resume.',
};

export function json(status, body, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      ...extra,
    },
  });
}

export function createHandler(send = (request) => fetch(request)) {
  return async function handle(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/chat') return json(404, { error: 'not_found' });
    if (request.method !== 'POST') return json(405, { error: 'method_not_allowed' }, { Allow: 'POST' });
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 35000);
    try {
      if (env.CHAT_ENABLED !== 'true') throw new ChatError(503, 'disabled');
      const origin = request.headers.get('Origin');
      if (origin && origin !== url.origin) throw new ChatError(400, 'invalid_request');
      if (!/^application\/json(?:\s*;|$)/i.test(request.headers.get('Content-Type') || '')) {
        throw new ChatError(400, 'invalid_request');
      }
      if (Number(request.headers.get('Content-Length')) > MAX_BODY) throw new ChatError(413, 'too_large');
      let value;
      try {
        value = JSON.parse(await boundedText(request.body, MAX_BODY, controller.signal));
      } catch (error) {
        if (error instanceof ChatError) throw error;
        throw new ChatError(400, 'invalid_request');
      }
      const messages = validate(value);
      if (!env.CHAT_LIMITER) throw new ChatError(503, 'unavailable');
      const key = env.TRANSPORT === 'loopback' ? 'local-demo' : request.headers.get('CF-Connecting-IP') || 'unknown';
      if (!(await env.CHAT_LIMITER.limit({ key })).success) throw new ChatError(429, 'rate_limited');
      const target = new URL(env.HERMES_URL);
      if (target.pathname !== '/chat' || target.search || target.hash || target.username || target.password || !env.HERMES_TOKEN || env.HERMES_TOKEN.length < 32) {
        throw new ChatError(503, 'unavailable');
      }
      if (env.TRANSPORT === 'loopback') {
        if (target.origin !== 'http://127.0.0.1:8642') throw new ChatError(503, 'unavailable');
      } else if (env.TRANSPORT !== 'vpc' || !env.HERMES_VPC) {
        throw new ChatError(503, 'unavailable');
      }
      const upstreamRequest = new Request(target, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.HERMES_TOKEN}` },
        body: JSON.stringify({ messages }),
        signal: controller.signal,
        redirect: 'manual',
      });
      const upstream = env.TRANSPORT === 'vpc' ? await env.HERMES_VPC.fetch(upstreamRequest) : await send(upstreamRequest);
      if (!upstream.ok) {
        await upstream.body?.cancel();
        throw new ChatError(upstream.status === 429 ? 429 : 503, upstream.status === 429 ? 'rate_limited' : 'unavailable');
      }
      let result;
      try {
        result = JSON.parse(await boundedText(upstream.body, 32768, controller.signal));
      } catch {
        throw new ChatError(503, 'unavailable');
      }
      const text = result.text;
      if (typeof text !== 'string' || !text.trim() || text.length > MAX_REPLY || text.includes(env.HERMES_TOKEN) || /\u0000/.test(text)) {
        throw new ChatError(503, 'unavailable');
      }
      return json(200, { text });
    } catch (error) {
      const failure = controller?.signal.aborted
        ? new ChatError(504, 'timeout')
        : error instanceof ChatError ? error : new ChatError(503, 'unavailable');
      return json(failure.status, { error: failure.code, message: errors[failure.code] }, failure.status === 429 ? { 'Retry-After': '60' } : {});
    } finally {
      clearTimeout(timer);
    }
  };
}

export default { fetch: createHandler() };
