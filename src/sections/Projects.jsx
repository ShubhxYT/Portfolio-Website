import { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectDetailModal from '../components/ProjectDetailModal.jsx';
import CertificateCard from '../components/CertificateCard.jsx';
import CertificateModal from '../components/CertificateModal.jsx';
import { projects, certificates, skillBoxes } from '../lib/data.js';

const TABS = ['Projects', 'Certificates', 'Tech Stack'];

export default function Projects() {
  const [active, setActive] = useState('Projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="projects" className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-8 py-20">
      <h2 className="font-grotesk font-bold text-4xl md:text-5xl uppercase mb-10 inline-block px-4 py-2 bg-yellow border-neo border-border shadow-neo">
        Projects
      </h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 border-neo border-border font-grotesk font-bold text-sm uppercase transition-all ${
              active === t ? 'bg-yellow shadow-neo' : 'bg-white shadow-neoSm hover:bg-bg'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {active === 'Projects' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />
          ))}
        </div>
      )}

      {active === 'Certificates' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((c) => (
            <CertificateCard key={c.id} cert={c} onOpen={setSelectedCert} />
          ))}
        </div>
      )}

      {active === 'Tech Stack' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {skillBoxes.map((b, i) => {
            const iconColors = ['text-cyan', 'text-yellow', 'text-pink', 'text-accent', 'text-cyan', 'text-pink', 'text-black', 'text-black'];
            const barColors = ['bg-cyan', 'bg-yellow', 'bg-pink', 'bg-accent', 'bg-cyan', 'bg-pink', 'bg-yellow', 'bg-yellow'];
            const hoverColors = ['hover:bg-cyan', 'hover:bg-yellow', 'hover:bg-pink', 'hover:bg-accent', 'hover:bg-cyan', 'hover:bg-pink', 'hover:bg-yellow', 'hover:bg-accent'];
            const isWide = i >= 6;
            return (
            <div key={b.name} className={`relative overflow-hidden border-4 border-border shadow-neo hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all ${b.highlight ? 'bg-yellow' : 'bg-white'} ${isWide ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
              <div className={`absolute top-0 left-0 w-full h-[6px] ${barColors[i] || 'bg-primary'}`} />
              <div className="flex items-center gap-4 mb-6 pt-5 pb-4 px-8 border-b-4 border-border">
                <i className={`fa-solid ${b.icon} text-5xl ${iconColors[i] || 'text-primary'}`} />
                <h3 className="font-grotesk font-bold text-2xl uppercase">{b.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 px-8 pb-8">
                {b.tags.map((t) => (
                  <span key={t.name} className={`inline-flex items-center gap-2 px-3 py-2 border-[3px] border-border bg-white shadow-[3px_3px_0_var(--border)] font-mono font-bold text-sm text-text ${hoverColors[i] || 'hover:bg-yellow'} hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer`}>
                    <i className={`${t.icon} text-base`} />
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          )})}
        </div>
      )}

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
