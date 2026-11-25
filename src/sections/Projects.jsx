import { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectDetailModal from '../components/ProjectDetailModal.jsx';
import CertificateCard from '../components/CertificateCard.jsx';
import CertificateModal from '../components/CertificateModal.jsx';
import { projects, certificates } from '../lib/data.js';

const TABS = ['Projects', 'Certificates'];

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

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
