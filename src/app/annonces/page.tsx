'use client'

import { useState } from 'react'
import { annonces, AnnonceType } from '@/data/annonces'
import { Megaphone, Calendar, ExternalLink, Zap, GraduationCap, Video, Tag, Star, ArrowRight, Bell } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

const typeConfig: Record<AnnonceType, { label: string; color: string; icon: React.ReactNode }> = {
  formation: {
    label: 'Formation',
    color: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    icon: <GraduationCap className="w-3.5 h-3.5" />,
  },
  webinaire: {
    label: 'Webinaire',
    color: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    icon: <Video className="w-3.5 h-3.5" />,
  },
  offre: {
    label: 'Offre',
    color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    icon: <Tag className="w-3.5 h-3.5" />,
  },
  evenement: {
    label: 'Événement',
    color: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    icon: <Star className="w-3.5 h-3.5" />,
  },
}

const filters: { label: string; value: 'all' | AnnonceType }[] = [
  { label: 'Tout', value: 'all' },
  { label: 'Formations', value: 'formation' },
  { label: 'Webinaires', value: 'webinaire' },
  { label: 'Offres', value: 'offre' },
  { label: 'Événements', value: 'evenement' },
]

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-DZ', { day: 'numeric', month: 'long', year: 'numeric' })
}

function isUpcoming(dateStr: string) {
  return new Date(dateStr) >= new Date()
}

export default function AnnoncesPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | AnnonceType>('all')

  const sorted = [...annonces].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  const filtered = activeFilter === 'all'
    ? sorted
    : sorted.filter((a) => a.type === activeFilter)

  const upcoming = sorted.filter((a) => isUpcoming(a.date)).slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-semibold mb-6">
            <Megaphone className="w-4 h-4" />
            Annonces & Événements
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-slate-100 mb-4 leading-tight">
            Restez{' '}
            <span className="italic gradient-text-violet">informé</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Nouvelles formations, webinaires gratuits, offres spéciales — toutes les actualités de Digital Campus Dz en un seul endroit.
          </p>
        </div>
      </section>

      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main content */}
            <div className="flex-1 min-w-0">

              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {filters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                      activeFilter === f.value
                        ? 'bg-primary/20 border-primary/40 text-primary-light'
                        : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:text-slate-100 hover:bg-white/[0.06]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Cards */}
              {filtered.length === 0 ? (
                <div className="text-center py-20 text-slate-500">
                  Aucune annonce dans cette catégorie.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filtered.map((annonce) => {
                    const tc = typeConfig[annonce.type]
                    const past = !isUpcoming(annonce.date)
                    return (
                      <div
                        key={annonce.id}
                        className={`relative flex flex-col bg-white/[0.03] border rounded-2xl p-6 transition-all duration-200 hover:bg-white/[0.05] hover:border-white/[0.12] ${
                          past ? 'border-white/[0.04] opacity-60' : 'border-white/[0.08]'
                        }`}
                      >
                        {/* Urgent glow */}
                        {annonce.isUrgent && !past && (
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/8 rounded-full blur-2xl pointer-events-none" />
                        )}

                        {/* Top row */}
                        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${tc.color}`}>
                            {tc.icon}
                            {tc.label}
                          </span>
                          <div className="flex items-center gap-2">
                            {annonce.badge && (
                              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${
                                annonce.isUrgent
                                  ? 'bg-primary/15 border-primary/30 text-primary-light'
                                  : 'bg-white/[0.06] border-white/[0.10] text-slate-300'
                              }`}>
                                {annonce.isUrgent && <Zap className="w-3 h-3" />}
                                {annonce.badge}
                              </span>
                            )}
                            {past && (
                              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.06] text-slate-500">
                                Terminé
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <h2 className="font-heading text-lg font-bold text-slate-100 mb-2 leading-snug">
                          {annonce.title}
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                          {annonce.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-white/[0.06]">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(annonce.date)}
                          </div>
                          {!past && (
                            <a
                              href={annonce.ctaUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-glow-violet group"
                            >
                              {annonce.ctaLabel}
                              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Sidebar — Prochains événements */}
            <aside className="lg:w-72 xl:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                      <Calendar className="w-4 h-4 text-primary-light" />
                    </div>
                    <h3 className="font-heading font-bold text-slate-100 text-base">À venir</h3>
                  </div>

                  {upcoming.length === 0 ? (
                    <p className="text-slate-500 text-sm">Aucun événement à venir.</p>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {upcoming.map((a) => {
                        const tc = typeConfig[a.type]
                        const d = new Date(a.date)
                        return (
                          <div key={a.id} className="flex items-start gap-3">
                            {/* Date pill */}
                            <div className="flex-shrink-0 w-10 text-center">
                              <div className="text-xs font-bold text-primary-light leading-none">
                                {d.toLocaleDateString('fr-DZ', { month: 'short' }).toUpperCase()}
                              </div>
                              <div className="text-xl font-bold text-slate-100 leading-tight">
                                {d.getDate()}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-slate-200 truncate leading-snug">
                                {a.title}
                              </p>
                              <span className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${tc.color}`}>
                                {tc.icon}
                                {tc.label}
                              </span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* CTA abonnement */}
                <div className="mt-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6">
                  <div className="w-8 h-8 bg-primary/15 rounded-xl flex items-center justify-center border border-primary/25 mb-4">
                    <Bell className="w-4 h-4 text-primary-light" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-100 text-sm mb-2">
                    Ne rien manquer
                  </h3>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                    Inscrivez-vous pour recevoir les prochaines annonces en avant-première.
                  </p>
                  <a
                    href="https://forms.google.com" // ← remplacer par ton Google Form d'abonnement
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 w-full justify-center px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-glow-violet group"
                  >
                    S&apos;abonner aux annonces
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* CTA bas */}
      <section className="py-16 bg-dark-card border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mb-6 border border-primary/20">
            <Megaphone className="w-6 h-6 text-primary-light" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-100 mb-4">
            Prêt à rejoindre la prochaine session ?
          </h2>
          <p className="text-slate-400 mb-8">
            Inscris-toi maintenant et commence ton parcours avec Digital Campus Dz.
          </p>
          <Link
            href="/inscription"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-glow-violet hover:shadow-glow-violet-lg group"
          >
            S&apos;inscrire gratuitement
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
