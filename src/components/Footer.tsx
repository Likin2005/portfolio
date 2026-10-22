import { ArrowUp, Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-900 bg-[#06080d] py-14 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-cyan-500/20">
                L
              </div>
              <span className="font-display font-bold text-base text-white tracking-tight">
                LIKIN <span className="text-cyan-400 font-semibold">M B</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm text-xs leading-relaxed font-light">
              Computer Science & AI-ML undergraduate at Vidyavardhaka College of Engineering. Committed to clean code, scalable backend services, and intelligent solutions.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors ml-2"
                aria-label="Scroll back to top"
              >
                <span className="text-[11px] font-mono">Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              Mysuru, Karnataka, India • Timezone: IST (UTC+5:30)
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {currentYear} Likin M B. All rights reserved.
          </div>

          <div className="flex items-center gap-1 font-mono">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline mx-0.5" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
