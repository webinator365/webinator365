'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isFocused, setIsFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simula invio
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('Grazie per il tuo messaggio! Ti ricontatteremo presto.')
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in-up">
            Iniziamo a Parlare
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Raccontaci il tuo progetto, ti risponderemo al più presto
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* Name field */}
          <div className="relative">
            <label 
              htmlFor="name" 
              className={`block text-base sm:text-lg mb-2 transition-colors duration-300 ${isFocused === 'name' ? 'text-primary' : ''}`}
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              onFocus={() => setIsFocused('name')}
              onBlur={() => setIsFocused(null)}
              className="w-full px-4 py-3 rounded-lg text-slate-900 bg-white border-2 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-base sm:text-lg"
              required
            />
            {isFocused === 'name' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary animate-pulse" />
            )}
          </div>
          
          {/* Email field */}
          <div className="relative">
            <label 
              htmlFor="email" 
              className={`block text-base sm:text-lg mb-2 transition-colors duration-300 ${isFocused === 'email' ? 'text-primary' : ''}`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              onFocus={() => setIsFocused('email')}
              onBlur={() => setIsFocused(null)}
              className="w-full px-4 py-3 rounded-lg text-slate-900 bg-white border-2 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-base sm:text-lg"
              required
            />
            {isFocused === 'email' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary animate-pulse" />
            )}
          </div>
          
          {/* Message field */}
          <div className="relative">
            <label 
              htmlFor="message" 
              className={`block text-base sm:text-lg mb-2 transition-colors duration-300 ${isFocused === 'message' ? 'text-primary' : ''}`}
            >
              Messaggio
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              onFocus={() => setIsFocused('message')}
              onBlur={() => setIsFocused(null)}
              rows={6}
              className="w-full px-4 py-3 rounded-lg text-slate-900 bg-white border-2 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none text-base sm:text-lg"
              required
            />
            {isFocused === 'message' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary animate-pulse" />
            )}
          </div>
          
          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Invio in corso...
                </>
              ) : (
                <>
                  Invia Messaggio
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </form>

        {/* Contact info */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: "📧", label: "Email", value: "info@webinator365.com" },
            { icon: "⏰", label: "Disponibilità", value: "365 giorni/anno" },
            { icon: "💬", label: "Risposta", value: "Entro 24h" }
          ].map((item, index) => (
            <div key={index} className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
              <div className="text-xs sm:text-sm text-slate-400 mb-1">{item.label}</div>
              <div className="text-sm sm:text-base font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
