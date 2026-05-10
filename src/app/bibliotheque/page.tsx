'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MeshGradientBg from '@/components/ui/MeshGradientBg'
import { resources } from '@/data/ressources'
import { BookOpen, FileText, Film, PenLine, ClipboardList, Map, Users, ExternalLink, LucideIcon } from 'lucide-react'
import Link from 'next/link'

const categories = ['Tout', 'Python', 'Dev Web', 'Django', 'Data Science', 'Cybersécurité', 'Langage C', 'Architecture', 'Marketing', 'Outils']
const types = ['Tout', 'PDF', 'Vidéo', 'Exercices', 'Fiche', 'Guide']

const TYPE_ICONS: Record<string, LucideIcon> = {
  'PDF':       FileText,
  'Vidéo':     Film,
  'Exercices': PenLine,
  'Fiche':     ClipboardList,
  'Guide':     Map,
}

const TYPE_GRADIENTS: Record<string, string> = {
  'PDF':       'from-red-500 to-rose-400',
  'Vidéo':     'from-blue-500 to-cyan-400',
  'Exercices': 'from-emerald-500 to-teal-400',
  'Fiche':     'from-amber-500 to-yellow-400',
  'Guide':     'from-violet-500 to-purple-400',
}

export default function BibliothequePage() {
  const [activeCategory, setActiveCategory] = useState('Tout')
  const [activeType, setActiveType] = useState('Tout')

  const filtered = resources.filter((r) => {
    const matchCat = activeCategory === 'Tout' || r.category === activeCategory
    const matchType = activeType === 'Tout' || r.type === activeType
    return matchCat && matchType
  })

  const stats = [
    { value: `${resources.length}`, label: 'Ressources', color: 'text-primary-light' },
    { value: `${resources.filter(r => r.tag === 'Gratuit').length}`, label: 'Gratuites', color: 'text-algerie-light' },
    { value: `${resources.filter(r => r.tag === 'D.C.D Exclusif').length}`, label: 'D.C.D Exclusif', color: 'text-accent' },
    { value: `${categories.length - 1}`, label: 'Catégories', color: 'text-emerald-400' },
  ]

  return (
    <>
      {/* Hero avec Mesh Gradient Shader */}
      <MeshGradientBg color1="#006233" color2="#7C3AED" className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-algerie/15 border border-algerie/30 rounded-full text-algerie-light text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            Bibliothèque
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-slate-100 mb-4 leading-tight">
            Ressources{' '}
            <span className="gradient-text-algerie italic">gratuites</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            PDF, vidéos, exercices, fiches mémo — tout ce qu&apos;il te faut pour apprendre et progresser.
          </p>

          {/* Stats inline */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div className="text-center">
                  <p className={`font-heading text-4xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">{s.label}</p>
                </div>
                {i < stats.length - 1 && <div className="h-10 w-px bg-white/[0.08] hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>
      </MeshGradientBg>

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-30 bg-dark-bg/85 backdrop-blur-xl border-b border-white/[0.05] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {/* Catégories */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-algerie text-white shadow-glow-algerie'
                    : 'bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] hover:text-slate-200 border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Types */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {types.map((t) => {
              const Icon = t !== 'Tout' ? TYPE_ICONS[t] : null
              return (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 transition-all duration-200 flex items-center gap-1.5 ${
                    activeType === t
                      ? 'bg-white/[0.12] text-slate-100 border border-white/[0.15]'
                      : 'text-slate-500 border border-white/[0.07] hover:bg-white/[0.05] hover:text-slate-300'
                  }`}
                >
                  {Icon && <Icon className="w-3 h-3" />}
                  {t}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <section className="py-10 bg-dark-bg min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-600 mb-6 font-medium">
            {filtered.length} ressource{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}
          </p>

          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((res, i) => {
                const TypeIcon = TYPE_ICONS[res.type] ?? FileText
                const gradient = TYPE_GRADIENTS[res.type] ?? 'from-slate-500 to-slate-400'
                const isGratuit = res.tag === 'Gratuit'

                return (
                  <motion.div
                    key={res.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: Math.min(i * 0.04, 0.3) }}
                    className="group bg-dark-card rounded-2xl border border-white/[0.07] overflow-hidden flex flex-col hover:border-algerie/30 hover:-translate-y-1 hover:shadow-glow-algerie transition-all duration-300"
                  >
                    {/* Top color bar */}
                    <div className="h-0.5 w-full" style={{ backgroundColor: res.typeColor }} />

                    <div className="p-5 flex flex-col flex-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="relative">
                          <div
                            className="absolute inset-0 rounded-xl blur-md opacity-50"
                            style={{ backgroundColor: res.typeColor }}
                          />
                          <div className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                            <TypeIcon className="w-5 h-5 text-white" strokeWidth={1.5} />
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                            style={{
                              backgroundColor: isGratuit ? 'rgba(0,98,51,0.15)' : 'rgba(124,58,237,0.15)',
                              color: isGratuit ? '#00A854' : '#A78BFA',
                              borderColor: isGratuit ? 'rgba(0,98,51,0.3)' : 'rgba(124,58,237,0.3)',
                            }}
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

                      <h3 className="font-heading font-bold text-slate-100 text-sm mb-2 leading-snug">{res.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed flex-1">{res.description}</p>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.06]">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-md text-slate-500">{res.level}</span>
                          <span>{res.meta}</span>
                        </div>
                        {res.url ? (
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-bold text-algerie-light hover:text-algerie transition-colors group-hover:underline"
                          >
                            Accéder
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-xs font-medium text-slate-700 cursor-default">Bientôt</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Aucune ressource pour cette sélection.</p>
              <button
                onClick={() => { setActiveCategory('Tout'); setActiveType('Tout') }}
                className="mt-4 text-sm text-algerie-light hover:text-algerie transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Contribute */}
      <section className="py-16 bg-dark-muted">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-dark-card border border-algerie/20 rounded-3xl p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-algerie/15 border border-algerie/30 rounded-2xl mb-6">
              <Users className="w-7 h-7 text-algerie-light" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-slate-100 mb-3">Tu veux contribuer ?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              D.C.D est fondée par des étudiants pour des étudiants. Propose des ressources, des exercices ou des tutoriels à partager avec la communauté.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-algerie hover:bg-algerie-dark transition-all duration-200 shadow-glow-algerie hover:shadow-glow-algerie-lg"
            >
              Proposer une ressource
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
