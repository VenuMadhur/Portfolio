import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GitHub from './sections/GitHub';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0b0c] text-[#ffffff] selection:bg-[#c6f432] selection:text-[#0b0b0c]">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Home / Hero (Dark: #0b0b0c) */}
        <Hero />

        {/* 3. About Me and Education (Light / Editorial White: #ffffff) */}
        <About />

        {/* 4. Skills and Tools (Light / Editorial White: #ffffff) */}
        <Skills />

        {/* 5. Featured Projects (Hybrid / Dark Cards on Light or Dark) */}
        <Projects />

        {/* 6. GitHub Activity (Dark: #0b0b0c + Lime Graph) */}
        <GitHub />

        {/* 7. Contact (Light: #ffffff + Dark Card) */}
        <Contact />
      </main>

      {/* 8. Footer (Dark: #0b0b0c) */}
      <Footer />
    </div>
  );
}
