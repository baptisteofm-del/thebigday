'use client'

import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'

const categories = [
  {
    id: 'proposals',
    label: 'PROPOSALS',
    subtitle: 'Custom engagement experiences',
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=900&q=80&auto=format',
    panelImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&auto=format',
    intro: 'Every proposal deserves a setting as extraordinary as the moment itself. We design each experience with meticulous attention to detail, ensuring your question is answered in the most memorable way possible.',
    services: [
      'Organisation complète',
      'Décoration personnalisée',
      'Mise en scène sur mesure',
      'Photographe',
      'Vidéaste',
      'Expériences exclusives',
      'Accompagnement personnalisé',
    ],
  },
  {
    id: 'honeymoon',
    label: 'HONEYMOON',
    subtitle: 'Romantic escapes',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80&auto=format',
    panelImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format',
    intro: 'Your honeymoon is the first chapter of your life together. We craft intimate, romantic experiences tailored to your desires — from private dinners overlooking the sea to exclusive discoveries of Corsica\'s most breathtaking landscapes.',
    services: [
      'Moments romantiques',
      'Dîners privés',
      'Expériences exclusives',
      'Découverte de la Corse',
      'Organisation sur mesure',
      'Prestations haut de gamme',
    ],
  },
  {
    id: 'events',
    label: 'EVENTS',
    subtitle: 'Celebrations & gatherings',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80&auto=format',
    intro: 'From intimate family celebrations to prestigious corporate gatherings, we design events that leave lasting impressions. Every detail is curated with the same passion and precision that defines The Gathering.',
    eventSubcategories: [
      { title: 'Birthdays', desc: 'Celebrate life\'s milestones in extraordinary style' },
      { title: 'Baptisms', desc: 'A timeless first chapter, celebrated with grace' },
      { title: 'Communions', desc: 'A sacred milestone honoured with elegance' },
      { title: 'Baby Showers', desc: 'Welcome new life with warmth and refinement' },
      { title: 'Corporate Events', desc: 'Inspire and impress with exceptional hospitality' },
      { title: 'Bespoke Events', desc: 'Your vision, without limits' },
    ],
  },
]

export function TheGatheringSection() {
  const [activePanel, setActivePanel] = useState<string | null>(null)
  const [coastalOpen, setCoastalOpen] = useState(false)

  const activeCategory = categories.find(c => c.id === activePanel)

  return (
    <section id="the-gathering" className="section" style={{ background: 'var(--color-cream)' }}>
      <div className="container">

        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
              Événements privés
            </p>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, marginBottom: '16px', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              The Gathering
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '20px', color: 'rgba(42,33,24,0.5)', marginBottom: '24px' }}>
              Les moments qui comptent vraiment
            </p>
            <div className="divider" />
            <p style={{ fontSize: '15px', color: 'rgba(42,33,24,0.6)', maxWidth: '520px', margin: '24px auto 0', lineHeight: 1.9, fontWeight: 300 }}>
              Pour ceux qui cherchent l'authenticité et l'intimité. Des célébrations où chaque invité se sent privilégié.
            </p>
          </div>
        </ScrollReveal>

        {/* Ticker Animé (Marquee) */}
        <ScrollReveal>
          <div style={{ marginBottom: '60px', background: 'var(--color-dark)' }}>
            <div style={{ fontSize: '9px', letterSpacing: '5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', padding: '12px 48px', background: 'var(--color-dark)', borderBottom: '1px solid rgba(201,169,110,0.2)' }}>
              SIGNATURE EXPERIENCE
            </div>
            <div style={{ 
              overflow: 'hidden', 
              background: 'var(--color-dark)',
              padding: '24px 0',
            }}>
              <div style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                animation: 'scroll 20s linear infinite',
              }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '14px',
                    fontStyle: 'italic',
                    letterSpacing: '4px',
                    color: 'var(--color-gold)',
                    flexShrink: 0,
                    paddingRight: '80px',
                  }}>
                    THE COASTAL EXPERIENCE  ✦
                  </div>
                ))}
              </div>
              <style>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-33.333%); }
                }
              `}</style>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Cartes (Categories) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginBottom: '60px' }}>
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 100}>
              <div
                onClick={() => setActivePanel(activePanel === cat.id ? null : cat.id)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  background: 'var(--color-dark)',
                  height: '520px',
                }}
              >
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease, filter 0.7s ease',
                    transform: activePanel === cat.id ? 'scale(1.08)' : 'scale(1)',
                    filter: activePanel === cat.id ? 'brightness(0.4)' : 'brightness(0.55)',
                  }}
                />

                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20,15,10,0.95) 0%, rgba(20,15,10,0.3) 60%)',
                  pointerEvents: 'none',
                }} />

                {/* Category text (bottom) */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '40px 36px',
                  color: 'white',
                  zIndex: 2,
                }}>
                  <p style={{
                    fontSize: '9px',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    marginBottom: '8px',
                    fontWeight: 400,
                  }}>
                    The Gathering
                  </p>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '28px',
                    fontStyle: 'italic',
                    letterSpacing: '5px',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                    fontWeight: 300,
                  }}>
                    {cat.label}
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.6)',
                    fontStyle: 'italic',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                  }}>
                    {cat.subtitle}
                  </p>
                </div>

                {/* Hover indicator */}
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '40px',
                  height: '40px',
                  border: '1px solid rgba(201,169,110,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold)',
                  fontSize: '18px',
                  transition: 'all 0.3s ease',
                  transform: activePanel === cat.id ? 'rotate(45deg)' : 'none',
                  background: activePanel === cat.id ? 'var(--color-gold)' : 'transparent',
                  zIndex: 3,
                }}>
                  <span style={{ color: activePanel === cat.id ? 'var(--color-dark)' : 'var(--color-gold)' }}>+</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Expanded Panel for Proposals or Honeymoon */}
        {activePanel === 'proposals' && (
          <ScrollReveal>
            <div style={{
              background: 'var(--color-ivory)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
              marginBottom: '60px',
              borderLeft: '3px solid var(--color-gold)',
              overflow: 'hidden',
              animation: 'fadeDown 0.4s ease',
            }}>
              {/* Image */}
              <div style={{ minHeight: '480px', overflow: 'hidden' }}>
                <img
                  src={activeCategory!.panelImage}
                  alt="Proposals"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Text Content */}
              <div style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: '9px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
                  OUR SIGNATURE EXPERIENCE
                </p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '36px', fontStyle: 'italic', fontWeight: 300, letterSpacing: '2px', marginBottom: '24px' }}>
                  {activeCategory!.label}
                </h3>
                <div style={{ width: '32px', height: '1px', background: 'var(--color-gold)', marginBottom: '24px' }} />
                <p style={{ fontSize: '15px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, fontWeight: 300, marginBottom: '24px' }}>
                  {activeCategory!.intro}
                </p>

                {/* Services list */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeCategory!.services?.map((svc, i) => (
                    <li key={i} style={{
                      fontSize: '13px',
                      color: 'rgba(42,33,24,0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}>
                      <span style={{ color: 'var(--color-gold)', fontSize: '8px' }}>◆</span>
                      {svc}
                    </li>
                  ))}
                </ul>

                {/* Coastal Experience CTA */}
                <div style={{
                  padding: '16px 20px',
                  background: 'var(--color-dark)',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'opacity 0.3s',
                }}
                onClick={(e) => { e.stopPropagation(); setCoastalOpen(true) }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '14px' }}>✦</span>
                  <div>
                    <p style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '2px', fontWeight: 400 }}>
                      SIGNATURE EXPERIENCE
                    </p>
                    <p style={{ fontSize: '13px', color: 'white', fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '1px', fontWeight: 300 }}>
                      + The Coastal Experience
                    </p>
                  </div>
                </div>

                <a href="#contact" className="btn btn-dark" onClick={(e) => e.stopPropagation()}>
                  Contact Us
                </a>
              </div>
              <style>{`@keyframes fadeDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}`}</style>
            </div>
          </ScrollReveal>
        )}

        {activePanel === 'honeymoon' && (
          <ScrollReveal>
            <div style={{
              background: 'var(--color-ivory)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
              marginBottom: '60px',
              borderLeft: '3px solid var(--color-gold)',
              overflow: 'hidden',
              animation: 'fadeDown 0.4s ease',
            }}>
              {/* Text Content (left) */}
              <div style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: '9px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
                  OUR SIGNATURE EXPERIENCE
                </p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '36px', fontStyle: 'italic', fontWeight: 300, letterSpacing: '2px', marginBottom: '24px' }}>
                  {activeCategory!.label}
                </h3>
                <div style={{ width: '32px', height: '1px', background: 'var(--color-gold)', marginBottom: '24px' }} />
                <p style={{ fontSize: '15px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, fontWeight: 300, marginBottom: '24px' }}>
                  {activeCategory!.intro}
                </p>

                {/* Services list */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeCategory!.services?.map((svc, i) => (
                    <li key={i} style={{
                      fontSize: '13px',
                      color: 'rgba(42,33,24,0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}>
                      <span style={{ color: 'var(--color-gold)', fontSize: '8px' }}>◆</span>
                      {svc}
                    </li>
                  ))}
                </ul>

                {/* Coastal Experience CTA */}
                <div style={{
                  padding: '16px 20px',
                  background: 'var(--color-dark)',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'opacity 0.3s',
                }}
                onClick={(e) => { e.stopPropagation(); setCoastalOpen(true) }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '14px' }}>✦</span>
                  <div>
                    <p style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '2px', fontWeight: 400 }}>
                      SIGNATURE EXPERIENCE
                    </p>
                    <p style={{ fontSize: '13px', color: 'white', fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '1px', fontWeight: 300 }}>
                      + The Coastal Experience
                    </p>
                  </div>
                </div>

                <a href="#contact" className="btn btn-dark" onClick={(e) => e.stopPropagation()}>
                  Contact Us
                </a>
              </div>

              {/* Image (right) */}
              <div style={{ minHeight: '480px', overflow: 'hidden' }}>
                <img
                  src={activeCategory!.panelImage}
                  alt="Honeymoon"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <style>{`@keyframes fadeDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}`}</style>
            </div>
          </ScrollReveal>
        )}

        {/* Events Expanded Panel */}
        {activePanel === 'events' && (
          <ScrollReveal>
            <div style={{
              background: 'var(--color-ivory)',
              padding: '56px 48px',
              borderLeft: '3px solid var(--color-gold)',
              marginBottom: '60px',
              animation: 'fadeDown 0.4s ease',
            }}>
              <p style={{ fontSize: '15px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, fontWeight: 300, marginBottom: '48px' }}>
                {activeCategory!.intro}
              </p>

              {/* 3x2 Grid of Event Subcategories */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
                {activeCategory!.eventSubcategories?.map((evt, i) => (
                  <div key={i} style={{
                    background: 'white',
                    padding: '32px 24px',
                    border: '1px solid rgba(201,169,110,0.2)',
                    textAlign: 'center',
                  }}>
                    <h4 style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: i === 5 ? '18px' : '20px',
                      fontStyle: i === 5 ? 'italic' : 'normal',
                      fontWeight: 300,
                      letterSpacing: '1px',
                      marginBottom: '12px',
                      color: 'var(--color-dark)',
                    }}>
                      {evt.title}
                    </h4>
                    <p style={{
                      fontSize: '13px',
                      color: 'rgba(42,33,24,0.6)',
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}>
                      {evt.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Coastal Experience Block (full width) */}
              <div style={{
                background: 'var(--color-dark)',
                color: 'white',
                padding: '28px 48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'opacity 0.3s',
                borderLeft: '3px solid var(--color-gold)',
              }}
              onClick={(e) => { e.stopPropagation(); setCoastalOpen(true) }}>
                <div>
                  <p style={{ fontSize: '9px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '6px', fontWeight: 400 }}>
                    SIGNATURE EXPERIENCE
                  </p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontStyle: 'italic', fontWeight: 300, letterSpacing: '2px' }}>
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
                  <span>Discover</span>
                  <span style={{ fontSize: '18px' }}>↓</span>
                </div>
              </div>
              <style>{`@keyframes fadeDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}`}</style>
            </div>
          </ScrollReveal>
        )}

        {/* The Coastal Experience Panel (shown when coastal is open) */}
        {coastalOpen && (
          <ScrollReveal>
            <div style={{
              background: 'var(--color-ivory)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
              marginBottom: '60px',
              borderLeft: '3px solid var(--color-gold)',
              overflow: 'hidden',
              animation: 'fadeDown 0.4s ease',
            }}>
              {/* Image */}
              <div style={{ minHeight: '480px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format"
                  alt="The Coastal Experience"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Text */}
              <div style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: '9px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px', fontWeight: 400 }}>
                  OUR SIGNATURE EXPERIENCE
                </p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '40px', fontStyle: 'italic', fontWeight: 300, letterSpacing: '2px', marginBottom: '24px' }}>
                  The Coastal<br />Experience
                </h3>
                <div style={{ width: '32px', height: '1px', background: 'var(--color-gold)', marginBottom: '24px' }} />
                <p style={{ fontSize: '14px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, fontWeight: 300, marginBottom: '16px' }}>
                  Departing from Saint-Florent, guests embark on a private boat journey to a secluded cove accessible only by sea.
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, fontWeight: 300, marginBottom: '16px' }}>
                  Upon arrival, an elegant setting awaits overlooking the Mediterranean, featuring bespoke décor, refined dining and the possibility of adding professional photography or drone cinematography.
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, fontWeight: 300, marginBottom: '32px' }}>
                  Designed for proposals, honeymoons, family celebrations and unforgettable occasions, The Coastal Experience offers a unique way to discover Corsica through an exclusive and timeless setting.
                </p>

                <a href="#contact" className="btn btn-dark" onClick={(e) => { e.stopPropagation(); setCoastalOpen(false) }}>
                  Plan your Coastal Experience
                </a>
              </div>
              <style>{`@keyframes fadeDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}`}</style>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  )
}
