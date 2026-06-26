import { useEffect } from 'react';

export default function Preloader({ onFinished }) {
  useEffect(() => {
    const t = setTimeout(onFinished, 1200);
    return () => clearTimeout(t);
  }, [onFinished]);
  return <div className="fixed inset-0 z-[9999] bg-yellow flex items-center justify-center" />;
}
