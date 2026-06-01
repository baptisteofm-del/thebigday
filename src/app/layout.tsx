import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'The Big Day Corsica',
  description: 'Mariages & événements d\'exception en Corse',
  keywords: 'mariage, événement, Corse, wedding planner',
  openGraph: {
    title: 'The Big Day Corsica',
    description: 'Mariages & événements d\'exception en Corse',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}
