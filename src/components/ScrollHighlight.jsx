import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScrollHighlight({ color, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-10% 0px -10% 0px' });

  return (
    <span
      ref={ref}
      className={`highlight highlight-${color}`}
      style={{ '--highlight-progress': inView ? '100%' : '0%' }}
    >
      {children}
    </span>
  );
}
