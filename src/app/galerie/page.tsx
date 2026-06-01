import { createClient } from '@/lib/supabase/server'

export const metadata = {
  title: 'Galerie - The Big Day Corsica',
  description: 'Découvrez nos réalisations en photos',
}

export default async function GaleriePage() {
  const supabase = await createClient()

  const { data: portfolios } = await supabase
    .from('portfolios')
    .select('*')
    .eq('published', true)
    .order('position')

  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-sand to-ivory pt-32">
        <div className="container-max text-center">
          <h1 className="font-serif font-bold mb-6">Galerie</h1>
          <p className="text-xl text-dark/70">Nos plus beaux moments capturés</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-cream">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios && portfolios.length > 0 ? (
              portfolios.map((portfolio) => (
                <div key={portfolio.id} className="group cursor-pointer overflow-hidden rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-sand to-gold overflow-hidden">
                    {portfolio.image_url ? (
                      <img
                        src={portfolio.image_url}
                        alt={portfolio.alt_text || portfolio.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-4xl">
                        📷
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-lg font-semibold">{portfolio.title}</h3>
                    {portfolio.description && (
                      <p className="text-dark/60 text-sm mt-2">{portfolio.description}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-dark/60 text-lg">Galerie en construction</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
