'use client'

import { useState } from 'react'

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      icon: "🌐",
      title: "Sviluppo Web & Mobile",
      description: "Applicazioni web responsive, PWA, app native iOS/Android. Dal sito vetrina all'e-commerce complesso.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "⚡",
      title: "Automazioni & Integrazioni",
      description: "Automatizziamo processi manuali e integriamo sistemi diversi per farti risparmiare tempo.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🔗",
      title: "Blockchain Solutions",
      description: "Estrazione dati, smart contracts, sviluppo su blockchain. Tecnologia avanzata per progetti innovativi.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "💼",
      title: "Software Su Misura",
      description: "Gestionali, CRM, piattaforme personalizzate. Costruiamo quello di cui hai veramente bisogno.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "🎯",
      title: "Consulenza Tecnica",
      description: "Analisi di fattibilità, scelta delle tecnologie, ottimizzazione architetturale.",
      gradient: "from-red-500 to-rose-500"
    }
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header with animation */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in-up">
            Cosa Facciamo
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Soluzioni software complete per ogni esigenza
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-6 sm:p-8 border-2 border-slate-200 rounded-xl hover:border-transparent transition-all duration-300 animate-fade-in-up cursor-pointer bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              <div className="absolute inset-[2px] bg-white rounded-[10px] -z-10" />
              
              {/* Icon with animation */}
              <div className={`text-4xl sm:text-5xl mb-3 sm:mb-4 transform transition-transform duration-300 ${hoveredIndex === index ? 'scale-110 rotate-12' : ''}`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect particles */}
              {hoveredIndex === index && (
                <>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-ping" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 px-4">
            Non trovi quello che cerchi? Parliamone!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            Contattaci
          </a>
        </div>
      </div>
    </section>
  )
}
