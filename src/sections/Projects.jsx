import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, FolderGit2, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Exactly three featured cards initially
  const initialProjects = projectsData.slice(0, 3);
  const remainingProjects = projectsData.slice(3);

  const displayedProjects = showAll ? projectsData : initialProjects;

  return (
    <section id="projects" className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="03. Selected Work"
          title="Featured Projects"
          subtitle="Some things I've designed, developed, and brought to life."
          align="center"
          dark={false}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All / Show Less Toggle Button */}
        {projectsData.length > 3 && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-600 font-semibold text-sm border border-slate-300 hover:border-blue-400 shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4 text-blue-600" />
              <span>
                {showAll
                  ? 'Show Less Projects'
                  : `View All Projects (${projectsData.length})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              Additional projects can be registered in src/data/projects.js
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
