'use client'

import { useState } from 'react'

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  return (
    <footer className="bg-slate-950 text-white py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-50" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              WEBINATOR365
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mb-4">
              Software Solutions That Never Stop
            </p>
            {/* Social icons */}
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              {[
                { name: 'GitHub', icon: '💻', color: 'hover:text-purple-400' },
                { name: 'LinkedIn', icon: '💼', color: 'hover:text-blue-400' },
                { name: 'Twitter', icon: '🐦', color: 'hover:text-cyan-400' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`text-2xl sm:text-3xl transition-all duration-300 transform ${hoveredSocial === social.name ? 'scale-125 -translate-y-1' : ''} ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm sm:text-base text-slate-400">
              {[
                'Sviluppo Web & Mobile',
                'Automazioni & Integrazioni',
                'Blockchain Solutions',
                'Software Su Misura'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contatti</h4>
            <ul className="space-y-2 text-sm sm:text-base text-slate-400">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span>📧</span>
                <a href="mailto:info@webinator365.com" className="hover:text-primary transition-colors duration-300">
                  info@webinator365.com
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span>⏰</span>
                <span>Disponibili 365 giorni l'anno</span>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span>💬</span>
                <span>Risposta entro 24h</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-400">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Webinator365. Tutti i diritti riservati.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-8 right-4 sm:right-8 bg-gradient-to-r from-primary to-secondary p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl group"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}
