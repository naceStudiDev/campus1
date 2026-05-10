'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '9+', label: 'Formations disponibles', accent: 'text-primary-light' },
  { value: '100%', label: 'Cours en ligne', accent: 'text-accent' },
  { value: 'Live', label: 'Sessions Google Meet', accent: 'text-emerald-400' },
  { value: '∞', label: 'Accès aux replays', accent: 'text-fuchsia-400' },
]

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-20 bg-dark-muted border-y border-white/[0.04] overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="flex flex-col sm:flex-row items-center justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="flex-1 text-center px-10 py-6"
            >
              <p className={`font-heading text-5xl font-bold tracking-tight ${stat.accent}`}>
                {stat.value}
              </p>
              <p className="text-slate-500 mt-2 text-xs uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
