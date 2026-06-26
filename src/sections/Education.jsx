import { education } from '../lib/data.js';

export default function Education() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 py-16">
      <h2 className="font-grotesk font-bold text-3xl md:text-4xl uppercase mb-8 inline-block border-b-neo border-border pb-2">
        Education
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {education.map((e) => (
          <div key={e.school} className="p-6 border-neo border-border bg-white shadow-neo">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-grotesk font-bold text-lg">{e.school}</h3>
              <span className="px-3 py-1 bg-yellow border-neoSm border-border rounded-full font-mono text-xs shadow-neoSm">
                {e.period}
              </span>
            </div>
            <p className="font-mono text-sm text-text/80">{e.degree}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {e.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 border-neoSm border-border bg-bg font-mono text-xs">
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
