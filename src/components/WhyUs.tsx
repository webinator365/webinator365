export default function WhyUs() {
  const reasons = [
    {
      icon: "⚙️",
      title: "Progettato sui tuoi processi specifici",
      description: "Non partiamo da una soluzione standard. Studiamo il tuo contesto reale per comprendere obiettivi, limiti e opportunità."
    },
    {
      icon: "🔓",
      title: "Piena proprietà e controllo del codice",
      description: "Il software è tuo al 100%. Nessun vendor lock-in, nessuna dipendenza dal fornitore."
    },
    {
      icon: "💰",
      title: "Investimento una tantum, ROI garantito",
      description: "Niente canoni mensili crescenti. Un investimento iniziale che si ripaga nel tempo."
    },
    {
      icon: "🔌",
      title: "Flessibilità e possibilità di integrazioni",
      description: "Il tuo software cresce con la tua azienda. Integrazioni native con i tuoi strumenti esistenti."
    }
  ]

  const team = [
    {
      icon: "👥",
      title: "Team senior con +10 anni di esperienza",
      description: "Sviluppatori e consulenti che hanno già risolto le sfide che stai affrontando"
    },
    {
      icon: "🎯",
      title: "Un referente dedicato per il tuo progetto",
      description: "Una persona che conosce il tuo business e ti segue in ogni fase"
    },
    {
      icon: "🔄",
      title: "Sviluppo iterativo con feedback costanti",
      description: "Vedi i progressi settimanalmente e guidi le scelte insieme a noi"
    },
    {
      icon: "⏱️",
      title: "Pianificazione realistica e milestone chiare",
      description: "Tempi rispettati, budget trasparenti, consegne puntuali"
    }
  ]

  return (
    <>
      {/* Why Custom Section */}
      <section className="py-20 sm:py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Perché scegliere la personalizzazione
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Webinator365 non parte da una soluzione standard. Studia il contesto reale per comprendere obiettivi, limiti e opportunità.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Software standard</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Rigidità nei processi e workflow</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Costi occulti e canoni crescenti</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Inefficienze operative</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Dipendenza dal fornitore</span>
                </li>
              </ul>
            </div>

            <div>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Chi ti affiancherà
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Un team di professionisti esperti al tuo fianco per trasformare le tue idee in soluzioni concrete
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {team.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl"
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
