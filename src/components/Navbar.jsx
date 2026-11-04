import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import { personalData } from '../data/personal';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'GitHub', href: '#github', id: 'github' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeId = useScrollSpy(['home', 'about', 'skills', 'projects', 'github', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-lg shadow-black/15'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-1.5"
            aria-label="Cholleti Venu Madhur - Back to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-500/20">
              <div className="w-full h-full bg-[#08111F] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-sm tracking-wider">
                  {personalData.monogram}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-white text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                {personalData.shortName}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101D31]/70 border border-slate-700/60 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-blue-600/90 shadow-sm -z-10 transition-all duration-300" />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                const heroResume = document.getElementById('resume-actions');
                if (heroResume) {
                  heroResume.scrollIntoView({ behavior: 'smooth' });
                  heroResume.classList.add('ring-2', 'ring-cyan-400', 'rounded-xl');
                  setTimeout(() => {
                    heroResume.classList.remove('ring-2', 'ring-cyan-400', 'rounded-xl');
                  }, 2000);
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] z-50 bg-[#08111F]/95 backdrop-blur-xl md:hidden overflow-y-auto px-6 py-8 border-t border-slate-800 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 px-3">
              Navigation Menu
            </p>
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600/20 border border-blue-500/30 text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 space-y-4">
            <a
              href="#home"
              onClick={() => {
                setMobileMenuOpen(false);
                const heroResume = document.getElementById('resume-actions');
                if (heroResume) {
                  heroResume.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
            >
              <FileText className="w-4 h-4" />
              <span>Resume Options</span>
            </a>

            <div className="text-center">
              <span className="text-xs text-slate-400">
                {personalData.fullName} • Class of 2026
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
