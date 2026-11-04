import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import SectionHeading from '../components/SectionHeading';
import TechIcon from '../components/TechIcon';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-white text-slate-900 border-t border-slate-200">
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-semibold'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
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
              className="bg-slate-50/80 hover:bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    {categoryGroup.category}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-500">
                    {categoryGroup.items.length} tools
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {categoryGroup.description}
                </p>

                {/* Items List */}
                <div className="grid grid-cols-1 gap-2.5">
                  {categoryGroup.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 transition-all duration-200 shadow-xs hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center p-1 border border-slate-100 group-hover:scale-105 transition-transform">
                          <TechIcon name={skill.icon || skill.name} className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      {skill.tag && (
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Proficiency Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Demonstrated in course projects & codebases</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
