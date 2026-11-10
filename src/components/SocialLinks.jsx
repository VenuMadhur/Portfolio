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
              className={`inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all cursor-not-allowed opacity-35 border ${
                dark
                  ? 'bg-zinc-900/60 border-zinc-800 text-zinc-500'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-400'
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
            className={`inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-[#c6f432] ${
              dark
                ? 'bg-zinc-900/90 hover:bg-zinc-800 border-zinc-800 hover:border-[#c6f432]/60 text-zinc-300 hover:text-[#c6f432] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(198,244,50,0.2)]'
                : 'bg-white hover:bg-zinc-50 border-zinc-200 hover:border-[#0b0b0c] text-zinc-700 hover:text-[#0b0b0c] hover:-translate-y-0.5 shadow-xs'
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
