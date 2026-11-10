import React from 'react';
import { ExternalLink, Video, Info } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import ProjectMockup from './ProjectMockup';

export default function ProjectCard({ project }) {
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '');
  const hasDemo = Boolean(project.demoUrl && project.demoUrl.trim() !== '');
  const hasVideo = Boolean(project.videoUrl && project.videoUrl.trim() !== '');

  return (
    <article className="group bg-[#0b0b0c] text-white rounded-2xl border border-zinc-800 overflow-hidden shadow-xl hover:shadow-2xl hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        {/* Project Cover / Mockup Visual */}
        <div className="relative border-b border-zinc-800 overflow-hidden">
          <ProjectMockup type={project.mockupType} accentColor={project.accentColor} />
          
          {/* Badge Overlay */}
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide bg-[#0b0b0c]/90 text-[#c6f432] backdrop-blur-md border border-[#c6f432]/30 shadow-xs">
              {project.badge}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#c6f432] font-bold">
              {project.category}
            </span>
          </div>

          <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#c6f432] transition-colors mb-3 leading-snug">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {project.impact && (
            <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-5 leading-normal">
              <strong className="text-white font-semibold block mb-0.5">Key Capability:</strong>
              {project.impact}
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons Footer */}
      <div className="px-6 pb-6 pt-3 border-t border-zinc-800/80 flex items-center gap-3">
        {/* GitHub Link */}
        {hasGithub ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold border border-zinc-700 hover:border-zinc-500 shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>Code</span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-zinc-900/40 text-zinc-600 text-xs font-medium border border-zinc-800/80 cursor-not-allowed"
            title="Repository link being finalized in projects.js"
          >
            <GithubIcon className="w-3.5 h-3.5 opacity-40" />
            <span>Repo Pending</span>
          </button>
        )}

        {/* Live Demo or Video Button (Lime Green Primary) */}
        {hasDemo ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#c6f432] hover:bg-[#b5e526] text-[#0b0b0c] text-xs font-bold shadow-xs hover:shadow-[0_0_15px_rgba(198,244,50,0.3)] transition-all focus:outline-none focus:ring-2 focus:ring-[#c6f432]"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : hasVideo ? (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#c6f432] hover:bg-[#b5e526] text-[#0b0b0c] text-xs font-bold shadow-xs hover:shadow-[0_0_15px_rgba(198,244,50,0.3)] transition-all focus:outline-none focus:ring-2 focus:ring-[#c6f432]"
          >
            <Video className="w-3.5 h-3.5" />
            <span>Watch Demo</span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-zinc-900/40 text-zinc-600 text-xs font-medium border border-zinc-800/80 cursor-not-allowed"
            title="Demo deployment being configured in projects.js"
          >
            <Info className="w-3.5 h-3.5 opacity-40" />
            <span>Demo Pending</span>
          </button>
        )}
      </div>
    </article>
  );
}
