import { useEffect } from 'react'
import { X, ExternalLink, Cpu, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { Project } from '../types/portfolio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#090d16] border border-slate-700/80 shadow-2xl p-6 sm:p-8 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase font-semibold bg-cyan-950/80 border border-cyan-700/60 text-cyan-300">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400">
                <Sparkles className="w-3 h-3" />
                Featured Project
              </span>
            )}
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-cyan-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-2">
          
          {/* Summary */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-sm leading-relaxed">
            {project.summary}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/30">
              <div className="flex items-center gap-2 text-rose-300 text-xs font-semibold uppercase font-mono mb-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase font-mono mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture & Implementation Details */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Architectural Implementation & Engineering Decisions</span>
            </h3>
            <ul className="space-y-2">
              {project.architectureDetails.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Metrics / Highlights if present */}
          {project.metricsOrHighlights && project.metricsOrHighlights.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Key Highlights & System Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {project.metricsOrHighlights.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300"
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/90 border border-slate-700/80 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-600 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>View Repository on GitHub</span>
              </a>
            ) : (
              <span className="text-xs text-slate-500 font-mono">
                Source code repository verified from resume
              </span>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  )
}
