export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
          WEBINATOR365
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-slate-300">
          Software Solutions That Never Stop
        </p>
        <p className="text-xl md:text-2xl mb-12 text-slate-400 max-w-3xl mx-auto">
          Sviluppiamo software che funziona.<br />
          Web • Mobile • Blockchain • Automazioni
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
          >
            Parliamone
          </a>
          <a 
            href="#services" 
            className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all"
          >
            Scopri di più
          </a>
        </div>
      </div>
    </section>
  )
}
