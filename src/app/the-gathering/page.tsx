import { createClient } from '@/lib/supabase/server'

export const metadata = {
  title: 'The Gathering - Événements Privés en Corse',
  description: 'Organisation d\'événements privés et célébrations intimistes en Corse',
}

export default async function TheGatheringPage() {
  const supabase = await createClient()

  const { data: eventTypes } = await supabase
    .from('event_types')
    .select('*')
    .neq('slug', 'mariage')
    .order('created_at')

  return (
    <main>
      {/* Hero Section */}
      <section className="section relative h-screen flex items-center justify-center bg-gradient-to-br from-taupe/10 to-sand">
        <div className="container-max text-center">
          <h1 className="font-serif font-bold mb-6 animate-fade-in-up text-taupe">
            The Gathering
          </h1>
          <p className="text-2xl text-dark/70 mb-12 max-w-2xl mx-auto">
            Célébrations privées et intimistes
          </p>
          <p className="text-lg text-dark/60 max-w-3xl mx-auto mb-12">
            Pour les moments qui méritent plus qu'une simple fête. Ambiances intimes et élégantes 
            où chaque invité se sent privilégié.
          </p>
          <button className="btn btn-primary">Planifier mon événement</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-cream">
        <div className="container-max">
          <h2 className="font-serif font-bold text-center mb-16">Nos Événements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes?.map((type) => (
              <div key={type.id} className="card bg-gradient-to-br from-taupe/10 to-sand/10 hover:shadow-lg">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="font-serif text-2xl mb-3">{type.name}</h3>
                <p className="text-dark/70">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why The Gathering Section */}
      <section className="section bg-ivory">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif font-bold mb-6">Pourquoi choisir The Gathering?</h2>
            <p className="text-lg text-dark/70">
              Chaque célébration est unique. Nous créons des expériences sur mesure 
              qui reflètent votre personnalité et vos valeurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Intimité',
                desc: 'Des moments privés dans une ambiance exclusive et élégante'
              },
              {
                title: 'Personnalisation',
                desc: 'Chaque détail pensé pour vos préférences et votre style'
              },
              {
                title: 'Excellence',
                desc: 'Un savoir-faire reconnu et une attention inégalée'
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="font-serif text-2xl mb-3 text-taupe">{item.title}</h3>
                <p className="text-dark/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section bg-cream">
        <div className="container-max">
          <h2 className="font-serif font-bold text-center mb-16">Galerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-sand to-taupe rounded-lg flex items-center justify-center text-white text-2xl">
                📷
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-taupe to-sand text-white">
        <div className="container-max text-center">
          <h2 className="font-serif font-bold mb-6">Créons votre moment unique</h2>
          <p className="text-lg mb-12">Contactez-nous pour découvrir comment we can celebrate your story</p>
          <button className="btn bg-dark hover:bg-dark/90">Commencer mon événement</button>
        </div>
      </section>
    </main>
  )
}
