import { skillBoxes } from '../lib/data.js';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
      <h2 className="font-grotesk font-bold text-3xl md:text-4xl uppercase mb-8 inline-block border-b-neo border-border pb-2">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillBoxes.map((b) => (
          <div
            key={b.name}
            className={`p-5 border-neo border-border bg-white shadow-neoSm hover:shadow-neo hover:-translate-y-1 transition-all ${
              b.highlight ? 'border-t-[6px] !border-t-yellow' : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <i className={`fa-solid ${b.icon} text-2xl text-primary`} />
              <h3 className="font-grotesk font-bold text-base uppercase">{b.name}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {b.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 border-neoSm border-border bg-bg font-mono text-xs hover:bg-pink hover:text-white transition-colors"
                >
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
