import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="p-8 border-neo border-border bg-white shadow-neo text-center max-w-md">
        <div className="font-grotesk font-bold text-8xl text-yellow drop-shadow-[8px_8px_0_var(--border)]">404</div>
        <p className="font-mono text-sm uppercase mt-4 text-text/80">Page not found</p>
        <Link
          to="/"
          className="inline-block mt-6 px-4 py-2 border-neo border-border bg-yellow shadow-neoSm hover:shadow-neo font-grotesk font-bold uppercase text-sm tracking-wider transition-all"
        >
          ← Back Home
        </Link>
      </div>
    </main>
  );
}
