'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('Messaggio ricevuto! Ti rispondiamo entro 24 ore.')
    setFormData({ name: '', email: '', company: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="fade-in-view text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Hai un progetto in mente?
          </h2>
          <p className="fade-in-view delay-1 text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed px-4">
            Raccontaci cosa vuoi realizzare. Capiamo insieme se possiamo aiutarti.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="fade-in-view delay-2 space-y-6 px-4">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                Nome e cognome *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">
              Azienda (opzionale)
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
              Raccontaci il progetto *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={6}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-white"
              placeholder="Cosa vuoi realizzare? Quale problema vuoi risolvere?"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/50"
          >
            {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
          </button>

          <p className="text-xs sm:text-sm text-slate-500 text-center">
            Rispondiamo entro 24 ore • info@webinator365.com
          </p>
        </form>
      </div>
    </section>
  )
}
