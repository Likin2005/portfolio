import { useState } from 'react'
import { Mail, Copy, Check, MapPin, Send, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 3000)
    } catch {
      // Fallback
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error')
      setStatusMessage('Please fill in your name, email, and message.')
      return
    }

    const emailSubject = encodeURIComponent(
      formData.subject.trim() ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Inquiry] From ${formData.name}`
    )
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )

    // Open user's default email client
    window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`

    setFormStatus('success')
    setStatusMessage('Default email client triggered with your message!')
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-t from-cyan-600/10 via-blue-600/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>08 // Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Let&apos;s build something <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">meaningful</span>.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            I am actively seeking software engineering internships, AI/ML development roles, and collaborative projects.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/80 to-[#0a0e17] border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Direct Inbox
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Prompt Response</span>
                </span>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-lg sm:text-xl font-mono font-bold text-white hover:text-cyan-400 transition-colors break-all block mb-4"
              >
                {personalInfo.email}
              </a>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0a0e17] border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Professional Networks
              </h3>

              <div className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-900 text-blue-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs text-slate-400">
                        Connect professionally & explore recommendations
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-900 text-slate-200">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block">
                        GitHub Profile
                      </span>
                      <span className="text-xs text-slate-400">
                        Browse repositories, commits & experiments
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Location Badge */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Verified Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-[#0a0e17] border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fast Dispatch</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below. Clicking send will format and open your default email application ready to dispatch.
              </p>

              {formStatus === 'success' && (
                <div className="p-4 mb-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 mb-6 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs">
                  {statusMessage}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Software Engineering Internship / Project Discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Likin, I came across your portfolio and would love to discuss an opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message via Email Client</span>
                  </button>

                  <span className="text-[11px] text-slate-500 font-mono">
                    Direct delivery to {personalInfo.email}
                  </span>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
