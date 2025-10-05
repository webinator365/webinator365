'use client'

import { useEffect } from 'react'

export default function Services() {
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

  const services = [
    {
      title: "Gestionali e CRM",
      description: "Un sistema che organizza vendite, clienti e processi. Costruito esattamente come lavori tu.",
      image: "📊"
    },
    {
      title: "App Mobile",
      description: "App iOS e Android fatte su misura. Dalle idee semplici ai progetti complessi.",
      image: "📱"
    },
    {
      title: "Siti Web e Portali",
      description: "Siti web, dashboard, portali clienti. Veloci, moderni e facili da usare.",
      image: "💻"
    },
    {
      title: "Integrazioni",
      description: "Colleghiamo i tuoi sistemi: CRM, gestionale, e-commerce. Tutto in un unico posto.",
      image: "🔗"
    },
    {
      title: "Prodotto Minimo (MVP)",
      description: "Hai un'idea? Realizziamo la prima versione in poche settimane per testarla subito.",
      image: "🚀"
    },
    {
      title: "AI e Automazioni",
      description: "Chatbot, assistenti virtuali, automazioni. Fai fare alla tecnologia il lavoro ripetitivo.",
      image: "🤖"
    }
  ]

  return (
    <section id="services" className="py-20 sm:py-32 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="fade-on-scroll text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Cosa possiamo fare per te
          </h2>
          <p className="fade-on-scroll fade-in-delay-1 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ogni progetto parte da zero. Ascoltiamo cosa ti serve e costruiamo la soluzione giusta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`fade-on-scroll bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 fade-in-delay-${Math.min(index % 3 + 1, 3)}`}
            >
              <div className="text-5xl mb-4">{service.image}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
