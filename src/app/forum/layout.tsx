import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Forum communautaire',
  description: 'Pose tes questions, aide les autres et partage tes projets. Le forum étudiant de Digital Campus Dz — Python, Dev Web, Cybersécurité, Algorithmique et plus.',
  openGraph: {
    title: 'Forum communautaire — Digital Campus Dz',
    description: 'La communauté étudiante DZD : questions, entraide et partage de projets en programmation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forum — Digital Campus Dz',
    description: 'Rejoins la communauté étudiante Digital Campus Dz.',
  },
}

export default function ForumLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
