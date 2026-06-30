import { motion } from 'framer-motion';
import { useNavbar } from '../contexts/NavbarContext.jsx';
import { useEffect } from 'react';

export default function Resume() {
  const { hideNavbar, showNavbar } = useNavbar();

  useEffect(() => {
    hideNavbar();
    return () => showNavbar();
  }, [hideNavbar, showNavbar]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-10 bg-black"
    >
      <iframe
        src="/vendor/terminal/terminal.html"
        title="Shubh Somani Resume — interactive terminal"
        className="w-full h-full border-0"
      />
    </motion.div>
  );
}
