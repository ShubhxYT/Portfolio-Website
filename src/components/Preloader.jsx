import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const pct = Math.min(100, ((now - start) / 1200) * 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setHidden(true), 200);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (hidden) {
      const t = setTimeout(onFinished, 400);
      return () => clearTimeout(t);
    }
  }, [hidden, onFinished]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[9999] bg-yellow flex flex-col items-center justify-center"
        >
          <div className="flex gap-2 mb-8">
            {['S', 'S'].map((l, i) => (
              <motion.div
                key={i}
                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.15 * i,
                  type: 'spring',
                  stiffness: 260,
                  damping: 18,
                }}
                className="w-20 h-20 md:w-30 md:h-30 flex items-center justify-center border-neoLg border-border bg-white shadow-neoLg font-grotesk font-bold text-5xl md:text-7xl text-text"
              >
                {l}
              </motion.div>
            ))}
          </div>
          <div className="w-64 md:w-72 h-5 border-neo border-border bg-white overflow-hidden">
            <div
              className="h-full bg-yellow"
              style={{ width: `${progress}%`, transition: 'width 80ms linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
