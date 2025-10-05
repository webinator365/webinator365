export default function WhyUs() {
  const reasons = [
    "Competenze tecniche reali, non solo chiacchiere",
    "Progetti su misura, non template preconfezionati",
    "Disponibilità e comunicazione chiara",
    "Tecnologie moderne e scalabili",
    "Supporto continuo, 365 giorni l'anno"
  ]

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">Perché Webinator365</h2>
        <p className="text-xl text-center text-slate-600 mb-16">
          Il partner tecnologico su cui puoi contare
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="text-3xl">✓</div>
              <p className="text-lg text-slate-700">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
