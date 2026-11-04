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
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-600 selection:text-white">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Home / Hero */}
        <Hero />

        {/* 3. About Me and Education */}
        <About />

        {/* 4. Skills and Tools */}
        <Skills />

        {/* 5. Featured Projects */}
        <Projects />

        {/* 6. GitHub Activity */}
        <GitHub />

        {/* 7. Contact */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
