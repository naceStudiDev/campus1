'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '6+', label: 'Formations disponibles', color: '#4285F4' },
  { value: '100%', label: 'Cours en ligne', color: '#EA4335' },
  { value: 'Live', label: 'Sessions via Google Meet', color: '#34A853' },
  { value: '∞', label: 'Accès aux replays', color: '#FBBC05' },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-900">
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
              <p className="text-5xl font-black" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
