'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)`, animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Animated title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 gradient-text animate-fade-in-up">
          WEBINATOR365
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-slate-300 animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
          Software Solutions That Never Stop
        </p>
        
        <p className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 text-slate-400 max-w-3xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
          Sviluppiamo software che funziona.
          <br className="hidden sm:block" />
          <span className="block sm:inline"> </span>
          <span className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 mt-2 sm:mt-0">
            <span className="hover:text-primary transition-colors">Web</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors">Mobile</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors">Blockchain</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors">Automazioni</span>
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#contact" 
            className="group relative bg-primary hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            <span className="relative z-10">Parliamone</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href="#services" 
            className="group border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            Scopri di più
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <svg className="w-6 h-6 text-slate-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
