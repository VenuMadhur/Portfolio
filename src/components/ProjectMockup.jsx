import React from 'react';
import { Activity, ShieldCheck, Cpu, Terminal, Users, HeartPulse, FileText, Lock, Network, Database } from 'lucide-react';

export default function ProjectMockup({ type, accentColor = '#c6f432' }) {
  switch (type) {
    case 'vital-dashboard':
      return (
        <div className="w-full h-48 bg-[#0b0b0c] p-4 flex flex-col justify-between text-white font-mono text-xs relative overflow-hidden select-none border-b border-zinc-800">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 relative z-10">
            <div className="flex items-center gap-2 text-[#c6f432]">
              <HeartPulse className="w-4 h-4 animate-pulse" />
              <span className="font-semibold text-[11px] uppercase tracking-wider">Soldier Telemetry AI</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-zinc-900 text-[#c6f432] border border-zinc-800 text-[10px] font-bold">
              Vitals Normal
            </span>
          </div>

          {/* Real-time telemetry tiles */}
          <div className="grid grid-cols-3 gap-2 relative z-10 my-1">
            <div className="bg-[#141416] p-2 rounded-lg border border-zinc-800">
              <span className="text-[10px] text-zinc-500 block">HEART RATE</span>
              <span className="text-sm font-bold text-white">74 <span className="text-[9px] font-normal text-zinc-500">BPM</span></span>
            </div>
            <div className="bg-[#141416] p-2 rounded-lg border border-zinc-800">
              <span className="text-[10px] text-zinc-500 block">SPO2 LEVEL</span>
              <span className="text-sm font-bold text-[#c6f432]">98.5 <span className="text-[9px] font-normal text-zinc-500">%</span></span>
            </div>
            <div className="bg-[#141416] p-2 rounded-lg border border-zinc-800">
              <span className="text-[10px] text-zinc-500 block">AI RISK INDEX</span>
              <span className="text-sm font-bold text-white">0.08 <span className="text-[9px] font-normal text-zinc-500">LOW</span></span>
            </div>
          </div>

          {/* Sensor stream status */}
          <div className="relative z-10 bg-zinc-900/90 p-2 rounded-lg border border-zinc-800 flex items-center justify-between">
            <span className="text-[10px] text-zinc-400">FastAPI ML Pipeline:</span>
            <span className="text-[10px] text-[#c6f432] font-semibold">Active Stream (40Hz)</span>
          </div>
        </div>
      );

    case 'code-editor':
      return (
        <div className="w-full h-48 bg-[#0b0b0c] p-4 flex flex-col justify-between text-white font-mono text-xs relative overflow-hidden select-none border-b border-zinc-800">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#c6f432]" />
              <span className="ml-2 text-[10px] text-zinc-400">solution.py — AiMentor</span>
            </div>
            <span className="text-[10px] text-[#c6f432] font-bold">Python 3.11</span>
          </div>

          <div className="bg-[#141416] p-2.5 rounded-lg border border-zinc-800 space-y-1 text-[11px] my-1">
            <div className="text-zinc-400"><span className="text-[#c6f432] font-bold">def</span> <span className="text-white">assess_skills</span>(student_code):</div>
            <div className="pl-4 text-zinc-500"># AI Mentorship Engine</div>
            <div className="pl-4 text-zinc-300">feedback = <span className="text-white">analyze_ast</span>(student_code)</div>
            <div className="pl-4 text-zinc-300"><span className="text-[#c6f432]">return</span> feedback.generate_drills()</div>
          </div>

          <div className="bg-zinc-900/90 p-2 rounded-lg border border-zinc-800 flex items-center justify-between text-[10px]">
            <span className="text-zinc-300">AI Mentor: Dynamic hint ready</span>
            <span className="px-1.5 py-0.5 rounded bg-[#c6f432] text-[#0b0b0c] font-bold">94% Accuracy</span>
          </div>
        </div>
      );

    case 'records-table':
      return (
        <div className="w-full h-48 bg-[#0b0b0c] p-4 flex flex-col justify-between text-white font-sans text-xs relative overflow-hidden select-none border-b border-zinc-800">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <Users className="w-4 h-4 text-[#c6f432]" />
              <span className="text-xs font-heading font-bold">VIA Health Vault</span>
            </div>
            <span className="text-[10px] text-[#c6f432] font-mono font-bold">4 Members Syncing</span>
          </div>

          <div className="space-y-1.5 my-1">
            <div className="bg-[#141416] p-2 rounded-lg border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#c6f432]" />
                <span className="text-xs text-zinc-200">Annual Blood Work Panel</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-white font-mono">Verified</span>
            </div>
            <div className="bg-[#141416] p-2 rounded-lg border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-xs text-zinc-200">Cardiology Consultation</span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono">Next: Fri 10 AM</span>
            </div>
          </div>

          <div className="bg-zinc-900/90 p-2 rounded-lg border border-zinc-800 flex items-center justify-between text-[10px] text-zinc-300">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#c6f432]" />
              Client-Side Encrypted Storage
            </span>
            <span className="font-mono text-zinc-400">REST Sync</span>
          </div>
        </div>
      );

    case 'federated-nodes':
    default:
      return (
        <div className="w-full h-48 bg-[#0b0b0c] p-4 flex flex-col justify-between text-white font-mono text-xs relative overflow-hidden select-none border-b border-zinc-800">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <div className="flex items-center gap-2 text-white">
              <Network className="w-4 h-4 text-[#c6f432]" />
              <span className="text-xs font-semibold">Federated Aggregator (Flower)</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-900 text-[#c6f432] border border-zinc-800 font-bold">
              Round 12/20
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-1 text-center text-[10px]">
            <div className="bg-[#141416] p-2 rounded-lg border border-zinc-800">
              <span className="text-zinc-500 block">Hospital Node A</span>
              <span className="text-[#c6f432] font-bold">Local Ep 5</span>
            </div>
            <div className="bg-[#141416] p-2 rounded-lg border border-zinc-800">
              <span className="text-zinc-500 block">Hospital Node B</span>
              <span className="text-white font-bold">Local Ep 5</span>
            </div>
            <div className="bg-[#141416] p-2 rounded-lg border border-zinc-800">
              <span className="text-zinc-500 block">Hospital Node C</span>
              <span className="text-[#c6f432] font-bold">Local Ep 5</span>
            </div>
          </div>

          <div className="bg-zinc-900/90 p-2 rounded-lg border border-zinc-800 flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c6f432]" />
              Opacus Differential Privacy (ε = 1.8)
            </span>
            <span className="text-zinc-400">Zero Raw Data Leak</span>
          </div>
        </div>
      );
  }
}
