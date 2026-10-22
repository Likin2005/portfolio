import { GraduationCap, MapPin, Calendar, Award, CheckCircle } from 'lucide-react'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 // Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Academic milestones & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">education</span>.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Rigorous computational and scientific foundations backing practical software engineering capability.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="space-y-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-[#0a0e17] border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl shadow-black/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Side: Institution & Degree */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                    <span className="text-slate-600">•</span>
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-400">{item.location}</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-1">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-300 mb-1">
                    {item.degree}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mb-4">
                    {item.field}
                  </p>

                  {/* Score Highlight Box */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-cyan-950/40 border border-cyan-800/60">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                        {item.scoreLabel}
                      </span>
                      <span className="text-base font-bold text-white font-mono">
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Key Highlights */}
                <div className="lg:col-span-7 lg:pl-6 lg:border-l lg:border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Academic Highlights & Coursework
                  </h4>
                  <ul className="space-y-2.5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
