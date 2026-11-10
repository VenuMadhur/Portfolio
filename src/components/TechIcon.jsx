import React from 'react';
import {
  Code,
  Terminal,
  Database,
  Brain,
  Cpu,
  Network,
  Shield,
  Layers,
  Server,
  Globe,
  GitBranch,
  FolderGit2,
  Workflow
} from 'lucide-react';

export default function TechIcon({ name, className = "w-6 h-6" }) {
  const iconKey = (name || '').toLowerCase();

  switch (iconKey) {
    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M11.9 2C6.8 2 7.1 4.2 7.1 4.2V6.5H12V7.2H5.1S2 6.8 2 11.9c0 5 2.7 4.9 2.7 4.9h1.6v-2.3c0-2.6 2.3-2.6 2.3-2.6h4.8c2.3 0 2.3-2.2 2.3-2.2V4.2S16.1 2 11.9 2zm-1.4 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
            fill="#387EB8"
          />
          <path
            d="M12.1 22c5.1 0 4.8-2.2 4.8-2.2v-2.3H12v-.7h6.9s3.1.4 3.1-4.7c0-5-2.7-4.9-2.7-4.9h-1.6v2.3c0 2.6-2.3 2.6-2.3 2.6h-4.8c-2.3 0-2.3 2.2-2.3 2.2v5.5s-.4 2.2 3.8 2.2zm1.4-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
            fill="#FFE052"
          />
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M6 18.5V11h2.5v7.5H6zm4.5 0c0-1.5.8-2.5 2.2-2.5 1 0 1.6.5 2 1.3l-1.8 1c-.3-.4-.5-.6-.8-.6-.4 0-.6.3-.6.7 0 .6.4.8 1.4 1.2 1.6.6 2.4 1.3 2.4 2.6 0 1.6-1.3 2.6-3 2.6-1.5 0-2.6-.8-3.1-2l1.9-1c.3.6.6.9 1.2.9.5 0 .8-.3.8-.7 0-.5-.4-.7-1.3-1.1-1.6-.7-2.3-1.4-2.3-2.4z" fill="#000000" transform="translate(1, -2)" />
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="3.5" ry="3.5" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C15 11.8 16.6 13.5 20 13.5c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17 7.8 15.4 6 12 6zM4 13.5c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8 1.3 1.3 2.9 3 6.3 3 3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.3-1.3-2.9-3-6.3-3z"
            fill="#38BDF8"
            transform="scale(0.8) translate(3, 1)"
          />
        </svg>
      );
    case 'html5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3l1.6 18 6.4 1.8 6.4-1.8L20 3H4z" fill="#E34F26" />
          <path d="M12 4.5v16.7l5.1-1.4 1.3-15.3H12z" fill="#EF652A" />
          <path d="M7.4 7.2h9.2l-.2 2.2H9.8l.2 2.4h6.7l-.6 6.8-4.1 1.1-4.1-1.1-.3-3.4H9.8l.1 1.6 2.1.6 2.1-.6.3-2.8H7.2l.2-6.8z" fill="#FFFFFF" />
        </svg>
      );
    case 'css3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3l1.6 18 6.4 1.8 6.4-1.8L20 3H4z" fill="#1572B6" />
          <path d="M12 4.5v16.7l5.1-1.4 1.3-15.3H12z" fill="#33A9DC" />
          <path d="M12 7.2h4.6l-.4 4.6h-4.2V7.2zm0 6.8h2.3l-.2 2.3-2.1.6v2.3l4.1-1.1.6-6.3H12v2.2z" fill="#FFFFFF" />
          <path d="M12 7.2H7.4l.4 4.6H12V9.4H9.8l-.2-2.2H12zm0 6.8H9.6l-.2-2.2H7.2l.4 4.6 4.4 1.2v-2.4l-2.1-.6.1-1.2H12v.6z" fill="#EBEBEB" />
        </svg>
      );
    case 'fastapi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#009688" />
          <path d="M13 3L6 14h5l-1 7 8-11h-5l1-7z" fill="#FFFFFF" />
        </svg>
      );
    case 'flask':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M9 3v4.5L5.2 16c-.6 1.2-.6 2.5 0 3.7.6 1.2 1.8 1.9 3.2 1.9h7.2c1.4 0 2.6-.7 3.2-1.9.6-1.2.6-2.5 0-3.7L15 7.5V3H9z" stroke="#000000" strokeWidth="1.8" />
          <path d="M8 14h8" stroke="#000000" strokeWidth="1.5" />
          <circle cx="10" cy="17" r="1" fill="#000000" />
          <circle cx="13" cy="16" r="1.2" fill="#000000" />
        </svg>
      );
    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 3C6.5 3 2 7 2 12c0 3.6 2.4 6.8 6 8.1v-2.3C5.6 16.7 4 14.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.5-1.6 4.7-4 5.8v2.3c3.6-1.3 6-4.5 6-8.1 0-5-4.5-9-10-9z" fill="#00758F" />
          <path d="M9 11h6v2H9z" fill="#F29111" />
        </svg>
      );
    case 'sqlite':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 6c0-2.2 3.6-4 8-4s8 1.8 8 4v12c0 2.2-3.6 4-8 4s-8-1.8-8-4V6z" fill="#003B57" />
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00adef" />
        </svg>
      );
    case 'pytorch':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M14.5 3.5a8 8 0 105.7 13.6l-1.5-1.5a6 6 0 11-4.2-10V3.5z" fill="#EE4C2C" />
          <circle cx="15.5" cy="5.5" r="1.5" fill="#EE4C2C" />
        </svg>
      );
    case 'flower':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3.5" fill="#FFB300" />
          <circle cx="12" cy="5.5" r="3" fill="#FF7043" />
          <circle cx="12" cy="18.5" r="3" fill="#FF7043" />
          <circle cx="5.5" cy="12" r="3" fill="#FF7043" />
          <circle cx="18.5" cy="12" r="3" fill="#FF7043" />
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9.1 4.3l2.7 2.7c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.6 2.6c.6-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.7-.7.7-1.9.7-2.7 0-.6-.6-.7-1.4-.5-2.1L12.9 9.8v5.5c.2.2.3.5.3.8 0 .9-.8 1.7-1.7 1.7-.9 0-1.7-.8-1.7-1.7 0-.4.1-.7.3-1V8.6L7.3 6.1 2.4 11c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.6-.7.6-1.6.1-2.2z" fill="#F05032" />
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'vscode':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M17.5 2.5L7.5 10.5 4 8 2.5 9.5l3.5 2.5L2.5 14.5 4 16l3.5-2.5 10 8 4-2V4.5l-4-2zm0 4.5v10l-6.5-5 6.5-5z" fill="#007ACC" />
        </svg>
      );
    case 'postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M8 12l3-3v2.5h5V13h-5v2.5L8 12z" fill="#FFFFFF" />
        </svg>
      );
    case 'vercel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 20h20L12 2z" />
        </svg>
      );
    case 'api':
      return <Workflow className={`${className} text-[#0b0b0c]`} />;
    case 'shield':
    case 'opacus':
      return <Shield className={`${className} text-[#0b0b0c]`} />;
    case 'brain':
    case 'machine learning':
      return <Brain className={`${className} text-[#0b0b0c]`} />;
    case 'network':
    case 'federated learning':
      return <Network className={`${className} text-[#0b0b0c]`} />;
    case 'database':
    case 'sql':
      return <Database className={`${className} text-[#0b0b0c]`} />;
    default:
      return <Code className={`${className} text-[#0b0b0c]`} />;
  }
}
