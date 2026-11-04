import React from 'react';
import { ArrowUp, Heart, Code, FileText } from 'lucide-react';
import { personalData } from '../data/personal';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#08111F] text-white border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-[#08111F] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-sm tracking-wider">
                    {personalData.monogram}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white block">
                  {personalData.fullName}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Software Developer • Class of 2026
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Passionate about building intelligent applications, high-performance web systems, and exploring modern AI architectures.
            </p>

            <div className="pt-2">
              <SocialLinks dark={true} />
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recruiter / Direct Access */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-slate-400">
              Recruiter Quick Access
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Seeking software development, full stack, or AI engineering opportunities. Ready to review technical challenges.
            </p>

            <div className="space-y-2">
              <a
                href={personalData.downloadResumePath}
                download="Cholletti-Venu-Madhur-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            <div className="text-xs text-slate-400">
              <span>Direct inquiries: </span>
              <a
                href={`mailto:${personalData.email}`}
                className="text-cyan-400 hover:underline"
              >
                {personalData.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalData.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with React, Tailwind CSS & Motion</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
