import React from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Layers, 
  FolderCode, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Lock,
  Sparkles 
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const About = () => {
  const iconMap = {
    FolderCode: FolderCode,
    ShieldCheck: ShieldCheck,
    Layers: Layers,
    Terminal: Terminal,
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="cyber-accent-text">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Combining rigorous computer science engineering principles with specialized cyber defense knowledge.
          </p>
        </div>

        {/* 2-Column Story & Statistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Card (7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Engineering Background</h3>
                    <p className="text-xs text-slate-400 font-mono">CSE • Cyber Security Specialization</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
                  Fresher / Candidate
                </span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-cyan-300 font-semibold">Computer Science Engineering student specializing in Cyber Security</strong> at Sri Shakthi Institute of Engineering and Technology. My engineering education is grounded in core computing fundamentals, algorithmic problem solving, and modern software architectures.
                </p>
                <p>
                  I am passionate about bridging the gap between <strong className="text-slate-100 font-semibold">robust software engineering</strong> and <strong className="text-slate-100 font-semibold">proactive cybersecurity</strong>. Whether designing high-throughput Flask APIs, crafting reactive web interfaces with React, or deploying defensive threat detection pipelines using Sysmon and ELK stack, my goal is to deliver software that is both high-performing and inherently secure.
                </p>
              </div>

              {/* Target Engineering Areas */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Primary Engineering Interests</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.focusAreas.map((area, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{area}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Statistics Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {personalInfo.statistics.map((stat, idx) => {
              const IconComponent = iconMap[stat.icon] || FolderCode;
              return (
                <div 
                  key={idx} 
                  className="glass-card p-5 rounded-2xl flex items-center gap-4 group hover:border-cyan-500/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all shadow-inner">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {stat.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
