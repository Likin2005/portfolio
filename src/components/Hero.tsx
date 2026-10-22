import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Sparkles, Terminal } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 mesh-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 mb-6 shadow-sm shadow-black/40 backdrop-blur-sm animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5 inline-block" />
              <span className="font-medium text-slate-200">Available for Summer / Full-time Opportunities</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-400 font-mono text-[11px]">2026/2027</span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2 mb-4">
              <p className="text-sm sm:text-base font-mono text-cyan-400 tracking-wide flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Hello, World! I am</span>
              </p>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1]">
                Likin <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">M B</span>
              </h1>
            </div>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight mb-4">
              AI/ML & Backend Software Engineer
            </h2>

            {/* Concise Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light">
              Undergraduate in Computer Science (Artificial Intelligence & Machine Learning) at{' '}
              <span className="text-white font-medium">Vidyavardhaka College of Engineering</span>. Passionate about
              building resilient backend microservices, Retrieval-Augmented Generation (RAG) systems, and turning complex
              algorithmic logic into scalable production software.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Likin_M_B_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-semibold text-sm shadow-md hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-slate-800/40 text-slate-300 hover:text-white border border-transparent font-medium text-sm transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Location Quick Info */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-200"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden sm:block h-5 w-px bg-slate-800" />

              <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Picture & Editorial Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow Card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Main Portrait Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-[#0b0f19] border border-slate-800/90 p-3 sm:p-4 shadow-2xl overflow-hidden">
                
                {/* Image Frame */}
                <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[4/4.6] border border-slate-800">
                  <img
                    src="/Me.png"
                    alt="Likin M B - Software Engineer"
                    className="w-full h-full object-cover object-top transition duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle inner gradient shadow at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/50 to-transparent" />
                  
                  {/* Floating Tag inside picture */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-slate-950/70 border border-slate-700/60 rounded-lg px-3 py-2 text-slate-200">
                    <span className="font-mono text-[11px] text-cyan-400">VVCE • AI-ML</span>
                    <span className="font-bold text-white">CGPA 8.91</span>
                  </div>
                </div>

                {/* Stat Badges under picture */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-left">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold mb-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>CodeHunt 1st</span>
                    </div>
                    <p className="text-[11px] text-slate-400">National Coding Contest</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold mb-0.5">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Vector Flow</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Event Head & Lead</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Scroll down to About section"
          >
            <span>DISCOVER MORE</span>
            <div className="w-8 h-12 rounded-full border border-slate-700 flex items-start justify-center p-1.5 group-hover:border-cyan-400 transition-colors">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
