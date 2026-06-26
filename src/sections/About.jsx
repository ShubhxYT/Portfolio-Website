import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ButtonMovingBorder } from '../components/MovingBorderButton.jsx';
import { STATS } from '../lib/data.js';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      {inView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {value}{suffix}
        </motion.span>
      )}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
      <h2 className="font-grotesk font-bold text-3xl md:text-4xl uppercase text-text mb-8 inline-block border-b-neo border-border pb-2">
        About
      </h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-6 border-neo border-border bg-white shadow-neo">
          <p className="font-mono text-text leading-relaxed text-sm md:text-base">
            Self-taught AI engineer and third-year computer science student at Manipal University Jaipur.
            Deep expertise building production-grade RAG systems, computer vision pipelines, and
            full-stack AI applications. Engineered 28+ GitHub repositories spanning multi-service LLM
            orchestration, LangGraph state machines, and self-hosted infrastructure serving 10+ live
            services across 5 custom domains with zero recurring cost. Combines strong Python/TypeScript
            engineering with hands-on DevOps (Docker, Proxmox, Coolify) to ship real products from
            bare metal to browser.
          </p>
          <div className="flex gap-3 mt-6">
            <ButtonMovingBorder
              as="a"
              href="/Shubh_Somani_PythonEngineer_2026.pdf"
              target="_blank"
              borderRadius="0px"
              containerClassName="h-12 w-40"
              className="bg-yellow !text-text border-border font-grotesk font-bold uppercase text-xs tracking-wider"
            >
              Download CV
            </ButtonMovingBorder>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="p-6 border-neo border-border bg-white shadow-neoSm flex flex-col items-center justify-center text-center"
            >
              <div className="font-grotesk font-bold text-3xl md:text-4xl text-primary">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="font-mono text-xs uppercase mt-2 text-text">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
