'use client'

import { useEffect } from 'react'

export default function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('is-visible')) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px' }
    )

    document.querySelectorAll('.fade-in-view').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Gestionali e CRM",
      description: "Un sistema che organizza vendite, clienti e processi. Costruito esattamente come lavori tu."
    },
    {
      title: "App Mobile",
      description: "App iOS e Android fatte su misura. Dalle idee semplici ai progetti complessi."
    },
    {
      title: "Siti Web e Portali",
      description: "Siti web, dashboard, portali clienti. Veloci, moderni e facili da usare."
    },
    {
      title: "Integrazioni",
      description: "Colleghiamo i tuoi sistemi: CRM, gestionale, e-commerce. Tutto in un unico posto."
    },
    {
      title: "Prodotto Minimo (MVP)",
      description: "Hai un'idea? Realizziamo la prima versione in poche settimane per testarla subito."
    },
    {
      title: "AI e Automazioni",
      description: "Chatbot, assistenti virtuali, automazioni. Fai fare alla tecnologia il lavoro ripetitivo."
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="fade-in-view text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Cosa possiamo fare per te
          </h2>
          <p className="fade-in-view delay-1 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
            Ogni progetto parte da zero. Ascoltiamo cosa ti serve e costruiamo la soluzione giusta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`fade-in-view delay-${(index % 3) + 1} bg-slate-800/50 border border-slate-700 p-6 sm:p-8 rounded-xl hover:bg-slate-800 hover:border-primary/50 transition-all duration-300`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
