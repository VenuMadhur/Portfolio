import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';
import { educationHistory } from '../data/education';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const visibleEducation = educationHistory.filter((edu) => edu.visible);

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="01. About Me"
          title="Engineering & Education"
          subtitle={personalData.about.lead}
          align="center"
          dark={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Narrative & Career Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Engineering Philosophy & Goals</span>
              </h3>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                {personalData.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Quick Highlights Grid */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                {personalData.about.highlights.map((h, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {h.label}
                    </span>
                    <span className="font-semibold text-slate-800 text-xs sm:text-sm mt-0.5 block">
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Box */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-6">
              <h4 className="font-heading font-semibold text-blue-950 text-base mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Foundational Disciplines</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Data Structures & Algorithms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Object-Oriented Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Full Stack Web Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Applied Machine Learning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Vertical Education Timeline */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                      Academic Timeline
                    </h3>
                    <p className="text-xs text-slate-400">Most recent accomplishments first</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-medium">
                  Class of 2026
                </span>
              </div>

              {/* Timeline Container */}
              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:via-blue-300 before:to-slate-200">
                {visibleEducation.map((edu, idx) => (
                  <div key={edu.id} className="relative group">
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-blue-600 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-600" />
                    </div>

                    {/* Timeline Content Card */}
                    <div className="bg-slate-50/80 hover:bg-slate-50 transition-colors p-5 rounded-xl border border-slate-200/80">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-100/80 text-blue-800 border border-blue-200">
                          {edu.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-700 mt-0.5">
                        {edu.institution}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                        {edu.description}
                      </p>

                      {edu.keyHighlights && (
                        <div className="mt-3.5 pt-3 border-t border-slate-200/60 space-y-1.5">
                          {edu.keyHighlights.map((hl, hlIdx) => (
                            <div key={hlIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Note on Customization */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Editable via src/data/education.js</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
