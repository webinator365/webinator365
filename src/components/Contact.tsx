'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('Grazie per il tuo messaggio! Ti ricontatteremo entro 24 ore.')
    setFormData({ name: '', email: '', company: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Hai l'idea giusta per il tuo business?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Valutiamo insieme cosa serve davvero per farla diventare un software funzionale e su misura.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Nome e Cognome *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
              Azienda
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
              Raccontaci il tuo progetto *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={6}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-slate-900"
              placeholder="Qual è la sfida che vuoi affrontare? Quali risultati vuoi ottenere?"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
          </button>

          <p className="text-sm text-slate-500 text-center">
            Ti risponderemo entro 24 ore • info@webinator365.com
          </p>
        </form>
      </div>
    </section>
  )
}
