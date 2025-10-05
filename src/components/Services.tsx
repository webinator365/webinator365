export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Sviluppo Web & Mobile",
      description: "Applicazioni web responsive, PWA, app native iOS/Android. Dal sito vetrina all'e-commerce complesso."
    },
    {
      icon: "⚡",
      title: "Automazioni & Integrazioni",
      description: "Automatizziamo processi manuali e integriamo sistemi diversi per farti risparmiare tempo."
    },
    {
      icon: "🔗",
      title: "Blockchain Solutions",
      description: "Estrazione dati, smart contracts, sviluppo su blockchain. Tecnologia avanzata per progetti innovativi."
    },
    {
      icon: "💼",
      title: "Software Su Misura",
      description: "Gestionali, CRM, piattaforme personalizzate. Costruiamo quello di cui hai veramente bisogno."
    },
    {
      icon: "🎯",
      title: "Consulenza Tecnica",
      description: "Analisi di fattibilità, scelta delle tecnologie, ottimizzazione architetturale."
    }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">Cosa Facciamo</h2>
        <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
          Soluzioni software complete per ogni esigenza
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 border-2 border-slate-200 rounded-xl hover:border-primary hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
