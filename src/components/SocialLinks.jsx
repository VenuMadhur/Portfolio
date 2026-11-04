import React from 'react';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { personalData } from '../data/personal';

export default function SocialLinks({ dark = false, iconSize = 'w-5 h-5' }) {
  const links = [
    {
      name: 'LinkedIn',
      href: personalData.linkedinUrl,
      icon: LinkedinIcon,
      label: 'LinkedIn Profile'
    },
    {
      name: 'GitHub',
      href: personalData.githubUrl,
      icon: GithubIcon,
      label: 'GitHub Profile'
    },
    {
      name: 'Email',
      href: personalData.email ? `mailto:${personalData.email}` : '',
      icon: Mail,
      label: 'Send Email'
    }
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const Icon = link.icon;
        const hasUrl = Boolean(link.href && link.href.trim() !== '');

        if (!hasUrl) {
          return (
            <span
              key={link.name}
              title={`${link.name} (Configure in personal.js)`}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all cursor-not-allowed opacity-40 border ${
                dark
                  ? 'bg-slate-800/40 border-slate-700/50 text-slate-400'
                  : 'bg-slate-100 border-slate-200 text-slate-400'
              }`}
            >
              <Icon className={iconSize} />
              <span className="sr-only">{link.label} (Not configured)</span>
            </span>
          );
        }

        return (
          <a
            key={link.name}
            href={link.href}
            target={link.name !== 'Email' ? '_blank' : undefined}
            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              dark
                ? 'bg-slate-900/60 hover:bg-slate-800 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-400 hover:-translate-y-0.5'
                : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-blue-600 hover:-translate-y-0.5 shadow-xs'
            }`}
          >
            <Icon className={iconSize} />
            <span className="sr-only">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}
