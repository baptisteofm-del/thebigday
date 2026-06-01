import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()

  // Fetch data from Supabase
  const { data: agency } = await supabase
    .from('agencies')
    .select('*')
    .eq('slug', 'thebigday')
    .single()

  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(3)

  return (
    <main>
      {/* Navigation sera ajoutée ici */}
      
      {/* Hero Section */}
      <section className="section relative h-screen flex items-center justify-center bg-gradient-to-br from-sand to-ivory">
        <div className="container-max text-center">
          <h1 className="font-serif font-bold mb-6 animate-fade-in-up">
            Créez Votre Moment<br />
            <span className="text-gold">Inoubliable</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark/70 mb-12 max-w-2xl mx-auto">
            Mariages & événements d'exception en Corse
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="btn btn-primary">THE BIG DAY</button>
            <button className="btn btn-secondary">THE GATHERING</button>
          </div>
        </div>
      </section>

      {/* Présentation Section */}
      <section className="section bg-cream">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold mb-6">{agency?.name || 'The Big Day Corsica'}</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              {agency?.description || 'Nous créons des expériences inoubliables dans les plus beaux lieux de l\'île de Beauté.'}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🤝', title: 'Expertise', desc: 'Accompagnement personnalisé à chaque étape' },
              { icon: '🏖️', title: 'Lieux d\'exception', desc: 'Les plus beaux lieux de Corse sélectionnés' },
              { icon: '✨', title: 'Sur-mesure', desc: 'Chaque projet est entièrement personnalisé' },
              { icon: '⭐', title: 'Excellence', desc: 'Organisation irréprochable jusque dans les détails' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                <p className="text-dark/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <section className="section bg-ivory">
          <div className="container-max">
            <h2 className="font-serif font-bold text-center mb-16">Ce qu'on dit de nous</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="card card-shadow bg-white">
                  <div className="text-gold text-lg mb-4">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className="italic text-dark/80 mb-6">"{testimonial.content}"</p>
                  <p className="font-semibold text-dark">{testimonial.author_name}</p>
                  {testimonial.author_role && (
                    <p className="text-sm text-dark/60">{testimonial.author_role}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="section bg-gradient-to-r from-sand to-taupe text-white">
        <div className="container-max text-center">
          <h2 className="font-serif font-bold mb-6">Prêt à créer votre moment extraordinaire?</h2>
          <p className="text-lg mb-12">Contactez-nous pour discuter de votre vision.</p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="btn btn-primary">Planifier mon projet</button>
            <button className="btn border-2 border-white text-white hover:bg-white hover:text-dark">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-serif text-xl mb-6 text-gold">The Big Day Corsica</h4>
              <p className="text-white/70">Mariages et événements d'exception en Corse</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6 text-gold">The Big Day</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-gold transition">Mariages</a></li>
                <li><a href="#" className="hover:text-gold transition">Services</a></li>
                <li><a href="#" className="hover:text-gold transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6 text-gold">The Gathering</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-gold transition">Événements privés</a></li>
                <li><a href="#" className="hover:text-gold transition">Services</a></li>
                <li><a href="#" className="hover:text-gold transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6 text-gold">Suivez-nous</h4>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:text-gold transition">📸</a>
                <a href="#" className="hover:text-gold transition">👥</a>
                <a href="#" className="hover:text-gold transition">📌</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 The Big Day Corsica. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
