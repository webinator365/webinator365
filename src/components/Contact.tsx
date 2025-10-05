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
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-on-scroll').forEach((el) => {
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
    <section id="contact" className="py-20 sm:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="fade-on-scroll text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Hai un progetto in mente?
          </h2>
          <p className="fade-on-scroll fade-in-delay-1 text-xl text-slate-600 leading-relaxed">
            Raccontaci cosa vuoi realizzare. Capiamo insieme se possiamo aiutarti.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="fade-on-scroll fade-in-delay-2 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Nome e cognome *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 bg-white"
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
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 bg-white"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
              Azienda (opzionale)
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 bg-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
              Raccontaci il progetto *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={6}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-slate-900 bg-white"
              placeholder="Cosa vuoi realizzare? Quale problema vuoi risolvere?"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
          >
            {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
          </button>

          <p className="text-sm text-slate-500 text-center">
            Rispondiamo entro 24 ore • info@webinator365.com
          </p>
        </form>
      </div>
    </section>
  )
}
