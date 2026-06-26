import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { useEffect } from 'react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/80"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white border-neo border-border shadow-neo p-6"
          >
            <button onClick={onClose} className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center bg-yellow border-neoSm border-border shadow-neoSm">
              <FaTimes />
            </button>
            <div className={`h-32 bg-gradient-to-br ${cert.gradient} mb-4 flex items-center justify-center`}>
              <FaAward className="text-white text-5xl mix-blend-overlay" />
            </div>
            <h2 className="font-grotesk font-bold text-xl pr-8">{cert.title}</h2>
            <p className="font-mono text-xs uppercase text-text/60 mt-1">{cert.issuer}</p>
            {cert.credentialUrl && (
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-4 py-2 border-neo border-border bg-yellow shadow-neoSm font-grotesk font-bold text-sm">
                <FaExternalLinkAlt /> View Credential
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
