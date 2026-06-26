import { useState } from 'react';
import TreasureMap from '../components/TreasureMap.jsx';
import LeafletMap from '../components/LeafletMap.jsx';
import { timeline } from '../lib/data.js';

export default function Journey() {
  const [panTo, setPanTo] = useState(null);

  return (
    <section id="journey" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
      <h2 className="font-grotesk font-bold text-3xl md:text-4xl uppercase mb-8 inline-block border-b-neo border-border pb-2">
        Journey
      </h2>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Timeline */}
        <div className="flex flex-col gap-6">
          {timeline.map((t) => (
            <div
              key={t.id}
              data-city={t.city}
              onClick={() => setPanTo(t.city === 'Jaipur' ? [26.9124, 75.7873] : [28.7041, 77.1025])}
              className="cursor-pointer p-4 border-neo border-border bg-white shadow-neoSm hover:shadow-neo hover:-translate-y-0.5 transition-all"
            >
              <div className="font-mono text-xs text-pink uppercase">{t.date}</div>
              <h3 className="font-grotesk font-bold text-base mt-1 text-text">{t.title}</h3>
              <p className="text-sm text-text/80 mt-2 leading-relaxed">{t.description}</p>
              <div className="font-mono text-xs mt-2 text-primary">📍 {t.location}</div>
            </div>
          ))}
        </div>

        {/* Treasure Map */}
        <div className="p-4 border-neo border-border bg-accent/30 shadow-neoSm hidden md:flex items-center justify-center">
          <TreasureMap />
        </div>

        {/* Leaflet Map */}
        <div>
          <LeafletMap panTo={panTo} />
        </div>
      </div>
    </section>
  );
}
