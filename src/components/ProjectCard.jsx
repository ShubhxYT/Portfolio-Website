import { motion } from 'framer-motion';
import { FaStar, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project, onOpen }) {
  const stop = (e) => e.stopPropagation();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(project); } }}
      aria-label={`Open project ${project.title}`}
      className="cursor-pointer border-neo border-border bg-white shadow-neoSm hover:shadow-neo transition-all overflow-hidden flex flex-col relative"
    >
      <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
        <span className="font-grotesk font-bold text-3xl text-white mix-blend-overlay drop-shadow-md">
          {project.title.split(' ').map((w) => w[0]).join('').slice(0, 4)}
        </span>
        {project.featured && (
          <span className="absolute top-2 right-2 text-yellow drop-shadow"><FaStar /></span>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="font-grotesk font-bold text-base">{project.title}</h3>
        <p className="font-mono text-xs uppercase text-text/60">{project.subtitle}</p>
        <p className="text-sm text-text/80 line-clamp-3 leading-relaxed">{project.short}</p>
        <div className="flex flex-wrap gap-1 mt-auto pt-2">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-0.5 border-neoSm border-border bg-bg font-mono text-[10px]">{t}</span>
          ))}
          {project.tags.length > 3 && (
            <span className="font-mono text-[10px] text-text/60">+{project.tags.length - 3}</span>
          )}
        </div>
        {(project.github || project.demo) && (
          <div className="flex flex-wrap gap-2 pt-3" onClick={stop} onKeyDown={stop}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stop}
                aria-label={`${project.title} source on GitHub`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border-neo border-border bg-bg shadow-neoSm hover:shadow-neo text-xs font-grotesk font-bold transition-all"
              >
                <FaGithub /> Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stop}
                aria-label={`${project.title} live demo`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border-neo border-border bg-yellow shadow-neoSm hover:shadow-neo text-xs font-grotesk font-bold transition-all"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
