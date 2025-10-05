export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
          Sviluppiamo <span className="text-primary">su misura</span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
          Software house con esperienza consolidata.<br />
          Progettiamo e sviluppiamo software personalizzati per far crescere la tua azienda.
        </p>
        
        <a 
          href="#contact" 
          className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300"
        >
          Parliamo del tuo progetto
        </a>

        {/* Trust badges */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-8 uppercase tracking-wider">Hanno scelto Webinator365</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-50">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="text-slate-400 font-bold text-xl">BRAND {i}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
