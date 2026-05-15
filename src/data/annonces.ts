export type AnnonceType = 'formation' | 'webinaire' | 'offre' | 'evenement'

export interface Annonce {
  id: string
  title: string
  description: string
  date: string // format: 'YYYY-MM-DD'
  type: AnnonceType
  badge?: string       // ex: "Nouveau", "Places limitées", "Gratuit"
  isUrgent?: boolean
  ctaLabel: string
  ctaUrl: string       // lien Google Form ou autre
}

export const annonces: Annonce[] = [
  {
    id: '1',
    title: 'Nouvelle session Python — Débutants',
    description:
      'Une nouvelle cohorte Python démarre le 1er juin. 8 semaines de cours en direct via Google Meet, du lundi au jeudi de 18h à 20h. Places limitées à 20 étudiants.',
    date: '2026-06-01',
    type: 'formation',
    badge: 'Places limitées',
    isUrgent: true,
    ctaLabel: "S'inscrire via Google Form",
    ctaUrl: 'https://forms.google.com', // ← remplacer par ton vrai lien
  },
  {
    id: '2',
    title: 'Webinaire gratuit : Introduction à la Cybersécurité',
    description:
      'Session ouverte à tous le 20 mai à 19h. Découvrez les bases de la cybersécurité, les menaces courantes et comment vous protéger. Aucun prérequis.',
    date: '2026-05-20',
    type: 'webinaire',
    badge: 'Gratuit',
    isUrgent: false,
    ctaLabel: 'Réserver ma place',
    ctaUrl: 'https://forms.google.com', // ← remplacer par ton vrai lien
  },
  {
    id: '3',
    title: 'Offre spéciale — 30% sur toutes les formations ce mois-ci',
    description:
      'Pour célébrer notre 1ère année, bénéficiez de 30% de réduction sur toutes nos formations jusqu\'au 31 mai. Utilisez le code CAMPUS30 lors de l\'inscription.',
    date: '2026-05-31',
    type: 'offre',
    badge: '-30%',
    isUrgent: true,
    ctaLabel: "Profiter de l'offre",
    ctaUrl: 'https://forms.google.com', // ← remplacer par ton vrai lien
  },
  {
    id: '4',
    title: 'Ouverture de la formation Développement Web Full Stack',
    description:
      'Après des mois de préparation, notre formation Full Stack (HTML, CSS, JS, React, Node.js) ouvre ses inscriptions. Durée : 12 semaines intensives.',
    date: '2026-06-15',
    type: 'formation',
    badge: 'Nouveau',
    isUrgent: false,
    ctaLabel: "S'inscrire maintenant",
    ctaUrl: 'https://forms.google.com', // ← remplacer par ton vrai lien
  },
  {
    id: '5',
    title: 'Événement : Journée portes ouvertes Digital Campus Dz',
    description:
      'Venez découvrir notre plateforme, rencontrer les formateurs et assister à des démos de cours en direct. Événement en ligne via Google Meet, ouvert à tous.',
    date: '2026-05-25',
    type: 'evenement',
    badge: 'Événement',
    isUrgent: false,
    ctaLabel: 'Participer à l\'événement',
    ctaUrl: 'https://forms.google.com', // ← remplacer par ton vrai lien
  },
]
