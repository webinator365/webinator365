'use client'

import { useEffect } from 'react'

export default function WhyUs() {
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

  const reasons = [
    {
      title: "Fatto per te, non per tutti",
      description: "Niente template. Niente soluzioni preconfezionate. Solo software che risolve i tuoi problemi specifici."
    },
    {
      title: "È tuo al 100%",
      description: "Il codice, i dati, tutto. Nessuna dipendenza da noi o da altri fornitori."
    },
    {
      title: "Paghi una volta sola",
      description: "Niente abbonamenti mensili che crescono. Un investimento che si ripaga nel tempo."
    },
    {
      title: "Cresce con te",
      description: "Aggiungi funzioni quando serve. Collegalo ad altri strumenti. È flessibile."
    }
  ]

  const team = [
    {
      title: "Team esperto",
      description: "Oltre 10 anni di esperienza. Abbiamo già risolto problemi come i tuoi."
    },
    {
      title: "Un referente dedicato",
      description: "Una persona che segue il tuo progetto dall'inizio alla fine."
    },
    {
      title: "Vedi tutto mentre lavoriamo",
      description: "Aggiornamenti ogni settimana. Puoi dare feedback e cambiare direzione."
    },
    {
      title: "Tempi reali",
      description: "Ti diciamo quanto ci vuole davvero. Budget chiari, consegne puntuali."
    }
  ]

  return (
    <>
      {/* Why Custom Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="fade-in-view text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
              Perché software su misura
            </h2>
            <p className="fade-in-view delay-1 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
              Le soluzioni standard sembrano comode. Ma poi ti accorgi dei limiti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="fade-in-view px-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Software standard</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-400">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span>Non si adatta al tuo modo di lavorare</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-400">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span>Costi che aumentano ogni anno</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-400">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span>Funzioni che non usi ma paghi comunque</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-400">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span>Devi adattarti al software, non il contrario</span>
                </li>
              </ul>
            </div>

            <div className="fade-in-view delay-1 px-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Software su misura</h3>
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{reason.title}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="fade-in-view text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
              Come lavoriamo
            </h2>
            <p className="fade-in-view delay-1 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
              Niente sorprese. Comunicazione chiara, risultati concreti.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {team.map((item, index) => (
              <div 
                key={index}
                className={`fade-in-view delay-${(index % 2) + 1} bg-slate-800/50 border border-slate-700 p-6 sm:p-8 rounded-xl`}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-primary rounded"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
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
