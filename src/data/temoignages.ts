export type Temoignage = {
  prenom: string
  ville: string
  formation: string
  texte: string
  initiales: string
}

export const temoignages: Temoignage[] = [
  {
    prenom: 'Yacine',
    ville: 'Alger',
    formation: 'Python',
    initiales: 'YB',
    texte: "J'ai commencé Python sans aucune base. En quelques semaines, je pouvais écrire mes propres scripts et automatiser des tâches. Le prof explique vraiment bien et répond à toutes les questions en direct.",
  },
  {
    prenom: 'Meriem',
    ville: 'Oran',
    formation: 'Développement Web',
    initiales: 'MK',
    texte: "La qualité des cours est impressionnante. J'ai appris HTML, CSS et JavaScript en suivant les sessions depuis chez moi à Oran. Les replays m'ont sauvée plusieurs fois quand je voulais revoir un point.",
  },
  {
    prenom: 'Sofiane',
    ville: 'Constantine',
    formation: 'Algorithmique 1',
    initiales: 'SH',
    texte: "Le cours d'algo est exactement ce dont j'avais besoin pour complémenter ma licence. Le programme est sérieux, structuré, et le suivi personnalisé fait vraiment la différence par rapport à l'université.",
  },
  {
    prenom: 'Lina',
    ville: 'Tizi Ouzou',
    formation: 'Cybersécurité',
    initiales: 'LA',
    texte: "Je ne pensais pas trouver une formation de ce niveau en Algérie, et encore moins en ligne. Les TP pratiques sur des machines virtuelles sont top. Je recommande à tous ceux qui veulent se lancer dans la sécurité.",
  },
]
