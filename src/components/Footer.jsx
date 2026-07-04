import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { contactInfo } from '../lib/data.js';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t-neo border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-grotesk font-bold text-lg">Shubh Somani</div>
          <div className="font-mono text-xs text-text/60 mt-1">
            Built with React, Vite, Tailwind, three.js, and Rapier physics.
          </div>
          <div className="font-mono text-xs text-text/60 mt-1">&copy; {new Date().getFullYear()}</div>
        </div>
        <div className="flex gap-3">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border-neoSm border-border bg-bg shadow-neoSm hover:bg-pink hover:text-white transition-all" aria-label="GitHub"><FaGithub /></a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border-neoSm border-border bg-bg shadow-neoSm hover:bg-pink hover:text-white transition-all" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border-neoSm border-border bg-bg shadow-neoSm hover:bg-pink hover:text-white transition-all" aria-label="Website"><FaGlobe /></a>
        </div>
      </div>
    </footer>
  );
}
