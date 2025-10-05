export default function Services() {
  const services = [
    {
      title: "Gestionali, CRM e ERP",
      description: "Organizza vendite, anagrafiche e processi interni con un software cucito sui tuoi flussi aziendali.",
      image: "📊"
    },
    {
      title: "App Mobile",
      description: "Trasformiamo obiettivi in app su misura, centrate sulle esigenze dei tuoi utenti, pronte per scalare.",
      image: "📱"
    },
    {
      title: "Web App & Portali",
      description: "Piattaforme responsive per gestire team, clienti o partner. Dashboard avanzate e report in tempo reale.",
      image: "💻"
    },
    {
      title: "System Integration & API",
      description: "Unifichiamo strumenti e dati: colleghiamo i tuoi CRM, ERP, gestionali in un unico ecosistema.",
      image: "🔗"
    },
    {
      title: "MVP & Software per Startup",
      description: "Minimum Viable Product in poche settimane: roadmap tecnica, scelta stack, sviluppo rapido e test.",
      image: "🚀"
    },
    {
      title: "AI & Automazioni",
      description: "Agent AI integrati per automatizzare task ripetitivi, assistere il tuo team e migliorare i processi interni.",
      image: "🤖"
    }
  ]

  return (
    <section id="services" className="py-20 sm:py-32 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Specialisti del custom software
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ogni modulo nasce da un'esperienza reale: progetti già validati, soluzioni personalizzate sviluppate con best practice consolidate e tecnologie collaudate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 sm:p-10 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-6">{service.image}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
