import { FileText, Download, ExternalLink, CheckCircle2, Sparkles, Eye } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function ResumeSection() {
  const resumeHighlights = [
    'B.E. in Computer Science (Artificial Intelligence & Machine Learning) — 8.91 CGPA',
    'Full-Stack & Backend Engineering: FastAPI, Flask, React, MySQL, MongoDB, RESTful APIs',
    'Practical AI Experience: RAG Systems, LLaVA Multimodal Verification, LangGraph',
    'Proven Competitive Programming: 1st Prize in National CodeHunt, 3rd in CodeOfDuty',
    'Demonstrated Leadership: Event Head at Vector Flow & Academic Peer Tutor'
  ]

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>07 // Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Curriculum vitae & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">resume</span>.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Download the official single-page resume or preview credentials, coursework, and technical competencies.
          </p>
        </div>

        {/* Main Resume Card */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/80 to-[#0a0e17] border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Summary and CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Verified PDF • Updated 2026</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {personalInfo.name} — Resume Overview
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                This document provides a concise summary of my academic achievements at Vidyavardhaka College of Engineering,
                technical skills across Python, C++, and modern web/AI stacks, and impact-driven project engineering.
              </p>

              {/* Highlights Checkmarks */}
              <div className="space-y-2.5 pt-2">
                {resumeHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Download and View Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <a
                  href="/resume.pdf"
                  download="Likin_M_B_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 font-semibold text-sm shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column: PDF Preview Interactive Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-xl relative group">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span>Likin_M_B_Resume.pdf</span>
                </div>

                {/* PDF Graphic Preview Mock */}
                <div className="mt-4 p-5 rounded-xl bg-[#0d121f] border border-slate-800/80 space-y-3 font-mono text-left">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-white text-sm">LIKIN M B</div>
                      <div className="text-[10px] text-cyan-400">Computer Science (AI-ML)</div>
                    </div>
                    <div className="text-[9px] text-slate-500 text-right">
                      Mysore, KA<br />CGPA 8.91
                    </div>
                  </div>

                  <div className="h-px bg-slate-800 my-2" />

                  <div className="space-y-1.5 text-[10px] text-slate-400">
                    <div className="text-white font-semibold text-[11px]">EDUCATION</div>
                    <div className="text-slate-300">Vidyavardhaka College of Engineering (2023-2027)</div>
                    <div className="text-slate-300">Pramati Hillview Academy (2020-2023)</div>
                  </div>

                  <div className="h-px bg-slate-800 my-2" />

                  <div className="space-y-1.5 text-[10px] text-slate-400">
                    <div className="text-white font-semibold text-[11px]">PROJECT HIGHLIGHTS</div>
                    <div>• Smart Platform Community for Sustainability (RAG/LLaVA)</div>
                    <div>• Logistic Command Voice Intelligence (FastAPI/LangGraph)</div>
                    <div>• Hospital Management System (React/Flask/MySQL)</div>
                  </div>

                  <div className="h-px bg-slate-800 my-2" />

                  <div className="space-y-1 text-[10px] text-slate-400">
                    <div className="text-white font-semibold text-[11px]">AWARDS & LEADERSHIP</div>
                    <div className="text-amber-400 font-semibold">• 1st Prize Winner — CodeHunt Competition</div>
                    <div className="text-cyan-400">• Event Head @ Vector Flow & Peer Tutor</div>
                  </div>
                </div>

                {/* Direct Action Link below thumbnail */}
                <div className="mt-4 text-center">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Click to open official PDF directly</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
