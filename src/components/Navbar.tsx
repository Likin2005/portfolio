import { useState, useEffect } from 'react'
import { FileText, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
            aria-label="Likin M B Homepage"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              L
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                LIKIN <span className="text-cyan-400 font-semibold">M B</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase -mt-0.5">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Status Pill */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Likin_M_B_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:brightness-110 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 animate-in fade-in duration-200">
          <div className="flex flex-col gap-1.5">
            <div className="px-3 py-2 mb-2 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-300 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
              <span>{personalInfo.status}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download="Likin_M_B_Resume.pdf"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-800 text-cyan-300 border border-slate-700 hover:bg-slate-700/80 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
              >
                <span>Connect with Likin</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
