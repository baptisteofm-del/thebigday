'use client'

import { useEffect, useRef, useState } from 'react'
import { ScrollReveal } from './ScrollReveal'

const FEATURES = [
  {
    icon: '🚤',
    title: 'Arrivée en bateau',
    desc: 'Embarquement privé depuis Saint-Florent le long des côtes sauvages',
  },
  {
    icon: '🏝️',
    title: 'Plage privée',
    desc: 'Criques préservées, accessibles uniquement par la mer',
  },
  {
    icon: '🌅',
    title: 'Coucher de soleil',
    desc: 'Golden hour sur la Méditerranée — un décor incomparable',
  },
  {
    icon: '🍽️',
    title: 'Dîner d\'exception',
    desc: 'Table dressée sur la plage, cuisine raffinée, décoration sur mesure',
  },
  {
    icon: '📸',
    title: 'Photographe & drone',
    desc: 'Prises de vue professionnelles, séance golden hour, images aériennes',
  },
  {
    icon: '🎶',
    title: 'Ambiance personnalisée',
    desc: 'Musique live, guitare, saxophone ou playlists — selon vos envies',
  },
]

const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format',
    alt: 'Plage Corse coucher de soleil',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-92ab472cad5d?w=800&q=80&auto=format',
    alt: 'Dîner privé plage',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80&auto=format',
    alt: 'Plage paradisiaque',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80&auto=format',
    alt: 'Bateau côtes corses',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&auto=format',
    alt: 'Célébration au coucher de soleil',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&auto=format',
    alt: 'Ambiance soirée',
    wide: false,
  },
]

export function CoastalExperienceSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [parallaxY, setParallaxY] = useState(0)

  // Parallax léger sur le hero
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        setParallaxY(-rect.top * 0.25)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div id="coastal-experience">

      {/* ═══════════════════════════════════════════
          1. HERO PLEIN ÉCRAN — VIDÉO IMMERSIVE
      ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '700px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Vidéo background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `translateY(${parallaxY}px) scale(1.08)`,
            transition: 'transform 0.05s linear',
            willChange: 'transform',
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/4782135/4782135-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
          {/* Fallback image */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85&auto=format"
            alt="Coastal Experience"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </video>

        {/* Overlay dégradé */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,8,5,0.3) 0%, rgba(10,8,5,0.5) 50%, rgba(10,8,5,0.7) 100%)',
          zIndex: 1,
        }} />

        {/* Contenu centré */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          padding: '0 24px',
          maxWidth: '900px',
          animation: 'fadeInHero 1.2s ease forwards',
        }}>
          {/* Eyebrow */}
          <p style={{
            fontSize: '10px',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '32px',
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
          }}>
            Expérience Signature · The Big Day
          </p>

          {/* Titre principal */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(52px, 9vw, 120px)',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '8px',
            lineHeight: 0.9,
            textTransform: 'uppercase',
            marginBottom: '0',
          }}>
            Coastal
          </h1>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(52px, 9vw, 120px)',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '8px',
            lineHeight: 0.9,
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}>
            Experience
          </h1>

          {/* Divider doré */}
          <div style={{ width: '50px', height: '1px', background: 'var(--color-gold)', margin: '0 auto 32px' }} />

          {/* Sous-titre */}
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '40px',
            lineHeight: 1.5,
          }}>
            Transformez votre événement en une expérience inoubliable.
          </p>

          {/* Points forts */}
          <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}>
            {['Plage secrète', 'Arrivée en bateau', 'Coucher de soleil', 'Dîner privé'].map((item, i) => (
              <span key={i} style={{
                fontSize: '10px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
                padding: '6px 14px',
                border: '1px solid rgba(201,169,110,0.4)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
              }}>
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#coastal-presentation"
            className="btn"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.7)',
              color: 'white',
              padding: '14px 48px',
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              transition: 'all 0.4s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-gold)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-gold)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.7)'
            }}
          >
            Découvrir l'expérience
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '9px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
        }}>
          <span>Découvrir</span>
          <span style={{ animation: 'bounce 2s infinite' }}>↓</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. SECTION PRÉSENTATION
      ═══════════════════════════════════════════ */}
      <section
        id="coastal-presentation"
        style={{ background: 'var(--color-cream)', padding: '120px 0' }}
      >
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}>

            {/* Colonne gauche — texte */}
            <div>
              <ScrollReveal>
                <p style={{
                  fontSize: '10px',
                  letterSpacing: '5px',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '20px',
                }}>
                  The Gathering ✨
                </p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(36px, 4vw, 52px)',
                  fontWeight: 300,
                  lineHeight: 1.15,
                  marginBottom: '10px',
                }}>
                  Coastal Experience
                </h2>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '20px',
                  color: 'rgba(42,33,24,0.5)',
                  marginBottom: '32px',
                  fontWeight: 300,
                }}>
                  L'expérience signature en Corse
                </p>
                <div className="divider" style={{ margin: '0 0 36px' }} />

                {[
                  'Offrez une dimension supplémentaire à votre événement grâce à Coastal Experience, une expérience exclusive imaginée pour sublimer vos plus beaux moments.',
                  'Au départ de Saint-Florent, embarquez pour une traversée privée le long des côtes sauvages corses à la découverte de criques préservées, accessibles uniquement par la mer.',
                  'À votre arrivée, un décor d\'exception vous attend : dîner privé sur la plage, coucher de soleil sur la mer, décoration raffinée et ambiance entièrement pensée selon vos envies.',
                  'Cette expérience peut être intégrée à tous nos événements afin d\'apporter une touche d\'exclusivité et de raffinement supplémentaire. Elle est particulièrement appréciée pour les demandes en mariage, les dîners privés, les anniversaires et les célébrations intimistes, mais peut également être imaginée pour un baptême, une réunion de famille, un renouvellement de vœux ou toute autre occasion spéciale.',
                  'Photographe professionnel, prises de vue par drone, séance photo à la golden hour, musique live, guitare, saxophone, playlists personnalisées ou simplement le silence de la mer : chaque détail est soigneusement orchestré pour créer un moment unique.',
                  'D\'une élégance minimaliste à une mise en scène plus spectaculaire, Coastal Experience est bien plus qu\'une simple activité : c\'est une option premium conçue pour transformer votre événement en une expérience inoubliable au cœur des plus beaux paysages de Corse.',
                ].map((text, i) => (
                  <p key={i} style={{
                    fontSize: '15px',
                    color: 'rgba(42,33,24,0.7)',
                    lineHeight: 1.95,
                    fontWeight: 300,
                    marginBottom: '20px',
                  }}>
                    {text}
                  </p>
                ))}

                <div style={{ marginTop: '40px' }}>
                  <a href="#contact" className="btn btn-gold">Planifier mon expérience</a>
                </div>
              </ScrollReveal>
            </div>

            {/* Colonne droite — image sticky + accent */}
            <ScrollReveal delay={150}>
              <div style={{ position: 'sticky', top: '120px' }}>
                {/* Image principale */}
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-16px', right: '-16px',
                    bottom: '16px', left: '16px',
                    border: '1px solid rgba(201,169,110,0.3)',
                    zIndex: 0,
                  }} />
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format"
                    alt="Coastal Experience Corse"
                    style={{
                      width: '100%',
                      aspectRatio: '3/4',
                      objectFit: 'cover',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  />
                  {/* Badge signature */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '-20px',
                    background: 'var(--color-dark)',
                    color: 'white',
                    padding: '24px 28px',
                    zIndex: 2,
                  }}>
                    <p style={{
                      fontSize: '9px',
                      letterSpacing: '4px',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                      marginBottom: '6px',
                    }}>
                      Expérience
                    </p>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '18px',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      letterSpacing: '1px',
                    }}>
                      Unique en Corse
                    </p>
                  </div>
                </div>

                {/* Deuxième image */}
                <div style={{ marginTop: '48px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80&auto=format"
                    alt="Bateau côtes corses"
                    style={{
                      width: '100%',
                      aspectRatio: '16/9',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. 6 ICÔNES FEATURES — FOND SOMBRE
      ═══════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-dark)', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <p style={{
                fontSize: '10px',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '20px',
              }}>
                Ce que nous créons pour vous
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 300,
                color: 'white',
                marginBottom: '16px',
              }}>
                Chaque détail orchestré
              </h2>
              <div className="divider" />
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }}>
            {FEATURES.map((feat, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  padding: '52px 36px',
                  background: 'rgba(255,255,255,0.03)',
                  borderTop: '1px solid rgba(201,169,110,0.15)',
                  transition: 'background 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(201,169,110,0.07)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'
                }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '20px' }}>{feat.icon}</div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '22px',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    letterSpacing: '1px',
                    color: 'white',
                    marginBottom: '12px',
                  }}>
                    {feat.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}>
                    {feat.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. GALERIE IMMERSIVE
      ═══════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-dark)', paddingBottom: '120px' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px', paddingTop: '24px' }}>
              <p style={{
                fontSize: '10px',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '20px',
              }}>
                L'expérience en images
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 300,
                color: 'white',
              }}>
                Les plus beaux paysages de Corse
              </h2>
            </div>
          </ScrollReveal>

          {/* Grid immersive 2 colonnes avec images larges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto',
            gap: '4px',
          }}>
            {/* Grande image pleine largeur */}
            <ScrollReveal>
              <div style={{ gridColumn: '1 / -1', overflow: 'hidden', height: '480px' }}>
                <img
                  src={GALLERY[0].src}
                  alt={GALLERY[0].alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
                />
              </div>
            </ScrollReveal>

            {/* 2 images en colonne */}
            {GALLERY.slice(1, 3).map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div style={{ overflow: 'hidden', height: '360px' }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
                  />
                </div>
              </ScrollReveal>
            ))}

            {/* Grande image pleine largeur */}
            <ScrollReveal>
              <div style={{ gridColumn: '1 / -1', overflow: 'hidden', height: '420px' }}>
                <img
                  src={GALLERY[3].src}
                  alt={GALLERY[3].alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
                />
              </div>
            </ScrollReveal>

            {/* 2 images finales */}
            {GALLERY.slice(4, 6).map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div style={{ overflow: 'hidden', height: '360px' }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. CTA FINAL
      ═══════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-cream)',
        padding: '100px 0',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <ScrollReveal>
            <p style={{
              fontSize: '10px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              marginBottom: '24px',
            }}>
              Commençons
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 300,
              marginBottom: '24px',
              lineHeight: 1.2,
            }}>
              Créons votre moment<br />unique en Corse
            </h2>
            <div className="divider" />
            <p style={{
              fontSize: '15px',
              color: 'rgba(42,33,24,0.6)',
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: '48px',
              maxWidth: '520px',
              margin: '0 auto 48px',
            }}>
              Chaque grand moment commence par une conversation. Parlez-nous de votre vision 
              et nous créerons ensemble une expérience que vous n'oublierez jamais.
            </p>
            <a href="#contact" className="btn btn-dark">Planifier mon expérience</a>
          </ScrollReveal>
        </div>
      </section>

      {/* Styles spécifiques */}
      <style>{`
        @keyframes fadeInHero {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          #coastal-presentation .container > div {
            grid-template-columns: 1fr !important;
          }
          #coastal-experience section > .container > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr 1fr !important;
          }
          #coastal-experience section:last-child .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
