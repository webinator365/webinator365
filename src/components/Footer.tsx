export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">WEBINATOR365</h3>
            <p className="text-slate-400">
              Software Solutions That Never Stop
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Servizi</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Sviluppo Web & Mobile</li>
              <li>Automazioni & Integrazioni</li>
              <li>Blockchain Solutions</li>
              <li>Software Su Misura</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contatti</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Email: info@webinator365.com</li>
              <li>Disponibili 365 giorni l'anno</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Webinator365. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
