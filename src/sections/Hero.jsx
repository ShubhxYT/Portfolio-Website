import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import TypingRoles from '../components/TypingRoles.jsx';
import BlurInText from '../components/BlurInText.jsx';
import { ButtonMovingBorder } from '../components/MovingBorderButton.jsx';
import { AnimatedGradientText } from '../components/AnimatedGradientText.jsx';
import SocialButton from '../components/SocialButton.jsx';
import { useNavbar } from '../contexts/NavbarContext.jsx';

const Lanyard = lazy(() => import('../components/Lanyard/Lanyard.jsx'));

const TECH_BADGES = ['Python', 'LangChain', 'PyTorch', 'React', 'FastAPI', 'Docker'];

export default function Hero() {
  const { openResumeModal } = useNavbar();
  return (
    <section
      id="home"
      className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-8 pt-8 pb-12 flex flex-col lg:flex-row items-center gap-10"
    >
      {/* Left column */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="inline-flex w-fit">
          <span className="px-3 py-1 border-neoSm border-border bg-yellow font-mono text-xs uppercase tracking-wider shadow-neoSm">
            <AnimatedGradientText>Self-Taught AI Engineer</AnimatedGradientText>
          </span>
        </div>

        <div>
          <p className="font-caveat text-2xl text-text">Hi, I'm</p>
          <h1 className="font-grotesk font-bold text-5xl md:text-7xl leading-none mt-1">
            Shubh Somani
          </h1>
          <div className="mt-3"><TypingRoles /></div>
        </div>

        <BlurInText
          text="Self-taught AI engineer and 3rd-year CS student building production RAG systems, computer vision pipelines, and full-stack apps. 28+ repos across LLM orchestration, LangGraph state machines, and self-hosted infrastructure — all running on repurposed hardware at $0/month."
          className="text-text text-base md:text-lg max-w-xl leading-relaxed"
        />

        <div className="flex flex-wrap gap-3">
          <ButtonMovingBorder
            as="a"
            href="#projects"
            borderRadius="0px"
            containerClassName="h-16 w-48"
            className="bg-yellow !text-text border-border font-grotesk font-bold uppercase text-base tracking-wider"
          >
            View Projects
          </ButtonMovingBorder>
          <ButtonMovingBorder
            as="button"
            onClick={openResumeModal}
            borderRadius="0px"
            containerClassName="h-16 w-48"
            className="bg-white !text-text border-border font-grotesk font-bold uppercase text-base tracking-wider"
          >
            Open Resume
          </ButtonMovingBorder>
        </div>

        <div className="flex items-center gap-3 mt-1">
          <SocialButton kind="github" href="https://github.com/ShubhxYT" size={44} />
          <SocialButton kind="linkedin" href="https://www.linkedin.com/in/shubh-somani" size={44} />
          <SocialButton kind="globe" href="https://shubhsomani.tech" size={44} />
          <SocialButton kind="email" href="mailto:shubhsomani098@gmail.com" size={44} />
        </div>

        <div className="flex flex-wrap gap-2 mt-1">
          {TECH_BADGES.map((b) => (
            <span
              key={b}
              className="px-2.5 py-1 border-neoSm border-border bg-white font-mono text-xs shadow-neoSm"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Right column: 3D lanyard */}
      <div className="flex-1 w-full hidden lg:block self-stretch">
        <Suspense
          fallback={
            <div className="h-[600px] flex items-center justify-center text-text font-mono text-sm">
              Loading 3D…
            </div>
          }
        >
          <Lanyard />
        </Suspense>
      </div>
    </section>
  );
}
