import { Users, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react'
import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#080b12]/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>04 // Leadership & Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Academic involvements & <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">leadership roles</span>.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Guiding peers through complex computer science concepts and steering student technical initiatives at Vidyavardhaka College of Engineering.
          </p>
        </div>

        {/* Structured Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-[#0a0e17] border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium ${
                    exp.category === 'Leadership'
                      ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/50'
                      : 'bg-indigo-950/70 text-indigo-300 border border-indigo-800/50'
                  }`}>
                    {exp.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role & Org */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 shrink-0 text-cyan-400">
                    {exp.category === 'Leadership' ? (
                      <Users className="w-5 h-5" />
                    ) : (
                      <GraduationCap className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                  {exp.description}
                </p>

                {/* Key Contributions List */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
