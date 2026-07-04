import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ButtonMovingBorder } from '../components/MovingBorderButton.jsx';
import { STATS } from '../lib/data.js';
import ScrollHighlight from '../components/ScrollHighlight.jsx';

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
    <section id="about" className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-8 py-20">
      <h2 className="font-grotesk font-bold text-4xl md:text-5xl uppercase mb-10 inline-block px-4 py-2 bg-yellow border-neo border-border shadow-neo">
        About
      </h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-8 border-4 border-border bg-white shadow-neo">
          <p className="font-grotesk text-text leading-relaxed text-base md:text-lg">
            Self-taught artificial intelligence engineer and third-year computer
            science student with deep expertise building{' '}
            <ScrollHighlight color="yellow">production-grade RAG systems</ScrollHighlight>
            ,{' '}
            <ScrollHighlight color="pink">computer vision pipelines</ScrollHighlight>
            , and{' '}
            <ScrollHighlight color="cyan">full-stack AI applications</ScrollHighlight>
            . Engineered{' '}
            <ScrollHighlight color="green">28+ GitHub repositories</ScrollHighlight>{' '}
            spanning multi-service LLM orchestration, LangGraph state machines, and
            self-hosted infrastructure.
          </p>
          <p className="font-grotesk text-text leading-relaxed text-base md:text-lg mt-4">
            Combines strong{' '}
            <ScrollHighlight color="cyan">Python/TypeScript engineering</ScrollHighlight>{' '}
            with hands-on DevOps to ship real products — from{' '}
            <ScrollHighlight color="pink">bare metal to browser</ScrollHighlight>
            . Runs 10+ live services across 5 custom domains with{' '}
            <ScrollHighlight color="yellow">zero recurring cost</ScrollHighlight>{' '}
            on repurposed consumer hardware.
          </p>
          <p className="font-grotesk text-text leading-relaxed text-base md:text-lg mt-4">
            Passionate about pushing the boundaries of what's possible with{' '}
            <ScrollHighlight color="yellow">self-hosted AI infrastructure</ScrollHighlight>
            ,{' '}
            <ScrollHighlight color="green">hybrid retrieval systems</ScrollHighlight>
            , and building{' '}
            <ScrollHighlight color="cyan">tools that real people use</ScrollHighlight>
            .
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
              className="p-6 border-4 border-border bg-white shadow-neo flex flex-col items-center justify-center text-center hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-accent transition-all"
            >
              <div className="font-grotesk font-bold text-4xl md:text-5xl text-primary hover:text-text transition-colors">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="font-grotesk font-bold text-xs uppercase mt-2 text-text">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
