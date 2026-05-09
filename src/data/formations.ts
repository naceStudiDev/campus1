export interface Formation {
  id: string
  title: string
  description: string
  duration: string
  level: 'Débutant' | 'Intermédiaire' | 'Avancé'
  color: string
  icon: string
  topics: string[]
}

export const formations: Formation[] = [
  {
    id: 'python',
    title: 'Python',
    description: 'Apprenez Python de zéro jusqu\'à la programmation orientée objet, les scripts automatisés et l\'introduction à la data science.',
    duration: '3 mois',
    level: 'Débutant',
    color: '#4285F4',
    icon: '🐍',
    topics: ['Bases du langage', 'Fonctions & modules', 'POO', 'Fichiers & exceptions', 'Intro Data Science'],
  },
  {
    id: 'dev-web',
    title: 'Développement Web',
    description: 'Maîtrisez HTML, CSS, JavaScript et les frameworks modernes pour créer des sites web professionnels et responsives.',
    duration: '4 mois',
    level: 'Débutant',
    color: '#EA4335',
    icon: '🌐',
    topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Déploiement'],
  },
  {
    id: 'django',
    title: 'Django & Backend',
    description: 'Créez des applications web robustes avec Django, gérez des bases de données et construisez des APIs REST.',
    duration: '3 mois',
    level: 'Intermédiaire',
    color: '#34A853',
    icon: '⚙️',
    topics: ['Django MVC', 'Modèles & ORM', 'API REST', 'Authentification', 'Déploiement'],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analysez et visualisez des données avec Python, Pandas, NumPy et créez vos premiers modèles de machine learning.',
    duration: '4 mois',
    level: 'Intermédiaire',
    color: '#FBBC05',
    icon: '📊',
    topics: ['Pandas & NumPy', 'Visualisation', 'Statistiques', 'Machine Learning', 'Projets pratiques'],
  },
  {
    id: 'sql',
    title: 'Bases de données SQL',
    description: 'Maîtrisez SQL pour interroger, gérer et optimiser vos bases de données relationnelles.',
    duration: '2 mois',
    level: 'Débutant',
    color: '#4285F4',
    icon: '🗄️',
    topics: ['SQL de base', 'Jointures', 'Fonctions avancées', 'PostgreSQL', 'Optimisation'],
  },
  {
    id: 'cybersecurite',
    title: 'Cybersécurité',
    description: 'Comprenez les menaces informatiques, apprenez à sécuriser des systèmes, des réseaux et des applications web.',
    duration: '4 mois',
    level: 'Intermédiaire',
    color: '#EA4335',
    icon: '🛡️',
    topics: ['Réseaux & protocoles', 'Ethical hacking', 'Sécurité web (OWASP)', 'CTF & labs', 'Cryptographie'],
  },
  {
    id: 'c-language',
    title: 'Langage C — Universitaire',
    description: 'Maîtrisez le C pour vos cours d\'université : algorithmique, gestion mémoire, pointeurs et structures de données.',
    duration: '3 mois',
    level: 'Débutant',
    color: '#34A853',
    icon: '💻',
    topics: ['Syntaxe C', 'Pointeurs & mémoire', 'Tableaux & chaînes', 'Structures', 'Algorithmique'],
  },
  {
    id: 'architecture-machine',
    title: 'Architecture Machine',
    description: 'Comprenez le fonctionnement interne d\'un ordinateur : CPU, mémoire, assembleur et systèmes d\'exploitation.',
    duration: '2 mois',
    level: 'Débutant',
    color: '#FBBC05',
    icon: '🔧',
    topics: ['Logique binaire', 'Architecture CPU', 'Assembleur x86', 'Mémoire & cache', 'Systèmes d\'exploitation'],
  },
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    description: 'Maîtrisez les outils du marketing en ligne : SEO, réseaux sociaux, publicité digitale et stratégie de contenu.',
    duration: '3 mois',
    level: 'Débutant',
    color: '#4285F4',
    icon: '📣',
    topics: ['SEO & référencement', 'Réseaux sociaux', 'Google Ads', 'Email marketing', 'Analytics'],
  },
]
