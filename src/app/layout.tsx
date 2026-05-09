import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Digital Campus Dz — École d\'e-learning algérienne',
  description: 'Apprenez la programmation et le développement web en ligne via Google Meet avec des professeurs disponibles et passionnés. Formations Python, Web, Data Science et plus.',
  keywords: ['e-learning', 'algérie', 'programmation', 'cours en ligne', 'python', 'dev web', 'google meet'],
  openGraph: {
    title: 'Digital Campus Dz',
    description: 'Votre école d\'e-learning algérienne — Cours en ligne via Google Meet',
    locale: 'fr_DZ',
    type: 'website',
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
      </body>
    </html>
  )
}
