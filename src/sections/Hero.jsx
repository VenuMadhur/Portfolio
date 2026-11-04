import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Code2, Sparkles, Terminal, Cpu, Database, Network } from 'lucide-react';
import { personalData } from '../data/personal';
import ResumeButtons from '../components/ResumeButtons';
import SocialLinks from '../components/SocialLinks';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalData.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#08111F] text-white pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Small Intro Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest w-fit mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>HELLO, I'M</span>
            </div>

            {/* Candidate Name */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              <span className="block text-slate-100">CHOLLETI</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                VENU MADHUR
              </span>
            </h1>

            {/* Animated Rotating Role */}
            <div className="h-10 sm:h-12 flex items-center mb-6 overflow-hidden">
              <span className="text-slate-400 text-lg sm:text-xl font-medium mr-2">I build as a</span>
              <div className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="inline-block text-lg sm:text-2xl font-bold text-cyan-300 font-heading"
                  >
                    {personalData.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Introduction Statement */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-4 font-normal">
              {personalData.introduction}
            </p>

            {/* Supporting Statement */}
            <p className="text-slate-400 text-sm sm:text-base italic max-w-xl mb-8 border-l-2 border-cyan-400/60 pl-3">
              "{personalData.supportingStatement}"
            </p>

            {/* Hero Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/30 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <div id="resume-actions" className="transition-all duration-300">
                <ResumeButtons variant="hero" />
              </div>
            </div>

            {/* Social Connectivity */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <SocialLinks dark={true} />
            </div>
          </div>

          {/* Right Column: Interactive Engineering Composition / Portrait Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/4.5] rounded-3xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-800/40 to-cyan-500/20 shadow-2xl backdrop-blur-md">
              
              {/* Inner Card Frame */}
              <div className="w-full h-full rounded-[22px] bg-[#0E1A2C] border border-slate-800/80 p-6 flex flex-col justify-between relative overflow-hidden">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>engineer.profile</span>
                  </div>
                </div>

                {/* Center Composition: Monogram or Portrait Placeholder */}
                <div className="my-auto py-6 flex flex-col items-center text-center relative z-10">
                  <div className="relative mb-5 group">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 via-slate-800 to-cyan-400 p-[2px] shadow-xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-[14px] bg-[#08111F] flex flex-col items-center justify-center p-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-radial-glow opacity-60" />
                        <span className="font-heading font-black text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-cyan-200">
                          {personalData.monogram}
                        </span>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 mt-1">
                          Engineer
                        </span>
                      </div>
                    </div>

                    {/* Verified Tag */}
                    <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold shadow-md flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      CSE '26
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-white text-lg">
                    {personalData.fullName}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    B.Tech in Computer Science & Engineering
                  </p>

                  <div className="mt-4 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-cyan-300">
                    Status: Open to Software & AI Roles
                  </div>
                </div>

                {/* Floating Architectural Badges */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                    <Code2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">React & Full Stack</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">Python & AI/ML</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                    <Network className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate">Federated Learning</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                    <Database className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">FastAPI & SQL</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
