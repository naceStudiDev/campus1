'use client'

import { motion } from 'framer-motion'
import { Formation } from '@/data/formations'
import Button from '@/components/ui/Button'

export default function CourseCard({ formation, index }: { formation: Formation; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
    >
      {/* Top color bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: formation.color }} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl">{formation.icon}</span>
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: `${formation.color}18`, color: formation.color }}
          >
            {formation.level}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{formation.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{formation.description}</p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-5">
          {formation.topics.map((topic) => (
            <span
              key={topic}
              className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-lg border border-gray-100"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-500">
            <span className="text-sm">🕐</span>
            <span className="text-sm font-medium">{formation.duration}</span>
          </div>
          <Button href="/inscription" color="blue" className="text-xs px-4 py-2">
            S&apos;inscrire
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
