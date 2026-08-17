import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  ShieldAlert, 
  Activity, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons = {
    Code2: Code2,
    Globe: Globe,
    Database: Database,
    ShieldAlert: ShieldAlert,
    Activity: Activity,
    Cpu: Cpu,
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="cyber-accent-text">Tooling</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Practical competencies in software engineering, full stack development, and cybersecurity defense.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/30'
                : 'bg-dark-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'bg-dark-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComp = categoryIcons[cat.icon] || Code2;
            return (
              <div 
                key={cat.id}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/50 transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {cat.skills.length} skills listed
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          skill.highlight
                            ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 shadow-xs'
                            : 'bg-slate-900/80 text-slate-300 border border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Verified in Projects</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
