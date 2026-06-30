import Hero from '../sections/Hero.jsx';
import PaperTear from '../components/PaperTear.jsx';
import About from '../sections/About.jsx';
import Journey from '../sections/Journey.jsx';
import Skills from '../sections/Skills.jsx';
import Projects from '../sections/Projects.jsx';
import Education from '../sections/Education.jsx';
import Contact from '../sections/Contact.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <PaperTear />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
