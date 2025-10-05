'use client'

import { useEffect } from 'react'

export default function WhyUs() {
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

  const reasons = [
    {
      icon: "⚙️",
      title: "Fatto per te, non per tutti",
      description: "Niente template. Niente soluzioni preconfezionate. Solo software che risolve i tuoi problemi specifici."
    },
    {
      icon: "🔓",
      title: "È tuo al 100%",
      description: "Il codice, i dati, tutto. Nessuna dipendenza da noi o da altri fornitori."
    },
    {
      icon: "💰",
      title: "Paghi una volta sola",
      description: "Niente abbonamenti mensili che crescono. Un investimento che si ripaga nel tempo."
    },
    {
      icon: "🔌",
      title: "Cresce con te",
      description: "Aggiungi funzioni quando serve. Collegalo ad altri strumenti. È flessibile."
    }
  ]

  const team = [
    {
      icon: "👥",
      title: "Team esperto",
      description: "Oltre 10 anni di esperienza. Abbiamo già risolto problemi come i tuoi."
    },
    {
      icon: "🎯",
      title: "Un referente dedicato",
      description: "Una persona che segue il tuo progetto dall'inizio alla fine."
    },
    {
      icon: "🔄",
      title: "Vedi tutto mentre lavoriamo",
      description: "Aggiornamenti ogni settimana. Puoi dare feedback e cambiare direzione."
    },
    {
      icon: "⏱️",
      title: "Tempi reali",
      description: "Ti diciamo quanto ci vuole davvero. Budget chiari, consegne puntuali."
    }
  ]

  return (
    <>
      {/* Why Custom Section */}
      <section className="py-20 sm:py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="fade-on-scroll text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Perché software su misura
            </h2>
            <p className="fade-on-scroll fade-in-delay-1 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Le soluzioni standard sembrano comode. Ma poi ti accorgi dei limiti.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12 mb-20">
            <div className="fade-on-scroll">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Software standard</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span>Non si adatta al tuo modo di lavorare</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span>Costi che aumentano ogni anno</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span>Funzioni che non usi ma paghi comunque</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span>Devi adattarti al software, non il contrario</span>
                </li>
              </ul>
            </div>

            <div className="fade-on-scroll fade-in-delay-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Software su misura</h3>
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{reason.icon}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{reason.title}</h4>
                      <p className="text-slate-600 text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-32 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="fade-on-scroll text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Come lavoriamo
            </h2>
            <p className="fade-on-scroll fade-in-delay-1 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Niente sorprese. Comunicazione chiara, risultati concreti.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {team.map((item, index) => (
              <div 
                key={index}
                className={`fade-on-scroll bg-white p-8 rounded-xl fade-in-delay-${(index % 2) + 1}`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
