import React from 'react';
import { Activity, ShieldCheck, Cpu, Terminal, Users, HeartPulse, FileText, Lock, Network, Database } from 'lucide-react';

export default function ProjectMockup({ type, accentColor = '#3B82F6' }) {
  switch (type) {
    case 'vital-dashboard':
      return (
        <div className="w-full h-48 bg-[#091322] p-4 flex flex-col justify-between text-white font-mono text-xs relative overflow-hidden select-none">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          
          <div className="flex items-center justify-between border-b border-blue-900/40 pb-2 relative z-10">
            <div className="flex items-center gap-2 text-cyan-400">
              <HeartPulse className="w-4 h-4 animate-pulse" />
              <span className="font-semibold text-[11px] uppercase tracking-wider">Soldier Telemetry AI</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
              Vitals Normal
            </span>
          </div>

          {/* Real-time telemetry tiles */}
          <div className="grid grid-cols-3 gap-2 relative z-10 my-1">
            <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">HEART RATE</span>
              <span className="text-sm font-bold text-cyan-300">74 <span className="text-[9px] font-normal text-slate-400">BPM</span></span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">SPO2 LEVEL</span>
              <span className="text-sm font-bold text-emerald-400">98.5 <span className="text-[9px] font-normal text-slate-400">%</span></span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">AI RISK INDEX</span>
              <span className="text-sm font-bold text-blue-400">0.08 <span className="text-[9px] font-normal text-slate-400">LOW</span></span>
            </div>
          </div>

          {/* Simulated ECG / Sensor Stream */}
          <div className="relative z-10 bg-slate-950/60 p-2 rounded-lg border border-blue-900/30 flex items-center justify-between">
            <span className="text-[10px] text-slate-400">FastAPI ML Pipeline:</span>
            <span className="text-[10px] text-cyan-400">Active Stream (40Hz)</span>
          </div>
        </div>
      );

    case 'code-editor':
      return (
        <div className="w-full h-48 bg-[#0D1524] p-4 flex flex-col justify-between text-white font-mono text-xs relative overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-indigo-900/40 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-[10px] text-slate-400">solution.py — AiMentor</span>
            </div>
            <span className="text-[10px] text-indigo-400">Python 3.11</span>
          </div>

          <div className="bg-[#080E18] p-2.5 rounded-lg border border-indigo-900/30 space-y-1 text-[11px] my-1">
            <div className="text-slate-400"><span className="text-indigo-400">def</span> <span className="text-cyan-300">assess_skills</span>(student_code):</div>
            <div className="pl-4 text-emerald-400"># AI Mentorship Engine</div>
            <div className="pl-4 text-slate-300">feedback = <span className="text-indigo-300">analyze_ast</span>(student_code)</div>
            <div className="pl-4 text-slate-300"><span className="text-indigo-400">return</span> feedback.generate_drills()</div>
          </div>

          <div className="bg-indigo-950/50 p-2 rounded-lg border border-indigo-500/30 flex items-center justify-between text-[10px]">
            <span className="text-indigo-300">AI Mentor: Dynamic hint ready</span>
            <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">94% Accuracy</span>
          </div>
        </div>
      );

    case 'records-table':
      return (
        <div className="w-full h-48 bg-[#09191C] p-4 flex flex-col justify-between text-white font-sans text-xs relative overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-teal-900/40 pb-2">
            <div className="flex items-center gap-2 text-teal-300 font-medium">
              <Users className="w-4 h-4 text-teal-400" />
              <span className="text-xs">VIA Health Vault</span>
            </div>
            <span className="text-[10px] text-teal-400 font-mono">4 Members Syncing</span>
          </div>

          <div className="space-y-1.5 my-1">
            <div className="bg-slate-900/70 p-2 rounded-lg border border-teal-900/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-xs text-slate-200">Annual Blood Work Panel</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono">Verified</span>
            </div>
            <div className="bg-slate-900/70 p-2 rounded-lg border border-teal-900/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs text-slate-200">Cardiology Consultation</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Next: Fri 10 AM</span>
            </div>
          </div>

          <div className="bg-teal-950/40 p-2 rounded-lg border border-teal-800/30 flex items-center justify-between text-[10px] text-teal-300">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-teal-400" />
              Client-Side Encrypted Storage
            </span>
            <span className="font-mono text-slate-400">REST Sync</span>
          </div>
        </div>
      );

    case 'federated-nodes':
    default:
      return (
        <div className="w-full h-48 bg-[#091522] p-4 flex flex-col justify-between text-white font-mono text-xs relative overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-cyan-900/40 pb-2">
            <div className="flex items-center gap-2 text-cyan-400">
              <Network className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold">Federated Aggregator (Flower)</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
              Round 12/20
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-1 text-center text-[10px]">
            <div className="bg-slate-900/80 p-2 rounded-lg border border-cyan-900/30">
              <span className="text-slate-400 block">Hospital Node A</span>
              <span className="text-cyan-300 font-bold">Local Ep 5</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded-lg border border-cyan-900/30">
              <span className="text-slate-400 block">Hospital Node B</span>
              <span className="text-cyan-300 font-bold">Local Ep 5</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded-lg border border-cyan-900/30">
              <span className="text-slate-400 block">Hospital Node C</span>
              <span className="text-cyan-300 font-bold">Local Ep 5</span>
            </div>
          </div>

          <div className="bg-cyan-950/40 p-2 rounded-lg border border-cyan-800/30 flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Opacus Differential Privacy (ε = 1.8)
            </span>
            <span className="text-slate-400">Zero Raw Data Leak</span>
          </div>
        </div>
      );
  }
}
