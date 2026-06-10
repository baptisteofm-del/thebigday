'use client'

import { useState } from 'react'

export default function ContactFormClient() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', eventType: '', date: '', message: '' })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error()
      setSent(true)
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    color: 'white',
    fontSize: '14px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '10px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '4px',
  }

  if (sent) return (
    <div style={{ textAlign: 'center', padding: '64px 0' }}>
      <div style={{ fontSize: '40px', marginBottom: '24px' }}>✦</div>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'white', fontWeight: 300, marginBottom: '16px' }}>
        Message envoyé
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>
        Nous vous répondrons dans les 48 heures.
      </p>
    </div>
  )

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div>
          <label style={labelStyle}>Nom *</label>
          <input name="name" required value={form.name} onChange={onChange} placeholder="Votre nom" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="votre@email.com" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div>
          <label style={labelStyle}>Type d'événement</label>
          <select name="eventType" value={form.eventType} onChange={onChange} style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="" style={{ background: '#2a2118' }}>Sélectionner...</option>
            <option value="mariage" style={{ background: '#2a2118' }}>Mariage — The Big Day</option>
            <option value="demande" style={{ background: '#2a2118' }}>Demande en mariage</option>
            <option value="diner" style={{ background: '#2a2118' }}>Dîner privé</option>
            <option value="anniversaire" style={{ background: '#2a2118' }}>Anniversaire</option>
            <option value="bapteme" style={{ background: '#2a2118' }}>Baptême</option>
            <option value="seminaire" style={{ background: '#2a2118' }}>Séminaire</option>
            <option value="custom" style={{ background: '#2a2118' }}>Événement sur mesure</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Date estimée</label>
          <input name="date" type="date" value={form.date} onChange={onChange} style={{ ...inputStyle, colorScheme: 'dark' }} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Message *</label>
        <textarea name="message" required rows={4} value={form.message} onChange={onChange} placeholder="Parlez-nous de votre projet..." style={{ ...inputStyle, resize: 'none' }} />
      </div>

      <button type="submit" disabled={loading} className="btn btn-gold" style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer', alignSelf: 'flex-start' }}>
        {loading ? 'Envoi...' : 'Planifier mon projet'}
      </button>
    </form>
  )
}
