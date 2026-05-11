import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Bibliothèque gratuite',
  description: 'PDF, vidéos YouTube, exercices corrigés et fiches mémo — 45+ ressources gratuites pour apprendre Python, Dev Web, Cybersécurité, Algorithmique, Langage C et Marketing Digital.',
  openGraph: {
    title: 'Bibliothèque gratuite — Digital Campus Dz',
    description: '45+ ressources gratuites : PDF, vidéos YouTube, exercices corrigés. Python, JavaScript, SQL, Cybersécurité, Langage C et plus.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bibliothèque gratuite — Digital Campus Dz',
    description: '45+ ressources gratuites pour apprendre la programmation et le marketing digital.',
  },
}

export default function BibliothequeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
