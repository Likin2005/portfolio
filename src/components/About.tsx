import { Award, Brain, CheckCircle2, Code2, Globe, Heart, Sparkles, Users } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function About() {
  const highlights = [
    {
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      title: 'AI & Backend Specialization',
      description: 'Focusing on LLMs, RAG vector retrieval systems, and asynchronous backend microservices.'
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      title: 'Rigorous DSA Foundation',
      description: 'Active competitive programmer with proven speed in C++ and algorithmic optimization.'
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      title: 'Peer Mentorship & Leadership',
      description: 'Appointed Academic Peer Tutor for core CS subjects and Event Head for Vector Flow club.'
    },
    {
      icon: <Award className="w-5 h-5 text-amber-400" />,
      title: 'Competition-Tested',
      description: '1st Prize in National CodeHunt, 3rd in CodeOfDuty, and cash award recipient in CodeBuddy.'
    }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-slate-900 bg-[#080b12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // Background & Ethos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Engineering with curiosity & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">architectural rigor</span>.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            A problem solver committed to writing clean code, designing resilient backend systems, and translating theoretical algorithms into production-ready software.
          </p>
        </div>

        {/* Main Grid: Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed font-light text-base sm:text-lg">
            <p>
              I am a final-year Computer Science undergraduate at{' '}
              <strong className="text-white font-semibold">Vidyavardhaka College of Engineering (VVCE), Mysore</strong>,
              specializing in <strong className="text-cyan-300 font-medium">Artificial Intelligence and Machine Learning</strong>.
              Currently holding an academic record of <span className="text-white font-mono font-bold bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">8.91 CGPA</span>,
              my technical passion bridges strong algorithmic principles with practical, high-throughput software engineering.
            </p>

            <p>
              My primary expertise centers on <strong className="text-white font-medium">scalable backend development, REST API design, and AI-driven applications</strong>.
              Whether implementing semantic search using Retrieval-Augmented Generation (RAG) and LLaVA vision models,
              orchestrating voice logistics with LangGraph and FastAPI, or designing ACID-compliant database architectures in MySQL and MongoDB,
              I approach every project with focus on reliability, maintainability, and efficiency.
            </p>

            <p>
              Beyond solo engineering, I believe great software is amplified by collaboration and knowledge sharing.
              As an appointed <strong className="text-white font-semibold">Academic Peer Tutor</strong>, I guide fellow students through complex concepts in
              Data Structures & Algorithms, DBMS, and Design & Analysis of Algorithms. As <strong className="text-white font-semibold">Event Head</strong> at
              the Vector Flow student club, I coordinate technical workshops and hackathons, cultivating a collaborative learning environment.
            </p>

            {/* Spoken Languages & Personal Interests */}
            <div className="pt-6 border-t border-slate-800/90 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Languages</span>
                </h3>
                <ul className="space-y-1.5 text-sm">
                  {personalInfo.languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between text-slate-300 pr-4">
                      <span className="font-medium text-white">{lang.name}</span>
                      <span className="text-xs text-slate-400 font-mono">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-pink-400" />
                  <span>Personal Pursuits</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 py-1 rounded-md text-xs bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c101c] border border-slate-800 hover:border-slate-700 transition-all duration-200 group shadow-lg shadow-black/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform duration-200 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base mb-1 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Summary Pill Card */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 text-slate-300 text-sm">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Primary Focus Areas</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Backend Services • RESTful APIs • LLMs & RAG • Vector Databases • C++ Competitive Programming • Relational Schemas
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
