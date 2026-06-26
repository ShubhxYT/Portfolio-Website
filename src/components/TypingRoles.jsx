import { useEffect, useState } from 'react';

const ROLES = ['AI Engineer', 'Full-Stack Developer', 'Self-Taught Builder'];
const TYPE_MS = 90, DELETE_MS = 50, HOLD_MS = 1800;

export default function TypingRoles() {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[idx];
    if (!deleting && sub === full.length) {
      const t = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(
      () => setSub((n) => n + (deleting ? -1 : 1)),
      deleting ? DELETE_MS : TYPE_MS
    );
    return () => clearTimeout(t);
  }, [sub, deleting, idx]);

  return (
    <span className="font-mono text-2xl md:text-3xl text-text">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink to-accent bg-[length:300%_100%] animate-gradient-move">
        {ROLES[idx].slice(0, sub)}
      </span>
      <span className="animate-blink">|</span>
    </span>
  );
}
