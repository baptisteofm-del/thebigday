'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    date: '',
    message: '',
  })

  const supabase = createClient()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Get agency ID
      const { data: agency } = await supabase
        .from('agencies')
        .select('id')
        .eq('slug', 'thebigday')
        .single()

      if (!agency) {
        toast.error('Erreur lors de l\'envoi du message')
        return
      }

      // Insert booking
      const { error } = await supabase
        .from('bookings')
        .insert({
          agency_id: agency.id,
          name: formData.name,
          email: formData.email,
          event_date: formData.date,
          message: formData.message,
        })

      if (error) throw error

      toast.success('Merci! Nous vous répondrons très bientôt.')
      setFormData({ name: '', email: '', eventType: '', date: '', message: '' })
    } catch (error) {
      console.error(error)
      toast.error('Erreur lors de l\'envoi du message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-sand to-ivory pt-32">
        <div className="container-max text-center">
          <h1 className="font-serif font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-dark/70">
            Parlons de votre projet et créons ensemble quelque chose d'extraordinaire
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-cream">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif font-bold mb-8">Formulaire de contact</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-serif text-sm font-semibold mb-2">Nom *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-dark/20 rounded focus:outline-none focus:border-gold"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block font-serif text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-dark/20 rounded focus:outline-none focus:border-gold"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block font-serif text-sm font-semibold mb-2">Type d'événement</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-dark/20 rounded focus:outline-none focus:border-gold"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="mariage">Mariage</option>
                    <option value="gathering">The Gathering</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block font-serif text-sm font-semibold mb-2">Date estimée</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-dark/20 rounded focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block font-serif text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-dark/20 rounded focus:outline-none focus:border-gold"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full disabled:opacity-50"
                >
                  {loading ? 'Envoi...' : 'Planifier mon projet'}
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-serif font-bold mb-8">Nous vous répondrons rapidement</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:contact@thebigday.fr" className="text-gold hover:text-dark transition">
                    contact@thebigday.fr
                  </a>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Localisation</h3>
                  <p className="text-dark/70">
                    Corse, France<br />
                    Basée au cœur de l'île de Beauté
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Suivez-nous</h3>
                  <div className="flex gap-4 text-2xl">
                    <a href="#" className="hover:text-gold transition">📸</a>
                    <a href="#" className="hover:text-gold transition">👥</a>
                    <a href="#" className="hover:text-gold transition">📌</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
