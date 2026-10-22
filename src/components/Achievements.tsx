import { Trophy, Award, Sparkles, Medal } from 'lucide-react'
import { achievements } from '../data/portfolioData'

export default function Achievements() {
  const getBadgeStyle = (award: string) => {
    if (award.includes('1st')) {
      return {
        border: 'border-amber-500/50 hover:border-amber-400',
        glow: 'from-amber-500/10 via-amber-500/5 to-transparent',
        tag: 'bg-amber-950/80 text-amber-300 border-amber-700/60',
        icon: <Trophy className="w-6 h-6 text-amber-400" />,
      }
    }
    if (award.includes('3rd')) {
      return {
        border: 'border-cyan-500/40 hover:border-cyan-400',
        glow: 'from-cyan-500/10 via-cyan-500/5 to-transparent',
        tag: 'bg-cyan-950/80 text-cyan-300 border-cyan-700/60',
        icon: <Medal className="w-6 h-6 text-cyan-400" />,
      }
    }
    return {
      border: 'border-indigo-500/40 hover:border-indigo-400',
      glow: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
      tag: 'bg-indigo-950/80 text-indigo-300 border-indigo-700/60',
      icon: <Award className="w-6 h-6 text-indigo-400" />,
    }
  }

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#080b12]/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-800/50 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>06 // Competition Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Competitive programming & <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">honors</span>.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Demonstrated algorithmic problem-solving excellence and speed in regional and national-level coding competitions.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const style = getBadgeStyle(item.award)

            return (
              <div
                key={idx}
                className={`rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-[#0a0e17] border ${style.border} p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/30 flex flex-col justify-between relative overflow-hidden group`}
              >
                {/* Subtle Glow */}
                <div className={`absolute top-0 inset-x-0 h-24 bg-gradient-to-b ${style.glow} pointer-events-none`} />

                <div>
                  {/* Top Row: Icon & Award Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 shadow-md">
                      {style.icon}
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${style.tag}`}>
                      {item.award}
                    </span>
                  </div>

                  {/* Title & Competition */}
                  <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-4 font-mono">
                    {item.competition}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>

                  {/* Key Takeaway Box */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item.keyTakeaway}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
