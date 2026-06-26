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
    <section id="projects" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
      <h2 className="font-grotesk font-bold text-3xl md:text-4xl uppercase mb-8 inline-block border-b-neo border-border pb-2">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />
          ))}
        </div>
      )}

      {active === 'Certificates' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c) => (
            <CertificateCard key={c.id} cert={c} onOpen={setSelectedCert} />
          ))}
        </div>
      )}

      {active === 'Tech Stack' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillBoxes.map((b) => (
            <div key={b.name} className="p-5 border-neo border-border bg-white shadow-neoSm hover:shadow-neo hover:-translate-y-1 transition-all">
              <h3 className="font-grotesk font-bold text-base uppercase mb-3 flex items-center gap-2">
                <i className={`fa-solid ${b.icon} text-primary`} /> {b.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {b.tags.map((t) => (
                  <span key={t} className="px-2 py-1 border-neoSm border-border bg-bg font-mono text-xs hover:bg-pink hover:text-white transition-colors">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
