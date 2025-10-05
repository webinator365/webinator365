'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const brandsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-on-scroll').forEach((el) => {
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="fade-on-scroll text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
          Software che funziona.<br />
          <span className="text-primary">Fatto su misura.</span>
        </h1>
        
        <p className="fade-on-scroll fade-in-delay-1 text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Creiamo software personalizzati per aziende che vogliono crescere.<br className="hidden sm:block" />
          Niente soluzioni standard. Solo quello che ti serve davvero.
        </p>
        
        <div className="fade-on-scroll fade-in-delay-2">
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 hover:shadow-lg"
          >
            Parliamo del tuo progetto
          </a>
        </div>

        {/* Scrolling brands */}
        <div className="fade-on-scroll fade-in-delay-3 mt-20 pt-16 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-8 uppercase tracking-wider">
            Ci hanno scelto
          </p>
          
          <div className="relative overflow-hidden">
            <div className="flex gap-12 animate-scroll">
              {/* Duplico l'array per creare l'effetto infinito */}
              {[...brands, ...brands].map((brand, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 text-slate-400 font-bold text-xl whitespace-nowrap"
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
