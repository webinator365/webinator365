'use client'

import { useState } from 'react'

export default function WhyUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const reasons = [
    {
      icon: "💪",
      title: "Competenze tecniche reali, non solo chiacchiere",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🎨",
      title: "Progetti su misura, non template preconfezionati",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "💬",
      title: "Disponibilità e comunicazione chiara",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🚀",
      title: "Tecnologie moderne e scalabili",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🛡️",
      title: "Supporto continuo, 365 giorni l'anno",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in-up">
            Perché Webinator365
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Il partner tecnologico su cui puoi contare
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 animate-fade-in-up cursor-pointer transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`text-3xl sm:text-4xl flex-shrink-0 transform transition-all duration-300 ${hoveredIndex === index ? 'scale-125 rotate-12' : ''}`}>
                {reason.icon}
              </div>
              
              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2">
                  <div className={`text-2xl sm:text-3xl font-bold ${hoveredIndex === index ? 'text-primary' : 'text-slate-300'} transition-colors duration-300 flex-shrink-0`}>
                    ✓
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 group-hover:text-slate-900 transition-colors duration-300 leading-snug">
                    {reason.title}
                  </p>
                </div>
              </div>

              {/* Shine effect */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine" />
              )}
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: "100+", label: "Progetti" },
            { value: "50+", label: "Clienti" },
            { value: "365", label: "Giorni/Anno" },
            { value: "24/7", label: "Supporto" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
