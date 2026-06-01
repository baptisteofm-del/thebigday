'use client'

import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'

const categories = [
  {
    id: 'proposals',
    label: 'Proposals',
    subtitle: 'Demandes en mariage',
    desc: 'Chaque demande mérite un cadre exceptionnel. Nous concevons le moment parfait pour que votre question résonne pour toujours — en Corse, face à la mer, dans un lieu qui vous appartient.',
    img: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80&auto=format',
  },
  {
    id: 'honeymoon',
    label: 'Honeymoon',
    subtitle: 'Lunes de miel & expériences romantiques',
    desc: 'Prolongez la magie du grand jour avec une lune de miel pensée dans les moindres détails. Séjours privés, expériences exclusives et instants suspendus sur l\'île de Beauté.',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format',
  },
  {
    id: 'events',
    label: 'Events',
    subtitle: 'Célébrations & événements privés',
    desc: 'Anniversaires, baptêmes, communions, séminaires, baby showers… Pour tous vos moments importants, nous créons des expériences sur mesure d\'une élégance rare.',
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&auto=format',
    items: ['Anniversaires', 'Baptêmes', 'Communions', 'Séminaires', 'Baby Showers', 'Événements sur mesure'],
  },
]

export function TheGatheringSection() {
  const [active, setActive] = useState<string | null>(null)
  const [coastalOpen, setCoastalOpen] = useState(false)

  const activeCategory = categories.find(c => c.id === active)

  return (
    <section id="the-gathering" className="section" style={{ background: 'var(--color-cream)' }}>
      <div className="container">

        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
              Événements privés
            </p>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, marginBottom: '16px' }}>
              The Gathering
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', color: 'rgba(42,33,24,0.5)', marginBottom: '24px' }}>
              Les moments qui comptent vraiment
            </p>
            <div className="divider" />
            <p style={{ fontSize: '15px', color: 'rgba(42,33,24,0.6)', maxWidth: '520px', margin: '24px auto 0', lineHeight: 1.9, fontWeight: 300 }}>
              Pour ceux qui cherchent l'authenticité et l'intimité. Des célébrations où chaque invité se sent privilégié.
            </p>
          </div>
        </ScrollReveal>

        {/* Coastal Experience Banner */}
        <ScrollReveal>
          <div
            onClick={() => setCoastalOpen(!coastalOpen)}
            style={{
              background: 'var(--color-dark)',
              color: 'white',
              padding: '28px 48px',
              marginBottom: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              borderLeft: '3px solid var(--color-gold)',
              transition: 'opacity 0.3s',
            }}
          >
            <div>
              <p style={{ fontSize: '9px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '6px', fontWeight: 400 }}>
                Expérience signature
              </p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 300, letterSpacing: '3px', textTransform: 'uppercase' }}>
                The Coastal Experience
              </h3>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
            }}>
              <span>Découvrir</span>
              <span style={{ fontSize: '18px', transition: 'transform 0.3s', transform: coastalOpen ? 'rotate(180deg)' : 'none' }}>↓</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Coastal Experience Panel */}
        {coastalOpen && (
          <div style={{
            marginBottom: '48px',
            background: 'var(--color-ivory)',
            borderLeft: '3px solid var(--color-gold)',
            padding: '0',
            overflow: 'hidden',
            animation: 'fadeDown 0.4s ease',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
              {/* Image */}
              <div style={{ minHeight: '380px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format"
                  alt="The Coastal Experience — Corse"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Text */}
              <div style={{ padding: '56px 48px' }}>
                <p style={{ fontSize: '9px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
                  L'expérience signature de The Gathering
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>
                  The Coastal<br />Experience
                </h3>
                <div style={{ width: '32px', height: '1px', background: 'var(--color-gold)', marginBottom: '24px' }} />
                <p style={{ fontSize: '14px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, fontWeight: 300, marginBottom: '16px' }}>
                  Au départ de Saint-Florent, embarquez pour une traversée privée vers une crique préservée accessible uniquement par la mer.
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, fontWeight: 300, marginBottom: '16px' }}>
                  À votre arrivée, découvrez un cadre exceptionnel face au coucher du soleil : dîner élégant, décoration sur mesure et possibilité d'ajouter un photographe ou des prises de vue par drone.
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, fontWeight: 300, marginBottom: '32px' }}>
                  Pensée pour les demandes en mariage, les lunes de miel, les anniversaires et tous les moments d'exception, cette expérience offre une manière unique de découvrir la Corse dans un cadre exclusif et inoubliable.
                </p>
                <p style={{ fontSize: '11px', color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontStyle: 'italic' }}>
                  Disponible en complément de toutes nos prestations
                </p>
              </div>
            </div>
            <style>{`@keyframes fadeDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}`}</style>
          </div>
        )}

        {/* 3 Categories */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 100}>
              <div
                onClick={() => setActive(active === cat.id ? null : cat.id)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  background: 'var(--color-dark)',
                }}
              >
                {/* Image avec overlay */}
                <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
                  <img
                    src={cat.img}
                    alt={cat.label}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.7s ease',
                      transform: active === cat.id ? 'scale(1.05)' : 'scale(1)',
                      filter: active === cat.id ? 'brightness(0.5)' : 'brightness(0.65)',
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(20,15,10,0.9) 0%, rgba(20,15,10,0.1) 60%)',
                  }} />

                  {/* Category text */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '40px 36px',
                    color: 'white',
                    transition: 'transform 0.4s ease',
                    transform: active === cat.id ? 'translateY(-8px)' : 'none',
                  }}>
                    <p style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '8px' }}>
                      The Gathering
                    </p>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '32px',
                      fontWeight: 300,
                      letterSpacing: '4px',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}>
                      {cat.label}
                    </h3>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', letterSpacing: '1px', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
                      {cat.subtitle}
                    </p>

                    {/* Events sub-list */}
                    {cat.items && active !== cat.id && (
                      <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {cat.items.map((item, j) => (
                          <span key={j} style={{
                            fontSize: '10px',
                            letterSpacing: '1px',
                            color: 'rgba(255,255,255,0.45)',
                            padding: '2px 8px',
                            border: '1px solid rgba(255,255,255,0.15)',
                            fontStyle: item === 'Événements sur mesure' ? 'italic' : 'normal',
                          }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Hover indicator */}
                  <div style={{
                    position: 'absolute', top: '24px', right: '24px',
                    width: '40px', height: '40px',
                    border: '1px solid rgba(201,169,110,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-gold)', fontSize: '18px',
                    transition: 'all 0.3s',
                    transform: active === cat.id ? 'rotate(45deg)' : 'none',
                    background: active === cat.id ? 'var(--color-gold)' : 'transparent',
                  }}>
                    <span style={{ color: active === cat.id ? 'white' : 'var(--color-gold)' }}>+</span>
                  </div>
                </div>

                {/* Expanded panel */}
                {active === cat.id && (
                  <div style={{
                    background: 'var(--color-ivory)',
                    padding: '40px 36px',
                    borderTop: '2px solid var(--color-gold)',
                  }}>
                    <p style={{ fontSize: '14px', color: 'rgba(42,33,24,0.75)', lineHeight: 1.9, fontWeight: 300, marginBottom: '24px' }}>
                      {cat.desc}
                    </p>

                    {cat.items && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {cat.items.map((item, j) => (
                          <li key={j} style={{
                            fontSize: '13px',
                            color: 'rgba(42,33,24,0.65)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontStyle: item === 'Événements sur mesure' ? 'italic' : 'normal',
                          }}>
                            <span style={{ color: 'var(--color-gold)', fontSize: '8px' }}>◆</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Coastal Experience add-on CTA */}
                    <div style={{
                      padding: '16px 20px',
                      background: 'var(--color-dark)',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => { e.stopPropagation(); setCoastalOpen(true); window.scrollTo({ top: document.getElementById('the-gathering')?.offsetTop ?? 0, behavior: 'smooth' }) }}>
                      <span style={{ color: 'var(--color-gold)', fontSize: '14px' }}>✦</span>
                      <div>
                        <p style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '2px' }}>Option signature</p>
                        <p style={{ fontSize: '13px', color: 'white', fontFamily: 'var(--font-serif)', letterSpacing: '2px' }}>+ The Coastal Experience</p>
                      </div>
                    </div>

                    <a href="#contact" className="btn btn-dark" style={{ fontSize: '10px', padding: '12px 24px' }}
                      onClick={e => e.stopPropagation()}>
                      Nous contacter
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
