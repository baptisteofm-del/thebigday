'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { createClient } = await import('@/lib/supabase/client')
      const supabase = createClient()

      const { data: agency } = await supabase
        .from('agencies')
        .select('id')
        .eq('slug', 'thebigday')
        .single()

      if (!agency) throw new Error('Agency not found')

      const { error } = await supabase
        .from('bookings')
        .insert({
          agency_id: agency.id,
          name: formData.name,
          email: formData.email,
          event_date: formData.date || null,
          message: formData.message,
        })

      if (error) throw error

      toast.success('Merci ! Nous vous répondrons très bientôt.')
      setFormData({ name: '', email: '', eventType: '', date: '', message: '' })
    } catch (err) {
      console.error(err)
      toast.error('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="pt-24">
      <section className="section" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-max text-center">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1rem' }}>
            Contactez-nous
          </h1>
          <p style={{ color: 'var(--color-dark)', opacity: 0.7, fontSize: '1.2rem' }}>
            Parlons de votre projet et créons quelque chose d'extraordinaire
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>

            {/* Formulaire */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>
                Planifier mon projet
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '14px' }}>Nom *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(61,51,42,0.2)', borderRadius: '4px', fontSize: '16px', background: 'white' }}
                    placeholder="Votre nom" />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '14px' }}>Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(61,51,42,0.2)', borderRadius: '4px', fontSize: '16px', background: 'white' }}
                    placeholder="votre@email.com" />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '14px' }}>Type d'événement</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange}
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(61,51,42,0.2)', borderRadius: '4px', fontSize: '16px', background: 'white' }}>
                    <option value="">Sélectionner...</option>
                    <option value="mariage">Mariage — The Big Day</option>
                    <option value="demande">Demande en mariage</option>
                    <option value="diner">Dîner privé</option>
                    <option value="anniversaire">Anniversaire</option>
                    <option value="bapteme">Baptême</option>
                    <option value="seminaire">Séminaire</option>
                    <option value="custom">Événement sur mesure</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '14px' }}>Date estimée</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange}
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(61,51,42,0.2)', borderRadius: '4px', fontSize: '16px', background: 'white' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '14px' }}>Message *</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(61,51,42,0.2)', borderRadius: '4px', fontSize: '16px', background: 'white', resize: 'vertical' }}
                    placeholder="Parlez-nous de votre projet..." />
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary"
                  style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
                  {loading ? 'Envoi en cours...' : 'Planifier mon projet'}
                </button>
              </form>
            </div>

            {/* Infos */}
            <div style={{ paddingTop: '80px' }}>
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '8px' }}>Email</h3>
                <a href="mailto:contact@thebigday.fr" style={{ color: 'var(--color-gold)', fontSize: '1.1rem' }}>
                  contact@thebigday.fr
                </a>
              </div>
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '8px' }}>Localisation</h3>
                <p style={{ color: 'rgba(61,51,42,0.7)' }}>Corse, France<br />Île de Beauté</p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '12px' }}>Suivez-nous</h3>
                <div style={{ display: 'flex', gap: '16px', fontSize: '28px' }}>
                  <a href="#">📸</a>
                  <a href="#">👥</a>
                  <a href="#">📌</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
