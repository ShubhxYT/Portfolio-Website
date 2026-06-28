import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Journey from '../sections/Journey.jsx';
import Skills from '../sections/Skills.jsx';
import Projects from '../sections/Projects.jsx';
import Education from '../sections/Education.jsx';

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Education />
    </main>
  );
}
