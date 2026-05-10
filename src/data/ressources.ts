export type Resource = {
  type: string
  typeColor: string
  icon: string
  title: string
  description: string
  category: string
  level: string
  meta: string
  tag: string
  tagColor: string
  url?: string
}

export const resources: Resource[] = [
  // Python
  {
    type: 'PDF', typeColor: '#EA4335', icon: '📄',
    title: 'Bases de Python — Guide complet débutant',
    description: 'Variables, fonctions, boucles, POO — tout ce qu\'il faut pour bien démarrer avec Python.',
    category: 'Python', level: 'Débutant', meta: '48 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Exercices', typeColor: '#34A853', icon: '✏️',
    title: '30 exercices Python corrigés',
    description: 'Des exercices progressifs avec corrections détaillées pour pratiquer Python au quotidien.',
    category: 'Python', level: 'Intermédiaire', meta: '30 exercices', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Fiche', typeColor: '#FBBC05', icon: '📋',
    title: 'Cheatsheet Python — Syntaxe essentielle',
    description: 'Toutes les commandes Python les plus utiles condensées sur 2 pages. Parfait à garder ouvert pendant le code.',
    category: 'Python', level: 'Débutant', meta: '2 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Vidéo', typeColor: '#4285F4', icon: '🎬',
    title: 'Python OOP — La programmation orientée objet expliquée',
    description: 'Classes, héritage, encapsulation et polymorphisme avec des exemples concrets tirés de projets réels.',
    category: 'Python', level: 'Intermédiaire', meta: '1h 45min', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  // Dev Web
  {
    type: 'Vidéo', typeColor: '#4285F4', icon: '🎬',
    title: 'HTML & CSS en 2h — Crash Course',
    description: 'Créez votre première page web de A à Z, avec mise en page responsive et bonnes pratiques.',
    category: 'Dev Web', level: 'Débutant', meta: '2h 10min', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'PDF', typeColor: '#EA4335', icon: '📄',
    title: 'JavaScript ES6+ — Les nouveautés essentielles',
    description: 'Arrow functions, destructuring, async/await, modules — maîtrisez le JS moderne.',
    category: 'Dev Web', level: 'Intermédiaire', meta: '62 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Fiche', typeColor: '#FBBC05', icon: '📋',
    title: 'Cheatsheet CSS Flexbox & Grid',
    description: 'Toutes les propriétés Flexbox et Grid illustrées avec des exemples visuels. Le guide de référence indispensable.',
    category: 'Dev Web', level: 'Débutant', meta: '3 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Guide', typeColor: '#34A853', icon: '🗺️',
    title: 'Roadmap Développeur Web — 6 mois pour devenir junior',
    description: 'Un plan détaillé semaine par semaine pour passer de zéro à développeur web junior employable.',
    category: 'Dev Web', level: 'Tous niveaux', meta: '1 page', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  // Django
  {
    type: 'Vidéo', typeColor: '#4285F4', icon: '🎬',
    title: 'Django de zéro — Créer une app complète',
    description: 'Modèles, vues, templates, authentification — construisez une vraie application web avec Django.',
    category: 'Django', level: 'Intermédiaire', meta: '3h 45min', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  {
    type: 'PDF', typeColor: '#EA4335', icon: '📄',
    title: 'Django REST Framework — Créer une API',
    description: 'Serializers, ViewSets, authentification par token — construisez une API REST robuste et documentée.',
    category: 'Django', level: 'Avancé', meta: '55 pages', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  // Data Science
  {
    type: 'PDF', typeColor: '#EA4335', icon: '📄',
    title: 'Introduction à la Data Science avec Python',
    description: 'Pandas, NumPy, Matplotlib — analysez vos premières données et créez des visualisations percutantes.',
    category: 'Data Science', level: 'Débutant', meta: '55 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Fiche', typeColor: '#FBBC05', icon: '📋',
    title: 'Cheatsheet Pandas — Les 50 opérations essentielles',
    description: 'Filtrage, groupby, merge, pivot — toutes les opérations Pandas dont tu as besoin au quotidien.',
    category: 'Data Science', level: 'Intermédiaire', meta: '4 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Guide', typeColor: '#34A853', icon: '🗺️',
    title: 'Machine Learning — Les algorithmes expliqués simplement',
    description: 'Régression, classification, clustering — comprendre les algos ML sans les maths complexes.',
    category: 'Data Science', level: 'Intermédiaire', meta: '30 pages', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  // Cybersécurité
  {
    type: 'PDF', typeColor: '#EA4335', icon: '📄',
    title: 'Introduction à la Cybersécurité',
    description: 'Les menaces courantes, types d\'attaques, bonnes pratiques et premières défenses — guide complet pour débuter.',
    category: 'Cybersécurité', level: 'Débutant', meta: '60 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Fiche', typeColor: '#FBBC05', icon: '📋',
    title: 'OWASP Top 10 — Les failles web à connaître',
    description: 'Les 10 vulnérabilités les plus critiques des applications web : injection SQL, XSS, CSRF et comment les éviter.',
    category: 'Cybersécurité', level: 'Intermédiaire', meta: '5 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Guide', typeColor: '#34A853', icon: '🗺️',
    title: 'Débuter en CTF — Capture The Flag pour les nuls',
    description: 'Comprendre les CTF, les catégories (web, crypto, forensics, pwn), les outils indispensables et les premières plateformes.',
    category: 'Cybersécurité', level: 'Débutant', meta: '20 pages', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  {
    type: 'Vidéo', typeColor: '#4285F4', icon: '🎬',
    title: 'Ethical Hacking — Introduction au pentest web',
    description: 'Reconnaissance, scanning, exploitation de failles basiques — une introduction pratique au test d\'intrusion.',
    category: 'Cybersécurité', level: 'Intermédiaire', meta: '2h 30min', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  // Langage C
  {
    type: 'PDF', typeColor: '#EA4335', icon: '📄',
    title: 'Le Langage C — Guide universitaire complet',
    description: 'Variables, pointeurs, tableaux, structures, fichiers — tout le programme universitaire L1/L2 couvert.',
    category: 'Langage C', level: 'Débutant', meta: '80 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Exercices', typeColor: '#34A853', icon: '✏️',
    title: '50 exercices C corrigés — Du plus simple au complexe',
    description: 'Exercices classés par thème : boucles, fonctions, tableaux, chaînes, pointeurs, listes chaînées.',
    category: 'Langage C', level: 'Débutant', meta: '50 exercices', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  {
    type: 'Fiche', typeColor: '#FBBC05', icon: '📋',
    title: 'Cheatsheet Pointeurs en C — Démystifiés',
    description: 'Pointeurs simples, doubles, pointeurs de fonctions, allocation dynamique — tout ce qui fait peur, enfin expliqué.',
    category: 'Langage C', level: 'Intermédiaire', meta: '3 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Guide', typeColor: '#34A853', icon: '🗺️',
    title: 'Structures de données en C — Listes, piles, files, arbres',
    description: 'Implémentation complète des structures de données classiques en C avec explications et schémas.',
    category: 'Langage C', level: 'Avancé', meta: '45 pages', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  // Architecture Machine
  {
    type: 'PDF', typeColor: '#EA4335', icon: '📄',
    title: 'Architecture des ordinateurs — Cours complet',
    description: 'Représentation binaire, circuits logiques, architecture CPU (ALU, registres, pipeline), hiérarchie mémoire.',
    category: 'Architecture', level: 'Débutant', meta: '70 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Fiche', typeColor: '#FBBC05', icon: '📋',
    title: 'Conversion binaire, octal, hexadécimal — Mémo',
    description: 'Toutes les tables de conversion et les méthodes rapides pour passer d\'une base à l\'autre en un coup d\'œil.',
    category: 'Architecture', level: 'Débutant', meta: '2 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Vidéo', typeColor: '#4285F4', icon: '🎬',
    title: 'Assembleur x86 — Introduction pratique',
    description: 'Les registres, les instructions de base, le passage de paramètres et le lien avec le langage C.',
    category: 'Architecture', level: 'Intermédiaire', meta: '1h 50min', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  // Marketing Digital
  {
    type: 'PDF', typeColor: '#EA4335', icon: '📄',
    title: 'Marketing Digital — Les fondamentaux',
    description: 'SEO, réseaux sociaux, e-mail marketing, publicité en ligne — le guide complet pour débuter.',
    category: 'Marketing', level: 'Débutant', meta: '50 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Guide', typeColor: '#34A853', icon: '🗺️',
    title: 'SEO en 2024 — Référencer son site sur Google',
    description: 'Mots-clés, backlinks, Core Web Vitals, SEO technique — une stratégie complète pour apparaître en première page.',
    category: 'Marketing', level: 'Intermédiaire', meta: '40 pages', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  {
    type: 'Fiche', typeColor: '#FBBC05', icon: '📋',
    title: 'Calendrier éditorial — Template prêt à l\'emploi',
    description: 'Template de planification de contenu pour les réseaux sociaux sur 30 jours, avec exemples pour chaque plateforme.',
    category: 'Marketing', level: 'Débutant', meta: '1 page', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Vidéo', typeColor: '#4285F4', icon: '🎬',
    title: 'Google Ads — Lancer sa première campagne',
    description: 'Créer une campagne search, choisir ses mots-clés, définir son budget et analyser les résultats.',
    category: 'Marketing', level: 'Débutant', meta: '1h 20min', tag: 'D.C.D Exclusif', tagColor: '#4285F4',
  },
  // Outils
  {
    type: 'Fiche', typeColor: '#FBBC05', icon: '📋',
    title: 'Cheatsheet Git & GitHub',
    description: 'Toutes les commandes Git essentielles sur une seule page. À garder sous la main en permanence.',
    category: 'Outils', level: 'Débutant', meta: '2 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Guide', typeColor: '#34A853', icon: '🗺️',
    title: 'VS Code — Les extensions incontournables',
    description: 'Sélection des meilleures extensions VS Code par domaine : Python, web, cybersécurité, productivité.',
    category: 'Outils', level: 'Tous niveaux', meta: '10 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
  {
    type: 'Fiche', typeColor: '#FBBC05', icon: '📋',
    title: 'Linux — Commandes terminal essentielles',
    description: 'Navigation, gestion de fichiers, droits, processus, réseau — les 50 commandes Linux à connaître absolument.',
    category: 'Outils', level: 'Débutant', meta: '3 pages', tag: 'Gratuit', tagColor: '#34A853',
  },
]
