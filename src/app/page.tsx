import { Navigation } from '@/components/Navigation'
import { ScrollReveal } from '@/components/ScrollReveal'
import { FAQ } from '@/components/FAQ'
import { LogoBrand } from '@/components/LogoBrand'
import { TheGatheringSection } from '@/components/TheGatheringSection'
import { CoastalExperienceSection } from '@/components/CoastalExperienceSection'
import { createClient } from '@/lib/supabase/server'

// Photos Unsplash — Corse & mariage (libres de droits)
const HERO_IMAGE = 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1920&q=85&auto=format'
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80&auto=format'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80&auto=format', alt: 'Mariage en Corse' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80&auto=format', alt: 'Table de réception' },
  { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80&auto=format', alt: 'Décoration florale' },
  { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80&auto=format', alt: 'Cérémonie' },
  { src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&q=80&auto=format', alt: 'Ambiance dîner' },
  { src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80&auto=format', alt: 'Réception' },
]



export default async function Home() {
  const supabase = await createClient()
  const { data: agency } = await supabase.from('agencies').select('*').eq('slug', 'thebigday').single()
  const { data: testimonials } = await supabase.from('testimonials').select('*').eq('published', true).limit(3)

  const defaultTestimonials = [
    { id: '1', author_name: 'Marie & Antoine', author_role: 'Mariés — Été 2024', content: 'The Big Day a dépassé tous nos espoirs. Chaque détail était d\'une précision absolue. Notre mariage en Corse restera le plus beau jour de notre vie.', rating: 5 },
    { id: '2', author_name: 'La famille Bertoni', author_role: 'Dîner privé — Printemps 2024', content: 'Une soirée d\'une élégance rare. The Gathering a su créer une atmosphère intime et magique que nous n\'oublierons jamais.', rating: 5 },
    { id: '3', author_name: 'Juliette & Marc', author_role: 'Mariés — Automne 2023', content: 'Professionnalisme, créativité, passion. Trois mots qui résument parfaitement notre expérience avec The Big Day Corsica.', rating: 5 },
  ]

  const reviews = (testimonials && testimonials.length > 0) ? testimonials : defaultTestimonials

  return (
    <>
      <Navigation />

      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div
          className="hero-bg loaded"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          {/* Eyebrow */}
          <p style={{
            fontSize: '10px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '32px',
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
          }}>
            Île de Beauté · Corse
          </p>

          {/* Logo typographique */}
          <div style={{ marginBottom: '4px' }}>
            <LogoBrand light size="lg" />
          </div>

          <div className="divider" style={{ background: 'rgba(201,169,110,0.7)', margin: '20px auto 28px' }} />

          <h2 style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            fontWeight: 300,
            letterSpacing: '2px',
            color: 'rgba(255,255,255,0.88)',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            marginBottom: '16px',
          }}>
            Mariages &amp; événements d'exception en Corse
          </h2>

          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '1px',
            marginBottom: '56px',
            fontWeight: 300,
          }}>
            Nous créons des expériences inoubliables dans les plus beaux lieux de l'île de Beauté
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#the-big-day" className="btn btn-gold">
              The Big Day
            </a>
            <a href="#the-gathering" className="btn btn-outline">
              The Gathering
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase',
        }}>
          <span>Découvrir</span>
          <span style={{ fontSize: '18px', animation: 'bounce 2s infinite' }}>↓</span>
        </div>
        <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}`}</style>
      </section>

      {/* ===================== INTRO ===================== */}
      <section className="section" style={{ background: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '24px' }}>
              Notre philosophie
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, maxWidth: '700px', margin: '0 auto 24px', lineHeight: 1.2 }}>
              Chaque moment mérite d'être extraordinaire
            </h2>
            <div className="divider" />
            <p style={{ fontSize: '17px', color: 'rgba(42,33,24,0.65)', maxWidth: '580px', margin: '0 auto 64px', lineHeight: 1.9, fontWeight: 300 }}>
              Agence événementielle née de l'amour de la Corse et de l'exigence du détail,
              nous orchestrons vos plus beaux moments avec passion et sur-mesure absolu.
            </p>
          </ScrollReveal>

          {/* 4 pilliers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px' }}>
            {[
              { icon: '◇', title: 'Expertise', desc: 'Accompagnement personnalisé à chaque étape de votre projet' },
              { icon: '◈', title: 'Lieux d\'exception', desc: 'Les plus beaux sites de Corse, sélectionnés avec soin' },
              { icon: '◉', title: 'Sur-mesure', desc: 'Chaque événement entièrement pensé pour vous' },
              { icon: '◎', title: 'Excellence', desc: 'Une organisation irréprochable dans les moindres détails' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', color: 'var(--color-gold)', marginBottom: '20px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', fontWeight: 500, marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(42,33,24,0.6)', lineHeight: 1.8, fontWeight: 300 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE BIG DAY ===================== */}
      <section id="the-big-day" className="section" style={{ background: 'var(--color-ivory)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

            {/* Image */}
            <ScrollReveal>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', top: '-20px', left: '-20px',
                  right: '20px', bottom: '20px',
                  border: '1px solid rgba(201,169,110,0.3)',
                  zIndex: 0,
                }} />
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&auto=format"
                  alt="Mariage en Corse"
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', position: 'relative', zIndex: 1 }}
                />
              </div>
            </ScrollReveal>

            {/* Text */}
            <div>
              <ScrollReveal>
                <p style={{ fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
                  Mariages
                </p>
                <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, marginBottom: '8px' }}>
                  The Big Day
                </h2>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '22px', color: 'rgba(42,33,24,0.5)', marginBottom: '32px', fontWeight: 300 }}>
                  Votre mariage, magnifié
                </p>
                <div className="divider" style={{ margin: '0 0 32px' }} />
                <p style={{ fontSize: '15px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, marginBottom: '40px', fontWeight: 300 }}>
                  De la première esquisse à la dernière danse, nous orchestrons chaque instant avec une précision artisanale. 
                  Mariages intimes face à la mer ou réceptions majestueuses dans les plus belles demeures corses — 
                  nous capturons l'essence de votre amour et la magnifions.
                </p>
              </ScrollReveal>

              {/* Services */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: '40px' }}>
                {[
                  'Organisation complète',
                  'Coordination du jour J',
                  'Gestion des prestataires',
                  'Recherche de lieux',
                  'Décoration & scénographie',
                  'Accompagnement personnalisé',
                ].map((s, i) => (
                  <ScrollReveal key={i} delay={i * 60}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 400 }}>
                      <span style={{ color: 'var(--color-gold)', fontSize: '10px' }}>◆</span>
                      {s}
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <a href="#contact" className="btn btn-dark">Planifier mon mariage</a>
            </div>
          </div>
        </div>
      </section>

      <TheGatheringSection />

      <CoastalExperienceSection />

      {/* ===================== GALERIE ===================== */}
      <section id="galerie" className="section" style={{ background: 'var(--color-dark)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px', color: 'white' }}>
              <p style={{ fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
                Portfolio
              </p>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'white' }}>
                Nos réalisations
              </h2>
              <div className="divider" />
            </div>
          </ScrollReveal>

          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TÉMOIGNAGES ===================== */}
      <section className="section" style={{ background: 'var(--color-ivory)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
                Témoignages
              </p>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300 }}>Ce qu'ils disent</h2>
              <div className="divider" />
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {reviews.map((t: any, i: number) => (
              <ScrollReveal key={t.id} delay={i * 120}>
                <div style={{
                  background: 'white',
                  padding: '48px 40px',
                  borderTop: '2px solid var(--color-gold)',
                  height: '100%',
                }}>
                  <div style={{ color: 'var(--color-gold)', fontSize: '12px', letterSpacing: '3px', marginBottom: '24px' }}>
                    {'★'.repeat(t.rating)}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontStyle: 'italic',
                    lineHeight: 1.8,
                    color: 'var(--color-dark)',
                    marginBottom: '32px',
                    fontWeight: 300,
                  }}>
                    « {t.content} »
                  </p>
                  <div>
                    <p style={{ fontWeight: 500, fontSize: '14px', letterSpacing: '1px' }}>{t.author_name}</p>
                    {t.author_role && (
                      <p style={{ fontSize: '12px', color: 'var(--color-gold)', letterSpacing: '1px', marginTop: '4px' }}>{t.author_role}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== À PROPOS ===================== */}
      <section id="about" className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <ScrollReveal>
                <p style={{ fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
                  Notre histoire
                </p>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, marginBottom: '24px' }}>
                  À propos de<br />The Big Day
                </h2>
                <div className="divider" style={{ margin: '0 0 32px' }} />
                <p style={{ fontSize: '15px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>
                  Née d'une passion profonde pour la Corse et l'art de la célébration, 
                  The Big Day Corsica est une agence qui place l'émotion au cœur de chaque projet.
                </p>
                <p style={{ fontSize: '15px', color: 'rgba(42,33,24,0.7)', lineHeight: 1.9, marginBottom: '40px', fontWeight: 300 }}>
                  Nous croyons que les plus beaux moments de la vie méritent une attention absolue. 
                  C'est pourquoi nous accompagnons chaque client comme si c'était le nôtre — 
                  avec exigence, créativité et un amour sincère pour ce que nous faisons.
                </p>
                <a href="#contact" className="btn btn-gold">Nous rencontrer</a>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div style={{ position: 'relative' }}>
                <img
                  src={ABOUT_IMAGE}
                  alt="The Big Day Corsica"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '-24px', right: '-24px',
                  background: 'var(--color-gold)',
                  padding: '32px',
                  textAlign: 'center',
                  color: 'white',
                }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 300 }}>100+</div>
                  <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Événements</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="section" style={{ background: 'var(--color-ivory)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
                Questions fréquentes
              </p>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300 }}>FAQ</h2>
              <div className="divider" />
            </div>
          </ScrollReveal>
          <FAQ />
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="section" style={{ background: 'var(--color-dark)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

            {/* Left */}
            <ScrollReveal>
              <p style={{ fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
                Commençons
              </p>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'white', marginBottom: '24px' }}>
                Planifier<br />votre projet
              </h2>
              <div className="divider" style={{ margin: '0 0 32px', background: 'rgba(201,169,110,0.5)' }} />
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, fontWeight: 300, marginBottom: '48px' }}>
                Chaque grand moment commence par une conversation. 
                Parlons de votre vision et voyons comment nous pouvons la sublimer.
              </p>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '8px' }}>Email</p>
                <a href="mailto:contact@thebigday.fr" style={{ color: 'white', fontSize: '16px' }}>
                  contact@thebigday.fr
                </a>
              </div>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '8px' }}>Localisation</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>Corse, France</p>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={150}>
              <ContactFormInline />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer style={{ background: '#1a1208', padding: '48px 0 24px', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '4px' }}>
                The Big Day
              </div>
              <div style={{ fontSize: '10px', letterSpacing: '4px', color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                Corsica
              </div>
            </div>
            <div style={{ display: 'flex', gap: '32px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
              <a href="#the-big-day" style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.3s' }}>The Big Day</a>
              <a href="#the-gathering" style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.3s' }}>The Gathering</a>
              <a href="#galerie" style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.3s' }}>Galerie</a>
              <a href="#contact" style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.3s' }}>Contact</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
            © 2024 The Big Day Corsica — Tous droits réservés
          </div>
        </div>
      </footer>
    </>
  )
}

// Formulaire contact inline (client component)
function ContactFormInline() {
  return (
    <div id="contact-form" suppressHydrationWarning>
      <ContactFormClient />
    </div>
  )
}

import ContactFormClient from '@/components/ContactFormClient'
