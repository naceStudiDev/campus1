import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digitalcampus-dz.com'),
  title: {
    default: 'Digital Campus Dz | Cours de programmation en ligne – Algérie',
    template: '%s | Digital Campus Dz',
  },
  description: 'Digital Campus Dz, l\'école fondée par des étudiants pour des étudiants. Cours en ligne de programmation, cybersécurité, algorithmique et marketing digital via Google Meet en Algérie.',
  keywords: ['e-learning', 'algérie', 'programmation', 'python', 'algorithmique', 'cybersécurité', 'cours en ligne', 'google meet', 'digital campus dz', 'DZD'],
  openGraph: {
    siteName: 'Digital Campus Dz',
    locale: 'fr_DZ',
    type: 'website',
    title: 'Digital Campus Dz | Cours de programmation en ligne – Algérie',
    description: 'L\'école fondée par des étudiants pour des étudiants. Cours en ligne via Google Meet.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
