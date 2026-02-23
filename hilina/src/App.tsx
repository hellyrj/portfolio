import { useRef } from 'react';
import Navbar from './components/layout/Navbar.tsx';
import Hero from './components/sections/Hero.tsx';
import About from './components/sections/About.tsx';
import Skills from './components/sections/Skills.tsx';
import Projects from './components/sections/Projects.tsx';
import Contact from './components/sections/Contact.tsx';
import Footer from './components/layout/Footer.tsx';
import { useTheme } from './hooks/useTheme.ts';

function App() {
  const { theme, toggleTheme } = useTheme();
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero onCtaClick={scrollToProjects} />
        <About />
        <Skills />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;