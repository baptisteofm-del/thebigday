import { createClient } from '@/lib/supabase/server'

export const metadata = {
  title: 'The Big Day - Mariages en Corse',
  description: 'Organisation de mariages d\'exception en Corse',
}

export default async function TheBigDayPage() {
  const supabase = await createClient()

  const { data: eventType } = await supabase
    .from('event_types')
    .select('id')
    .eq('slug', 'mariage')
    .single()

  const { data: events } = eventType ? await supabase
    .from('events')
    .select('*')
    .eq('event_type_id', eventType.id)
    .eq('status', 'published')
    .order('date', { ascending: false })
    .limit(6) : { data: [] }

  return (
    <main>
      {/* Hero Section */}
      <section className="section relative h-screen flex items-center justify-center bg-gradient-to-br from-gold/10 to-sand">
        <div className="container-max text-center">
          <h1 className="font-serif font-bold mb-6 animate-fade-in-up">
            The Big Day
          </h1>
          <p className="text-2xl text-dark/70 mb-12 max-w-2xl mx-auto">
            Votre mariage, magnifié avec expertise et créativité
          </p>
          <p className="text-lg text-dark/60 max-w-3xl mx-auto mb-12">
            De la conception initiale à la dernière danse, nous orchestrons chaque moment avec passion. 
            Mariages intimes ou réceptions majestueuses en Corse.
          </p>
          <button className="btn btn-primary">Planifier votre mariage</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-cream">
        <div className="container-max">
          <h2 className="font-serif font-bold text-center mb-16">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Planning complet', desc: 'De l\'idée à la réalisation, nous gérons chaque détail' },
              { title: 'Direction artistique', desc: 'Créons la vision esthétique de votre jour' },
              { title: 'Styling floral', desc: 'Fleurs, décorations et mise en scène florale' },
              { title: 'Destination weddings', desc: 'Mariages dans les plus beaux lieux de Corse' },
              { title: 'Scénographie', desc: 'Ambiance et décor personnalisés' },
              { title: 'Coordination', desc: 'Gestion des prestataires et timing du jour J' },
            ].map((service, i) => (
              <div key={i} className="card bg-white shadow-lg hover:shadow-xl">
                <h3 className="font-serif text-2xl mb-3 text-gold">{service.title}</h3>
                <p className="text-dark/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {events && events.length > 0 && (
        <section className="section bg-ivory">
          <div className="container-max">
            <h2 className="font-serif font-bold text-center mb-16">Nos Réalisations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-sand to-gold rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white text-xl">
                      📷 {event.title}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl mt-4">{event.title}</h3>
                  {event.location && (
                    <p className="text-dark/60 text-sm">{event.location}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-sand to-gold text-white">
        <div className="container-max text-center">
          <h2 className="font-serif font-bold mb-6">Prêt à vivre votre rêve?</h2>
          <p className="text-lg mb-12">Contactez-nous pour débuter votre projet de mariage</p>
          <button className="btn bg-dark hover:bg-dark/90">Commencer mon projet</button>
        </div>
      </section>
    </main>
  )
}
