import type { Metadata } from 'next'
import CommentCaMarcheContent from '@/components/comment-ca-marche/CommentCaMarcheContent'

export const metadata: Metadata = {
  title: 'Comment ça marche',
  description: 'Découvre comment fonctionne Digital Campus Dz : inscription, cours en direct via Google Meet, replays et suivi personnalisé.',
}

export default function CommentCaMarchePage() {
  return <CommentCaMarcheContent />
}
