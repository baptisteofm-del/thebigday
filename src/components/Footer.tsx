import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="font-serif text-xl mb-4 text-gold">The Big Day</h4>
            <p className="text-white/70 text-sm">
              Mariages et événements d'exception en Corse
            </p>
          </div>

          {/* The Big Day Links */}
          <div>
            <h4 className="font-serif text-xl mb-4 text-gold">The Big Day</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/the-big-day" className="hover:text-gold transition">
                  Mariages
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-gold transition">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* The Gathering Links */}
          <div>
            <h4 className="font-serif text-xl mb-4 text-gold">The Gathering</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/the-gathering" className="hover:text-gold transition">
                  Événements privés
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-gold transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-xl mb-4 text-gold">Suivez-nous</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-gold transition" aria-label="Instagram">
                📸
              </a>
              <a href="#" className="hover:text-gold transition" aria-label="Facebook">
                👥
              </a>
              <a href="#" className="hover:text-gold transition" aria-label="Pinterest">
                📌
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2024 The Big Day Corsica. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
