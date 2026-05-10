'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Headphones, Clock, Lightbulb, LineChart } from 'lucide-react'

const pillars = [
  {
    tag: 'Pilier 01',
    icon: Headphones,
    title: 'Écoute de l\'étudiant',
    description: 'Chaque cours est conçu à partir des retours directs des étudiants. Tu n\'es pas seul(e) — ton feedback façonne le contenu.',
    span: 'md:col-span-2',
    accent: 'from-violet-500/10 to-transparent',
    iconColor: 'text-violet-400',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  },
  {
    tag: 'Pilier 02',
    icon: Clock,
    title: 'Disponibilité',
    description: 'Les profs sont disponibles bien au-delà des heures de cours. Pas de question sans réponse.',
    span: 'md:col-span-1',
    accent: 'from-amber-500/10 to-transparent',
    iconColor: 'text-amber-400',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  },
  {
    tag: 'Pilier 03',
    icon: Lightbulb,
    title: 'Pédagogie innovante',
    description: 'Méthode active, projets réels, darija + français. On apprend en faisant, pas en mémorisant.',
    span: 'md:col-span-1',
    accent: 'from-emerald-500/10 to-transparent',
    iconColor: 'text-emerald-400',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  },
  {
    tag: 'Pilier 04',
    icon: LineChart,
    title: 'Suivi personnalisé',
    description: 'Ton parcours est unique. On te suit individuellement, on voit ta progression et on t\'aide à dépasser tes blocages.',
    span: 'md:col-span-2',
    accent: 'from-fuchsia-500/10 to-transparent',
    iconColor: 'text-fuchsia-400',
    tagColor: 'text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20',
  },
]

export default function BentoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-dark-bg py-24 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">Notre approche</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-100 leading-tight max-w-xl">
            Ce qui fait la{' '}
            <span className="italic gradient-text-violet">différence</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.tag}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(124,58,237,0.12)' }}
                className={`${pillar.span} relative group rounded-2xl border border-white/[0.07] bg-dark-card overflow-hidden cursor-default transition-shadow duration-300`}
              >
                {/* Gradient accent */}
                <div className={`absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t ${pillar.accent} pointer-events-none`} />

                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-primary/20 pointer-events-none" />

                <div className="relative p-7">
                  {/* Tag */}
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] border ${pillar.tagColor} mb-5`}>
                    {pillar.tag}
                  </span>

                  {/* Icon */}
                  <div className={`mb-5 ${pillar.iconColor}`}>
                    <Icon className="w-7 h-7 animate-bento-float" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold text-slate-100 mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
