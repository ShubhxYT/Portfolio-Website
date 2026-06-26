import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

export default function CertificateCard({ cert, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      onClick={() => onOpen(cert)}
      className="cursor-pointer p-5 border-neo border-border bg-white shadow-neoSm hover:shadow-neo transition-all"
    >
      <div className="flex items-start gap-3">
        <FaAward className="text-yellow text-2xl mt-1" />
        <div>
          <h3 className="font-grotesk font-bold text-base">{cert.title}</h3>
          <p className="font-mono text-xs uppercase text-text/60 mt-1">{cert.issuer}</p>
        </div>
      </div>
    </motion.div>
  );
}
