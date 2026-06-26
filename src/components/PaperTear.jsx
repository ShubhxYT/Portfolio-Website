import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PaperTear() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const marginTop = useTransform(scrollYProgress, [0, 0.5], [300, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden z-10">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-auto">
        <path d="M0,0 L1440,0 L1440,60 L1200,72 Q900,84 600,60 L0,72 Z" fill="var(--bg)" stroke="var(--border)" strokeWidth="2" strokeDasharray="8 8" />
      </svg>
      <motion.div style={{ marginTop, opacity }} className="h-[40vh] bg-yellow/40 border-y-neo border-border flex items-center justify-center">
        <span className="font-caveat text-3xl text-text rotate-[-8deg] -translate-x-8 px-4 py-2 border-neoSm border-border bg-white shadow-neoSm">
          scroll to explore ↓
        </span>
      </motion.div>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-auto rotate-180">
        <path d="M0,0 L1440,0 L1440,60 L1200,72 Q900,84 600,60 L0,72 Z" fill="var(--bg)" stroke="var(--border)" strokeWidth="2" strokeDasharray="8 8" />
      </svg>
    </section>
  );
}
