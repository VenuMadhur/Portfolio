import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import SectionHeading from '../components/SectionHeading';
import TechIcon from '../components/TechIcon';
import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#ffffff] text-[#0b0b0c] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="02. Technical Toolkit"
          title="Skills & Technologies"
          subtitle="A practical foundation across modern software engineering, web architecture, and applied machine learning."
          align="center"
          dark={false}
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c6f432] cursor-pointer ${
                  isSelected
                    ? 'bg-[#0b0b0c] text-[#c6f432] shadow-sm'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-[#0b0b0c]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedSkills.map((categoryGroup) => (
            <div
              key={categoryGroup.category}
              className="bg-zinc-50/80 hover:bg-zinc-50 rounded-2xl p-6 sm:p-7 border border-zinc-200 hover:border-[#0b0b0c] transition-all duration-300 hover:shadow-lg hover:shadow-zinc-200/60 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-lg text-[#0b0b0c]">
                    {categoryGroup.category}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white border border-zinc-200 text-zinc-600 font-medium">
                    {categoryGroup.items.length} tools
                  </span>
                </div>

                <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                  {categoryGroup.description}
                </p>

                {/* Items List */}
                <div className="grid grid-cols-1 gap-2.5">
                  {categoryGroup.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-200 shadow-xs hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center p-1 border border-zinc-100 group-hover:scale-105 transition-transform">
                          <TechIcon name={skill.icon || skill.name} className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-900 group-hover:text-[#0b0b0c] transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      {skill.tag && (
                        <span className="text-[11px] font-mono text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Proficiency Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b0b0c] shrink-0" />
                <span>Demonstrated in course projects & codebases</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
