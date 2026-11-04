import React from 'react';
import { ExternalLink, Video, Info } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import ProjectMockup from './ProjectMockup';

export default function ProjectCard({ project }) {
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '');
  const hasDemo = Boolean(project.demoUrl && project.demoUrl.trim() !== '');
  const hasVideo = Boolean(project.videoUrl && project.videoUrl.trim() !== '');

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        {/* Project Cover / Mockup Visual */}
        <div className="relative border-b border-slate-100 overflow-hidden">
          <ProjectMockup type={project.mockupType} accentColor={project.accentColor} />
          
          {/* Badge Overlay */}
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-slate-900/80 text-white backdrop-blur-md border border-white/10 shadow-xs">
              {project.badge}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
              {project.category}
            </span>
          </div>

          <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
            {project.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {project.impact && (
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-5 leading-normal">
              <strong className="text-slate-900 font-semibold block mb-0.5">Key Capability:</strong>
              {project.impact}
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center gap-3">
        {/* GitHub Link */}
        {hasGithub ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Code</span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 text-slate-400 text-xs font-medium border border-slate-200/80 cursor-not-allowed"
            title="Repository link being finalized in projects.js"
          >
            <GithubIcon className="w-3.5 h-3.5 opacity-60" />
            <span>Repo Pending</span>
          </button>
        )}

        {/* Live Demo or Video Button */}
        {hasDemo ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : hasVideo ? (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <Video className="w-3.5 h-3.5" />
            <span>Watch Demo</span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 text-slate-400 text-xs font-medium border border-slate-200/80 cursor-not-allowed"
            title="Demo deployment being configured in projects.js"
          >
            <Info className="w-3.5 h-3.5 opacity-60" />
            <span>Demo Pending</span>
          </button>
        )}
      </div>
    </article>
  );
}
