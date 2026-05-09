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
    id: 'flutter',
    title: 'Développement Mobile',
    description: 'Créez des applications mobiles cross-platform pour iOS et Android avec Flutter et Dart.',
    duration: '3 mois',
    level: 'Intermédiaire',
    color: '#EA4335',
    icon: '📱',
    topics: ['Dart basics', 'Widgets Flutter', 'Navigation', 'State management', 'Publication'],
  },
]
