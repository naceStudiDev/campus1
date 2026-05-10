'use client'

import { motion } from 'framer-motion'
import { temoignages, type Temoignage } from '@/data/temoignages'

const AVATAR_COLORS = [
  { bg: 'bg-primary/20', border: 'border-primary/40', text: 'text-primary-light', badge: 'bg-primary/10 text-primary-light' },
  { bg: 'bg-amber-500/20', border: 'border-amber-500/40', text: 'text-amber-300', badge: 'bg-amber-500/10 text-amber-300' },
  { bg: 'bg-emerald-500/20', border: 'border-emerald-500/40', text: 'text-emerald-300', badge: 'bg-emerald-500/10 text-emerald-300' },
  { bg: 'bg-fuchsia-500/20', border: 'border-fuchsia-500/40', text: 'text-fuchsia-300', badge: 'bg-fuchsia-500/10 text-fuchsia-300' },
]

function TemoignageCard({ item, index }: { item: Temoignage; index: number }) {
  const colors = AVATAR_COLORS[index % AVATAR_COLORS.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
      className="relative bg-dark-card rounded-2xl p-7 border border-white/[0.07] flex flex-col gap-5 overflow-hidden group transition-shadow duration-300"
    >
      {/* Large faint quote — Fraunces for character */}
      <span
        className="absolute top-4 right-5 font-heading text-8xl font-bold leading-none select-none pointer-events-none text-white/[0.04]"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-primary/15 pointer-events-none" />

      {/* Testimonial text */}
      <p className="text-sm text-slate-300 leading-relaxed italic relative z-10">
        &ldquo;{item.texte}&rdquo;
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0 border ${colors.bg} ${colors.border} ${colors.text}`}>
          {item.initiales}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-slate-200 text-sm leading-tight">{item.prenom}</p>
          <p className="text-xs text-slate-500 mt-0.5">{item.ville}</p>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-lg whitespace-nowrap flex-shrink-0 ${colors.badge}`}>
          {item.formation}
        </span>
      </div>
    </motion.div>
  )
}

export default function Temoignages() {
  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">Témoignages</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-100 leading-tight">
            Ce que disent{' '}
            <span className="italic gradient-text-violet">nos étudiants</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">Ils ont fait le premier pas — et ils ne le regrettent pas.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {temoignages.map((item, i) => (
            <TemoignageCard key={item.prenom} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
