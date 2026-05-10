'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { resources } from '@/data/ressources'

const categories = ['Tout', 'Python', 'Dev Web', 'Django', 'Data Science', 'Cybersécurité', 'Langage C', 'Architecture', 'Marketing', 'Outils']

const typeIcons: Record<string, string> = {
  'PDF': '📄', 'Vidéo': '🎬', 'Exercices': '✏️', 'Fiche': '📋', 'Guide': '🗺️',
}

export default function BibliothequePage() {
  const [activeCategory, setActiveCategory] = useState('Tout')
  const [activeType, setActiveType] = useState('Tout')

  const filtered = resources.filter((r) => {
    const matchCat = activeCategory === 'Tout' || r.category === activeCategory
    const matchType = activeType === 'Tout' || r.type === activeType
    return matchCat && matchType
  })

  const types = ['Tout', 'PDF', 'Vidéo', 'Exercices', 'Fiche', 'Guide']

  const stats = [
    { value: `${resources.length}`, label: 'Ressources', color: '#4285F4' },
    { value: `${resources.filter(r => r.tag === 'Gratuit').length}`, label: 'Gratuites', color: '#34A853' },
    { value: `${resources.filter(r => r.tag === 'D.C.D Exclusif').length}`, label: 'Exclusives D.C.D', color: '#EA4335' },
    { value: `${categories.length - 1}`, label: 'Catégories', color: '#FBBC05' },
  ]

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

      {/* Stats */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black" style={{ color: s.color }}>{s.value}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#4285F4] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Types */}
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                  activeType === t
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {t !== 'Tout' && typeIcons[t]} {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 mb-6">
            {filtered.length} ressource{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}
          </p>
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((res, i) => (
                <motion.div
                  key={`${res.title}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col overflow-hidden"
                >
                  <div className="h-1" style={{ backgroundColor: res.typeColor }} />
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{res.icon}</span>
                      <div className="flex flex-col items-end gap-1.5">
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${res.tagColor}15`, color: res.tagColor }}
                        >
                          {res.tag}
                        </span>
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${res.typeColor}15`, color: res.typeColor }}
                        >
                          {res.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{res.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed flex-1">{res.description}</p>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="bg-gray-50 px-2 py-0.5 rounded-md">{res.level}</span>
                        <span>{res.meta}</span>
                      </div>
                      {res.url ? (
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-[#4285F4] hover:underline"
                        >
                          Accéder →
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-gray-300 cursor-default">
                          Bientôt
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Tu veux contribuer ?</h2>
          <p className="text-gray-500 mb-6">
            D.C.D est fondée par des étudiants pour des étudiants. Propose des ressources, des exercices ou des tutoriels à partager avec la communauté.
          </p>
          <Button href="/contact" color="green">Proposer une ressource</Button>
        </div>
      </section>
    </>
  )
}
