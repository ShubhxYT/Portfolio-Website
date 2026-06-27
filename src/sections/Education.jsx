import { education } from '../lib/data.js';

export default function Education() {
  return (
    <section className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-8 py-20">
      <h2 className="font-grotesk font-bold text-4xl md:text-5xl uppercase mb-10 inline-block px-4 py-2 bg-yellow border-neo border-border shadow-neo">
        Education
      </h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {education.map((e) => (
          <div key={e.school} className="p-8 border-4 border-border bg-white shadow-neo hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-grotesk font-bold text-xl">{e.school}</h3>
              <span className="px-3 py-1.5 bg-yellow border-[3px] border-border font-mono text-sm font-bold shadow-[3px_3px_0_var(--border)]">
                {e.period}
              </span>
            </div>
            <p className="font-mono text-base text-text/80">{e.degree}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              {e.tags.map((t) => (
                <span key={t} className="px-3 py-2 border-[3px] border-border bg-bg font-mono text-sm font-bold hover:bg-pink hover:text-white transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
