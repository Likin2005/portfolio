import { useState } from 'react'
import { Code, Database, Cpu, Layers, Sparkles, Terminal, Wrench } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filterTabs = [
    { label: 'All', icon: <Layers className="w-3.5 h-3.5" /> },
    { label: 'Programming Languages', icon: <Terminal className="w-3.5 h-3.5" /> },
    { label: 'Backend & Web Engineering', icon: <Code className="w-3.5 h-3.5" /> },
    { label: 'Databases & Retrieval', icon: <Database className="w-3.5 h-3.5" /> },
    { label: 'AI, LLMs & Orchestration', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'Computer Science Fundamentals', icon: <Cpu className="w-3.5 h-3.5" /> },
    { label: 'Developer Tools & Practices', icon: <Wrench className="w-3.5 h-3.5" /> },
  ]

  const displayedCategories =
    activeFilter === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(cat.title.toLowerCase()))

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Verified technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">skills & toolstack</span>.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Organized strictly from academic credentials, competitive programming, and deployed projects without arbitrary percentage bars.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800/80">
          {filterTabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveFilter(tab.label)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeFilter === tab.label
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-[#0a0e17] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/30"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                    Category 0{skillCategories.indexOf(cat) + 1}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {cat.skills.length} skills
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6">{cat.subtitle}</p>

                {/* Skills Badges with Micro-Descriptions */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verified in Work & Resume</span>
                <span className="text-cyan-400">• Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
