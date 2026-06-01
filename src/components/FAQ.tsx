'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Intervenez-vous uniquement en Corse ?',
    a: 'Oui, notre expertise est entièrement dédiée à la Corse. Nous connaissons l\'île dans ses moindres recoins — ses lieux secrets, ses prestataires d\'exception, ses lumières uniques. Cette spécialisation est ce qui nous permet de vous offrir le meilleur de l\'île de Beauté.'
  },
  {
    q: 'Organisez-vous des événements entièrement sur mesure ?',
    a: 'Absolument. Chaque projet est unique. Nous ne proposons pas de formules standardisées — tout est pensé, conçu et réalisé en fonction de votre vision, de vos envies et de votre personnalité.'
  },
  {
    q: 'Travaillez-vous avec des clients internationaux ?',
    a: 'Oui, une grande partie de notre clientèle vient de l\'étranger — Europe, Amériques, Moyen-Orient. Nous travaillons en français et en anglais, et accompagnons nos clients à distance avec la même attention que pour les clients locaux.'
  },
  {
    q: 'Combien de temps à l\'avance faut-il réserver ?',
    a: 'Pour un mariage, nous recommandons de prendre contact au minimum 12 à 18 mois à l\'avance, surtout pour la haute saison estivale. Pour les événements privés (The Gathering), 3 à 6 mois suffisent généralement.'
  },
  {
    q: 'Proposez-vous une coordination complète le jour J ?',
    a: 'Oui. Notre service de coordination le jour J est l\'un des piliers de notre offre. Nous gérons l\'intégralité des prestataires, le timing, les imprévus — pour que vous puissiez vivre votre journée pleinement, sans aucune préoccupation logistique.'
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{faq.q}</span>
            <span className={`faq-icon ${open === i ? 'open' : ''}`}>+</span>
          </button>
          <div className={`faq-answer ${open === i ? 'open' : ''}`}>
            <p style={{ color: 'rgba(42,33,24,0.7)', lineHeight: 1.8, fontSize: '15px' }}>
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
