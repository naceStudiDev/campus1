'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '9+', label: 'Formations disponibles', color: '#2563EB' },
  { value: '100%', label: 'Cours en ligne', color: '#DC2626' },
  { value: 'Live', label: 'Sessions via Google Meet', color: '#059669' },
  { value: '∞', label: 'Accès aux replays', color: '#D97706' },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-bold tracking-tight" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-slate-400 mt-2 text-xs uppercase tracking-widest font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
