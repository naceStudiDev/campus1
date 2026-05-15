import type { Metadata } from 'next'
import CommentCaMarcheContent from '@/components/comment-ca-marche/CommentCaMarcheContent'

export const metadata: Metadata = {
  title: 'Comment ça marche — Cours en ligne via Google Meet',
  description: 'Découvre comment fonctionnent les formations Digital Campus Dz : inscription gratuite, cours en direct via Google Meet, replays disponibles et suivi personnalisé pour les étudiants algériens.',
  openGraph: {
    title: 'Comment ça marche — Digital Campus Dz',
    description: 'Inscription gratuite → cours en direct → replay → suivi. Tout ce qu\'il faut savoir sur les formations Digital Campus Dz.',
  },
  alternates: {
    canonical: 'https://www.digitalcampus-dz.com/comment-ca-marche',
  },
}

export default function CommentCaMarchePage() {
  return <CommentCaMarcheContent />
}
