'use client'

import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'

const categories = [
  {
    id: 'proposals',
    label: 'Proposals',
    subtitle: 'Expériences de demande en mariage personnalisées',
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=900&q=80&auto=format',
    panelImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&auto=format',
    intro: 'Chaque demande en mariage mérite un cadre aussi extraordinaire que le moment lui-même. Nous concevons chaque expérience avec une attention méticuleuse aux détails, pour que votre question reste gravée à jamais dans les mémoires.',
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
    label: 'Honeymoon',
    subtitle: 'Échappées romantiques',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80&auto=format',
    panelImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format',
    intro: 'Votre lune de miel est le premier chapitre de votre vie commune. Nous créons des expériences intimes et romantiques, pensées sur mesure — des dîners privés face à la mer aux découvertes exclusives des plus beaux paysages de Corse.',
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
    label: 'Events',
    subtitle: 'Célébrations & rassemblements',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80&auto=format',
    intro: 'Des célébrations familiales intimistes aux grands événements d\'entreprise, nous orchestrons des moments qui marquent les esprits. Chaque détail est pensé avec la même passion et la même précision qui définissent The Gathering.',
    eventSubcategories: [
      { title: 'Anniversaires', desc: 'Célébrez les grands moments de la vie avec un raffinement absolu' },
      { title: 'Baptêmes', desc: 'Un premier chapitre éternel, célébré avec grâce' },
      { title: 'Communions', desc: 'Une étape sacrée honorée avec élégance' },
      { title: 'Baby Showers', desc: 'Accueillez la vie nouvelle avec chaleur et raffinement' },
      { title: 'Événements Corporate', desc: 'Inspirez et impressionnez avec une hospitalité d\'exception' },
      { title: 'Événements sur Mesure', desc: 'Votre vision, sans limites' },
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
                  padding: '40px 36px 100px 36px',
                  color: 'white',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
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
                  {/* Bouton Découvrir */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePanel(activePanel === cat.id ? null : cat.id);
                    }}
                    style={{
                      marginTop: '24px',
                      border: '1px solid rgba(255, 255, 255, 0.6)',
                      background: 'transparent',
                      color: 'white',
                      padding: '10px 32px',
                      fontSize: '11px',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      alignSelf: 'flex-start',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = 'var(--color-dark)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    Découvrir
                  </button>
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
                  EXPÉRIENCE SIGNATURE
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
                      EXPÉRIENCE SIGNATURE
                    </p>
                    <p style={{ fontSize: '13px', color: 'white', fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '1px', fontWeight: 300 }}>
                      + The Coastal Experience
                    </p>
                  </div>
                </div>

                <a href="#contact" className="btn btn-dark" onClick={(e) => e.stopPropagation()}>
                  Nous contacter
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
                  EXPÉRIENCE SIGNATURE
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
                      EXPÉRIENCE SIGNATURE
                    </p>
                    <p style={{ fontSize: '13px', color: 'white', fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '1px', fontWeight: 300 }}>
                      + The Coastal Experience
                    </p>
                  </div>
                </div>

                <a href="#contact" className="btn btn-dark" onClick={(e) => e.stopPropagation()}>
                  Nous contacter
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
                    EXPÉRIENCE SIGNATURE
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
                  <span>Découvrir</span>
                  <span style={{ fontSize: '18px' }}>↓</span>
                </div>
              </div>
              <style>{`@keyframes fadeDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}`}</style>
            </div>
          </ScrollReveal>
        )}

        {/* ── Modal Coastal Experience ── */}
        {coastalOpen && (
          <div
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(10,8,5,0.85)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px',
              backdropFilter: 'blur(6px)',
              animation: 'fadeIn 0.35s ease',
            }}
            onClick={() => setCoastalOpen(false)}
          >
            <div
              style={{
                background: 'var(--color-ivory)',
                maxWidth: '1000px', width: '100%',
                maxHeight: '90vh', overflowY: 'auto',
                position: 'relative',
                animation: 'slideUp 0.4s ease',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Bouton fermer */}
              <button
                onClick={() => setCoastalOpen(false)}
                style={{
                  position: 'absolute', top: '20px', right: '20px', zIndex: 10,
                  background: 'transparent', border: '1px solid rgba(42,33,24,0.2)',
                  width: '40px', height: '40px', cursor: 'pointer',
                  fontSize: '18px', color: 'var(--color-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--color-dark)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
              >
                <span style={{ transition: 'color 0.2s' }}>✕</span>
              </button>

              {/* En-tête */}
              <div style={{
                padding: '52px 48px 0',
                borderBottom: '1px solid rgba(201,169,110,0.2)',
                paddingBottom: '32px',
              }}>
                <p style={{ fontSize: '9px', letterSpacing: '6px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '12px', fontWeight: 400 }}>
                  Expérience Signature
                </p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, fontStyle: 'italic',
                  letterSpacing: '3px', marginBottom: '12px',
                }}>Coastal Experience</h2>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: 'italic', fontSize: '18px',
                  color: 'rgba(42,33,24,0.5)', fontWeight: 300,
                }}>L'expérience signature en Corse</p>
              </div>

              {/* Corps — 2 colonnes */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: '0', minHeight: '400px',
              }}>
                {/* Gauche — grille photos */}
                <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '2px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format"
                    alt="Plage privée Corse"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80&auto=format"
                      alt="Traversée en bateau"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format"
                      alt="Dîner privé"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                </div>

                {/* Droite — texte */}
                <div style={{
                  padding: '40px 44px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  overflowY: 'auto',
                }}>
                  <div>
                    <div style={{ width: '32px', height: '1px', background: 'var(--color-gold)', marginBottom: '28px' }} />
                    {[
                      "Offrez une dimension supplémentaire à votre événement grâce à Coastal Experience, une expérience exclusive imaginée pour sublimer vos plus beaux moments.",
                      "Au départ de Saint-Florent, embarquez pour une traversée privée le long des côtes sauvages corses à la découverte de criques préservées, accessibles uniquement par la mer.",
                      "À votre arrivée, un décor d'exception vous attend : dîner privé sur la plage, coucher de soleil sur la mer, décoration raffinée et ambiance entièrement pensée selon vos envies.",
                      "Photographe professionnel, prises de vue par drone, séance photo à la golden hour, musique live, guitare, saxophone, playlists personnalisées ou simplement le silence de la mer : chaque détail est soigneusement orchestré pour créer un moment unique.",
                      "D'une élégance minimaliste à une mise en scène plus spectaculaire, Coastal Experience est bien plus qu'une simple activité : c'est une option premium conçue pour transformer votre événement en une expérience inoubliable au cœur des plus beaux paysages de Corse.",
                    ].map((txt, i) => (
                      <p key={i} style={{
                        fontSize: '14px', color: 'rgba(42,33,24,0.72)',
                        lineHeight: 1.95, fontWeight: 300, marginBottom: '16px',
                      }}>{txt}</p>
                    ))}
                  </div>
                  <div style={{ paddingTop: '28px' }}>
                    <a
                      href="#contact"
                      className="btn btn-dark"
                      onClick={() => setCoastalOpen(false)}
                    >Planifier mon expérience</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
          @keyframes slideUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
        `}</style>

      </div>
    </section>
  )
}
