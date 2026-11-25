import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <motion.main
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 max-w-[1600px] mx-auto pt-32 pb-20 px-6 lg:px-8 min-h-[70vh]"
    >
      <h1 className="font-grotesk font-bold text-4xl md:text-5xl uppercase mb-10 inline-block px-4 py-2 bg-yellow border-neo border-border shadow-neo">
        Gallery
      </h1>

      <div className="p-8 md:p-12 border-4 border-border bg-white shadow-neo max-w-xl">
        <span className="inline-block font-mono text-xs uppercase tracking-wider px-3 py-1 border-neoSm border-border bg-yellow shadow-neoSm">
          Coming soon
        </span>
        <p className="font-grotesk text-text text-base md:text-lg leading-relaxed mt-6">
          A collection of process shots and experiments is on the way. Check
          back here soon, or browse the projects in the meantime.
        </p>
        <Link
          to="/#projects"
          className="inline-block mt-8 px-4 py-2 border-neo border-border bg-yellow shadow-neoSm hover:shadow-neo font-grotesk font-bold uppercase text-sm tracking-wider transition-all"
        >
          View Projects
        </Link>
      </div>
    </motion.main>
  );
}
