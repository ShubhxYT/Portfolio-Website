(() => {
  const input = document.getElementById('command-input');
  const output = document.getElementById('output');
  const form = document.getElementById('chat-form');
  const status = document.getElementById('status');
  const retry = document.getElementById('retry');
  const send = document.getElementById('send');
  const download = document.getElementById('resume-download');
  let history = [];
  let controller = null;
  let generation = 0;
  let failed = null;
  function append(role, text) {
    const nearBottom = output.scrollHeight - output.scrollTop - output.clientHeight < 90;
    const row = document.createElement('div');
    row.className = `message ${role}`;
    const label = document.createElement('strong');
    label.textContent = role === 'user' ? 'You' : 'Shubh’s AI assistant';
    const content = document.createElement('span');
    content.textContent = text;
    row.append(label, content);
    output.append(row);
    while (output.childElementCount > 40) output.firstElementChild.remove();
    if (nearBottom || role === 'user') output.scrollTop = output.scrollHeight;
  }
  function busy(value) {
    send.disabled = value;
    retry.disabled = value;
    document.querySelectorAll('[data-question]').forEach(button => { button.disabled = value; });
    input.readOnly = value;
    form.setAttribute('aria-busy', String(value));
  }
  function clear() {
    generation++;
    controller?.abort();
    controller = null;
    history = [];
    failed = null;
    retry.hidden = true;
    output.replaceChildren();
    input.value = '';
    busy(false);
    status.textContent = 'Chat cleared. Ready for a fresh question.';
    input.focus();
  }
  async function ask(text, isRetry = false) {
    if (controller) return;
    if (!text.trim() || text.length > 2000) {
      status.textContent = 'Use a question of 1–2000 characters.';
      return;
    }
    // Only exact command words are normalized. Questions preserve original case.
    const command = text.trim().toLowerCase();
    if (command === 'clear') return clear();
    if (command === 'help') {
      append('assistant', 'Ask a question about Shubh’s public work. Commands: help, clear, resume (or download). Chat resets when you close or reload this page.');
      input.value = '';
      return;
    }
    if (command === 'resume' || command === 'download') { download.click(); input.value = ''; return; }
    if (!isRetry) append('user', text);
    retry.hidden = true;
    failed = null;
    busy(true);
    input.value = '';
    status.textContent = 'Thinking…';
    const current = ++generation;
    const abort = new AbortController();
    controller = abort;
    const timeout = setTimeout(() => abort.abort(), 40000);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }), signal: abort.signal, credentials: 'same-origin',
      });
      const result = await response.json();
      if (current !== generation) return;
      if (!response.ok) throw new Error(result.message || 'The assistant is unavailable. Download the resume or retry shortly.');
      if (typeof result.text !== 'string' || !result.text.trim() || result.text.length > 6000) throw new Error('The assistant returned an invalid answer. Please retry.');
      append('assistant', result.text);
      // Keep four complete pairs, each bounded to the server’s history contract.
      history = [...history, { role: 'user', content: text }, { role: 'assistant', content: result.text.slice(0, 2000) }].slice(-8);
      status.textContent = 'Ready. Follow up or ask another question.';
    } catch (error) {
      if (current !== generation) return;
      failed = text;
      retry.hidden = false;
      status.textContent = abort.signal.aborted ? 'The request timed out. Retry or download the resume.'
        : error instanceof TypeError ? 'The assistant is offline. Retry or download the resume.' : error.message;
    } finally {
      clearTimeout(timeout);
      if (current === generation) { controller = null; busy(false); input.focus(); }
    }
  }
  form.addEventListener('submit', event => { event.preventDefault(); void ask(input.value); });
  document.getElementById('clear').addEventListener('click', clear);
  retry.addEventListener('click', () => { if (failed) void ask(failed, true); });
  document.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => { void ask(button.dataset.question); }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && window.parent !== window) {
      window.parent.postMessage({ type: 'portfolio-terminal-close' }, window.location.origin);
    }
  });
  window.addEventListener('pagehide', () => controller?.abort());
  input.focus();
})();
