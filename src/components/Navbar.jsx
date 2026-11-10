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
          ? 'glass-nav py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#c6f432] rounded-lg py-1 px-1.5"
            aria-label="Cholleti Venu Madhur - Back to top"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-[#c6f432]/60 p-[1px] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(198,244,50,0.25)]">
              <div className="w-full h-full bg-[#0b0b0c] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-bold text-[#c6f432] text-sm tracking-wider">
                  {personalData.monogram}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-white text-base tracking-tight group-hover:text-[#c6f432] transition-colors">
                {personalData.shortName}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#141416]/90 border border-zinc-800 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c6f432] ${
                    isActive
                      ? 'text-[#0b0b0c] font-bold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-[#c6f432] shadow-sm -z-10 transition-all duration-300" />
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
                  heroResume.classList.add('ring-2', 'ring-[#c6f432]', 'rounded-xl');
                  setTimeout(() => {
                    heroResume.classList.remove('ring-2', 'ring-[#c6f432]', 'rounded-xl');
                  }, 2000);
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#c6f432] hover:bg-[#b5e526] text-[#0b0b0c] shadow-sm hover:shadow-[0_0_20px_rgba(198,244,50,0.35)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#c6f432] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#0b0b0c]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#c6f432]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#c6f432]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] z-50 bg-[#0b0b0c]/98 backdrop-blur-2xl md:hidden overflow-y-auto px-6 py-8 border-t border-zinc-800 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3 px-3">
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
                      ? 'bg-[#c6f432] text-[#0b0b0c] font-bold shadow-sm'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 space-y-4">
            <a
              href="#home"
              onClick={() => {
                setMobileMenuOpen(false);
                const heroResume = document.getElementById('resume-actions');
                if (heroResume) {
                  heroResume.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-[#c6f432] text-[#0b0b0c] shadow-lg shadow-[#c6f432]/20"
            >
              <FileText className="w-4 h-4" />
              <span>Resume Options</span>
            </a>

            <div className="text-center">
              <span className="text-xs text-zinc-400">
                {personalData.fullName} • Class of 2026
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
