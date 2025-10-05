'use client'

import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.fade-in-view').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const brands = [
    'ACME Corp',
    'TechFlow',
    'InnovateLab',
    'DigitalWave',
    'SmartSys',
    'CloudBase',
    'DataCore',
    'WebPro'
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto w-full text-center">
        <h1 className="fade-in-view text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight px-4">
          Software che funziona.<br />
          <span className="text-primary">Fatto su misura.</span>
        </h1>
        
        <p className="fade-in-view delay-1 text-base sm:text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto px-4">
          Creiamo software personalizzati per aziende che vogliono crescere.
          <span className="block mt-2">Niente soluzioni standard. Solo quello che ti serve davvero.</span>
        </p>
        
        <div className="fade-in-view delay-2 px-4">
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
          >
            Parliamo del tuo progetto
          </a>
        </div>

        {/* Scrolling brands */}
        <div className="fade-in-view delay-3 mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-slate-800">
          <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 uppercase tracking-wider">
            Ci hanno scelto
          </p>
          
          <div className="relative overflow-hidden">
            <div className="flex gap-8 sm:gap-12 animate-scroll">
              {[...brands, ...brands].map((brand, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 text-slate-600 font-semibold text-base sm:text-xl whitespace-nowrap"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
