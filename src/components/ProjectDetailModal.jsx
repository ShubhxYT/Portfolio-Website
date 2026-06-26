import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaStar } from 'react-icons/fa';
import { useEffect } from 'react';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/80 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white border-neo border-border shadow-neo max-h-[88vh] overflow-y-auto"
          >
            <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
              <span className="font-grotesk font-bold text-6xl text-white mix-blend-overlay drop-shadow">
                {project.title.split(' ').map((w) => w[0]).join('').slice(0, 4)}
              </span>
              <button onClick={onClose} className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-yellow border-neoSm border-border shadow-neoSm text-text">
                <FaTimes />
              </button>
              {project.featured && (
                <span className="absolute top-3 left-3 px-2 py-1 bg-pink text-white font-mono text-xs uppercase flex items-center gap-1 border-neoSm border-border shadow-neoSm">
                  <FaStar /> Featured
                </span>
              )}
            </div>
            <div className="p-6">
              <h2 className="font-grotesk font-bold text-2xl">{project.title}</h2>
              <p className="font-mono text-sm uppercase text-text/60 mt-1">{project.subtitle}</p>
              <p className="mt-4 text-text/85 leading-relaxed text-sm">{project.full}</p>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-1 border-neoSm border-border bg-bg font-mono text-xs">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border-neo border-border bg-bg shadow-neoSm hover:shadow-neo text-sm font-grotesk font-bold transition-all">
                    <FaGithub /> Source
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border-neo border-border bg-yellow shadow-neoSm hover:shadow-neo text-sm font-grotesk font-bold transition-all">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
