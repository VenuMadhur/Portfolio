import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';
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
    <footer className="bg-[#0b0b0c] text-white border-t border-zinc-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 p-[1px] shadow-sm">
                <div className="w-full h-full bg-[#0b0b0c] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-bold text-[#c6f432] text-sm tracking-wider">
                    {personalData.monogram}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white block">
                  {personalData.fullName}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Software Developer • Class of 2026
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Passionate about building intelligent applications, high-performance web systems, and exploring modern AI architectures.
            </p>

            <div className="pt-2">
              <SocialLinks dark={true} />
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-300 hover:text-[#c6f432] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recruiter / Direct Access */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-zinc-400">
              Recruiter Quick Access
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Seeking software development, full stack, or AI engineering opportunities. Ready to review technical challenges.
            </p>

            <div className="space-y-2">
              <a
                href={personalData.downloadResumePath}
                download="Cholletti-Venu-Madhur-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#c6f432] text-white text-xs font-medium hover:text-[#c6f432] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#c6f432]" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            <div className="text-xs text-zinc-400">
              <span>Direct inquiries: </span>
              <a
                href={`mailto:${personalData.email}`}
                className="text-[#c6f432] hover:underline"
              >
                {personalData.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} {personalData.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-zinc-400 font-mono">
            <span>Primary Palette: #0b0b0c • #ffffff • #c6f432</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#c6f432] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c6f432] cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c6f432]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
