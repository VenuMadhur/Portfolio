import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FolderGit2 } from 'lucide-react';
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
    <section id="projects" className="py-24 bg-[#f9f9fb] text-[#0b0b0c] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="03. Selected Work"
          title="Featured Projects"
          subtitle="Some things I've designed, developed, and brought to life."
          align="center"
          dark={false}
        />

        {/* Projects Grid with Dark Cards */}
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0b0b0c] hover:bg-zinc-900 text-white hover:text-[#c6f432] font-bold text-sm border border-zinc-800 shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#c6f432] cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4 text-[#c6f432]" />
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
            <p className="text-xs text-zinc-500 mt-2 font-mono">
              Additional projects can be registered in src/data/projects.js
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
