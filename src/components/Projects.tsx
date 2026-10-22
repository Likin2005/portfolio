import { useState } from 'react'
import { FolderGit2, ExternalLink, ArrowRight, Sparkles } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { projects } from '../data/portfolioData'
import { Project } from '../types/portfolio'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const filterOptions = ['All', 'AI & ML', 'Full-Stack', 'Backend & APIs']

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter)

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // Selected Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Engineered systems & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">AI applications</span>.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Real implementations solving genuine problems with modern AI models, robust backend architectures, and clean database structures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2 border-b border-slate-800/80">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-[#0a0e17] border ${
                project.featured
                  ? 'border-slate-700/80 hover:border-cyan-500/50 shadow-xl shadow-cyan-950/10'
                  : 'border-slate-800 hover:border-slate-700 shadow-lg shadow-black/20'
              } p-6 sm:p-8 transition-all duration-300 group hover:-translate-y-1 relative`}
            >
              {/* Top Accent Line for Featured */}
              {project.featured && (
                <div className="absolute top-0 inset-x-8 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-80" />
              )}

              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-cyan-400 font-bold">
                      0{index + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-4 font-mono">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Problem & Solution Snips */}
                <div className="space-y-2 mb-6 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="font-semibold text-rose-400 block mb-0.5">Problem:</span>
                    <span className="text-slate-400 leading-snug">{project.problem}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="font-semibold text-emerald-400 block mb-0.5">Engineering Solution:</span>
                    <span className="text-slate-400 leading-snug">{project.solution}</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/90 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Code Repository</span>
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">
                      Academic / Full-Stack Project
                    </span>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  )
}
