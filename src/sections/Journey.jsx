import { useState, useEffect, useRef, useCallback } from 'react';
import TreasureMap from '../components/TreasureMap.jsx';
import LeafletMap from '../components/LeafletMap.jsx';
import { timeline } from '../lib/data.js';

export default function Journey() {
  const [panTo, setPanTo] = useState(null);
  const [rotateY, setRotateY] = useState(180);
  const [treasureZIndex, setTreasureZIndex] = useState(100);
  const [timelineZIndex, setTimelineZIndex] = useState(1);
  const [timelineOverflow, setTimelineOverflow] = useState('hidden');

  const containerRef = useRef(null);
  const flipData = useRef({ hasStarted: false, startScroll: 0, pageRange: 200 });

  const updateFlip = useCallback(() => {
    if (window.innerWidth < 769) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementTop = rect.top + scrollY;
    const triggerPoint = scrollY + windowHeight * 0.5;

    if (!flipData.current.hasStarted && triggerPoint >= elementTop) {
      flipData.current.hasStarted = true;
      flipData.current.startScroll = scrollY;
    }

    if (flipData.current.hasStarted) {
      const progress = Math.min(1, Math.max(0, (scrollY - flipData.current.startScroll) / flipData.current.pageRange));
      const ry = 180 - (180 * progress);
      setRotateY(ry);

      if (ry > 95) {
        setTimelineZIndex(1);
        setTreasureZIndex(100);
      } else {
        setTimelineZIndex(100);
        setTreasureZIndex(1);
      }

      setTimelineOverflow(progress >= 1 ? 'auto' : 'hidden');
    } else {
      setRotateY(180);
      setTimelineZIndex(1);
      setTreasureZIndex(100);
      setTimelineOverflow('hidden');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateFlip, { passive: true });
    updateFlip();
    return () => window.removeEventListener('scroll', updateFlip);
  }, [updateFlip]);

  const handleTimelineClick = (city) => {
    if (city === 'Jaipur') setPanTo([26.9124, 75.7873]);
    else if (city === 'Delhi') setPanTo([28.7041, 77.1025]);
  };

  return (
    <section id="journey" className="relative z-10 max-w-7xl mx-auto px-4 py-16 journey-section">
      <h2 className="font-grotesk font-bold text-3xl md:text-4xl uppercase mb-8 inline-block border-b-neo border-border pb-2">
        My Journey
      </h2>

      <div ref={containerRef} className="journey-container">
        {/* Timeline panel — book page side */}
        <div
          className="journey-timeline hidden md:block"
          style={{
            gridColumn: 1,
            gridRow: 1,
            transformOrigin: 'right center',
            transform: `rotateY(${rotateY}deg)`,
            transition: 'transform 0.1s ease-out',
            zIndex: timelineZIndex,
            overflowY: timelineOverflow,
          }}
        >
          <h3 className="timeline-header font-grotesk font-bold">Journey Timeline</h3>
          <div className="timeline-list">
            {timeline.map((t) => (
              <div
                key={t.id}
                className="timeline-item-flat"
                onClick={() => handleTimelineClick(t.city)}
              >
                <div className="timeline-dot" />
                <div className="timeline-content-flat">
                  <h4 className="timeline-title font-grotesk">{t.title}</h4>
                  <p className="timeline-date font-mono">{t.date}</p>
                  <p className="timeline-description">{t.description}</p>
                  <p className="timeline-location font-mono">
                    <i className="fas fa-map-marker-alt text-primary" /> {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treasure map — book page back */}
        <div
          className="journey-timeline-back treasure-map-card hidden md:flex"
          style={{
            transformOrigin: 'right center',
            transform: `rotateY(${rotateY}deg)`,
            transition: 'transform 0.1s ease-out',
            zIndex: treasureZIndex,
          }}
        >
          <TreasureMap />
        </div>

        {/* Leaflet Map — right column */}
        <div className="journey-map-container">
          <div id="journey-map" className="w-full h-full">
            <LeafletMap panTo={panTo} />
          </div>
          {/* Grid overlay */}
          <svg className="map-overlay-lines" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#000" strokeWidth="2" opacity="0.8"/>
              </pattern>
              <pattern id="scratches" width="200" height="200" patternUnits="userSpaceOnUse">
                <line x1="10" y1="20" x2="60" y2="25" stroke="#000" strokeWidth="2" opacity="0.7"/>
                <line x1="100" y1="50" x2="180" y2="48" stroke="#000" strokeWidth="1.5" opacity="0.6"/>
                <line x1="30" y1="120" x2="90" y2="115" stroke="#000" strokeWidth="2" opacity="0.7"/>
                <line x1="140" y1="160" x2="195" y2="165" stroke="#000" strokeWidth="1.5" opacity="0.6"/>
                <line x1="5" y1="180" x2="45" y2="175" stroke="#000" strokeWidth="1.5" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <rect width="100%" height="100%" fill="url(#scratches)"/>
          </svg>
          <img
            src="/assets/pirat.png"
            alt="Pirate"
            className="map-pirate-overlay"
            width="200"
            height="200"
            loading="lazy"
          />
        </div>

        {/* Mobile timeline — no book flip */}
        <div className="journey-timeline md:hidden">
          <h3 className="timeline-header font-grotesk font-bold">Journey Timeline</h3>
          <div className="timeline-list">
            {timeline.map((t) => (
              <div
                key={t.id}
                className="timeline-item-flat"
                onClick={() => handleTimelineClick(t.city)}
              >
                <div className="timeline-dot" />
                <div className="timeline-content-flat">
                  <h4 className="timeline-title font-grotesk">{t.title}</h4>
                  <p className="timeline-date font-mono">{t.date}</p>
                  <p className="timeline-description">{t.description}</p>
                  <p className="timeline-location font-mono">
                    <i className="fas fa-map-marker-alt text-primary" /> {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
