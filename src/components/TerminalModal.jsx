import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavbar } from '../contexts/NavbarContext.jsx';

export default function TerminalModal() {
  const { isResumeModalOpen, closeResumeModal, hideNavbar, showNavbar } = useNavbar();

  useEffect(() => {
    if (isResumeModalOpen) {
      hideNavbar();
      const onKey = (e) => e.key === 'Escape' && closeResumeModal();
      window.addEventListener('keydown', onKey);
      return () => {
        window.removeEventListener('keydown', onKey);
        showNavbar();
      };
    }
  }, [isResumeModalOpen, closeResumeModal, hideNavbar, showNavbar]);

  return (
    <AnimatePresence>
      {isResumeModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={closeResumeModal}
          className="fixed inset-0 z-[80] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full sm:h-[90vh] max-w-6xl border-neo border-border shadow-neo overflow-hidden bg-black"
          >
            <button
              onClick={closeResumeModal}
              className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-yellow border-neoSm border-border shadow-neoSm text-text hover:scale-110 transition-transform"
              aria-label="Close terminal"
              title="Close (Esc)"
            >
              <FaTimes />
            </button>
            <iframe
              src="/vendor/terminal/terminal.html"
              title="Shubh Somani Resume — interactive terminal"
              className="w-full h-full border-0"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
