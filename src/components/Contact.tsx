'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Qui puoi aggiungere la logica per inviare il form
    // Per ora mostriamo solo un alert
    alert('Grazie per il tuo messaggio! Ti ricontatteremo presto.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">Iniziamo a Parlare</h2>
        <p className="text-xl text-center text-slate-300 mb-16">
          Raccontaci il tuo progetto, ti risponderemo al più presto
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg mb-2">Nome</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 rounded-lg text-slate-900"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-lg text-slate-900"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-lg mb-2">Messaggio</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={6}
              className="w-full px-4 py-3 rounded-lg text-slate-900"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
          >
            Invia Messaggio
          </button>
        </form>
      </div>
    </section>
  )
}
