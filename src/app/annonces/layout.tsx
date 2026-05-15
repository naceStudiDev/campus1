import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Annonces & Événements',
  description: 'Retrouvez toutes les annonces de Digital Campus Dz : nouvelles sessions de formation, webinaires gratuits, offres spéciales et événements pour les étudiants algériens.',
  openGraph: {
    title: 'Annonces & Événements — Digital Campus Dz',
    description: 'Nouvelles formations, webinaires gratuits et offres exclusives pour les étudiants algériens. Ne manquez aucune actualité de Digital Campus Dz.',
  },
  alternates: {
    canonical: 'https://www.digitalcampus-dz.com/annonces',
  },
}

export default function AnnoncesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
