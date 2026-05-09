'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

const categories = ['Tout', 'Python', 'Dev Web', 'Django', 'Data Science', 'Marketing', 'Outils']

const resources = [
  {
    type: 'PDF',
    typeColor: '#EA4335',
    icon: '📄',
    title: 'Bases de Python — Guide complet débutant',
    description: 'Variables, fonctions, boucles, POO — tout ce qu\'il faut pour bien démarrer avec Python.',
    category: 'Python',
    level: 'Débutant',
    pages: '48 pages',
    tag: 'Gratuit',
    tagColor: '#34A853',
  },
  {
    type: 'Vidéo',
    typeColor: '#4285F4',
    icon: '🎬',
    title: 'HTML & CSS en 2h — Crash Course',
    description: 'Créez votre première page web de A à Z, avec mise en page responsive.',
    category: 'Dev Web',
    level: 'Débutant',
    pages: '2h 10min',
    tag: 'Gratuit',
    tagColor: '#34A853',
  },
  {
    type: 'Exercices',
    typeColor: '#34A853',
    icon: '✏️',
    title: '30 exercices Python corrigés',
    description: 'Des exercices progressifs avec corrections détaillées pour pratiquer Python au quotidien.',
    category: 'Python',
    level: 'Intermédiaire',
    pages: '30 exercices',
    tag: 'Gratuit',
    tagColor: '#34A853',
  },
  {
    type: 'PDF',
    typeColor: '#EA4335',
    icon: '📄',
    title: 'JavaScript ES6+ — Les nouveautés essentielles',
    description: 'Arrow functions, destructuring, async/await, modules — maîtrisez le JS moderne.',
    category: 'Dev Web',
    level: 'Intermédiaire',
    pages: '62 pages',
    tag: 'Gratuit',
    tagColor: '#34A853',
  },
  {
    type: 'Fiche',
    typeColor: '#FBBC05',
    icon: '📋',
    title: 'Cheatsheet Git & GitHub',
    description: 'Toutes les commandes Git essentielles sur une seule page. À garder sous la main.',
    category: 'Outils',
    level: 'Débutant',
    pages: '2 pages',
    tag: 'Gratuit',
    tagColor: '#34A853',
  },
  {
    type: 'Vidéo',
    typeColor: '#4285F4',
    icon: '🎬',
    title: 'Django de zéro — Créer une app complète',
    description: 'Modèles, vues, templates, authentification — construisez une vraie application web.',
    category: 'Django',
    level: 'Intermédiaire',
    pages: '3h 45min',
    tag: 'D.C.D Exclusif',
    tagColor: '#4285F4',
  },
  {
    type: 'PDF',
    typeColor: '#EA4335',
    icon: '📄',
    title: 'Introduction à la Data Science',
    description: 'Pandas, NumPy, Matplotlib — analysez vos premières données avec Python.',
    category: 'Data Science',
    level: 'Débutant',
    pages: '55 pages',
    tag: 'Gratuit',
    tagColor: '#34A853',
  },
  {
    type: 'Guide',
    typeColor: '#34A853',
    icon: '🗺️',
    title: 'Roadmap — Devenir développeur Web en 6 mois',
    description: 'Un plan détaillé semaine par semaine pour passer de débutant à dev web junior.',
    category: 'Outils',
    level: 'Tous niveaux',
    pages: '1 page',
    tag: 'D.C.D Exclusif',
    tagColor: '#4285F4',
  },
  {
    type: 'PDF',
    typeColor: '#EA4335',
    icon: '📄',
    title: 'Marketing Digital — Les fondamentaux',
    description: 'SEO, réseaux sociaux, e-mail marketing, publicité en ligne — le guide complet.',
    category: 'Marketing',
    level: 'Débutant',
    pages: '40 pages',
    tag: 'Gratuit',
    tagColor: '#34A853',
  },
]

export default function BibliothequePage() {
  const [activeCategory, setActiveCategory] = useState('Tout')

  const filtered = activeCategory === 'Tout'
    ? resources
    : resources.filter((r) => r.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#34A853]/10 rounded-full text-[#34A853] text-sm font-semibold mb-6">
            📚 Bibliothèque
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Ressources gratuites
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            PDF, vidéos, exercices, fiches mémo — tout ce qu&apos;il te faut pour apprendre et progresser, gratuitement.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#4285F4] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 mb-6 text-center">
            {filtered.length} ressource{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((res, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col overflow-hidden"
              >
                <div className="h-1.5" style={{ backgroundColor: res.typeColor }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{res.icon}</span>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: `${res.tagColor}15`, color: res.tagColor }}
                      >
                        {res.tag}
                      </span>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: `${res.typeColor}15`, color: res.typeColor }}
                      >
                        {res.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 leading-snug">{res.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{res.description}</p>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="bg-gray-50 px-2 py-1 rounded-lg">{res.level}</span>
                      <span>{res.pages}</span>
                    </div>
                    <button className="text-xs font-semibold text-[#4285F4] hover:underline">
                      Accéder →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Tu veux contribuer ?</h2>
          <p className="text-gray-500 mb-6">
            D.C.D est fondée par des étudiants pour des étudiants. Tu peux proposer des ressources, des exercices ou des tutoriels à partager avec la communauté.
          </p>
          <Button href="/contact" color="green">
            Proposer une ressource
          </Button>
        </div>
      </section>
    </>
  )
}
