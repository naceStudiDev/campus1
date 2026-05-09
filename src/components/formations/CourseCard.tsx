'use client'

import { motion } from 'framer-motion'
import { Formation } from '@/data/formations'
import Link from 'next/link'

export default function CourseCard({ formation, index }: { formation: Formation; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Colored header band */}
      <div
        className="h-32 flex items-center justify-center text-5xl relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${formation.color}20 0%, ${formation.color}08 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(135deg, ${formation.color}30 0%, ${formation.color}10 100%)` }}
        />
        <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
          {formation.icon}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">{formation.title}</h3>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-2"
            style={{ backgroundColor: `${formation.color}15`, color: formation.color }}
          >
            {formation.level}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{formation.description}</p>

        {/* Topics */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {formation.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="text-xs bg-gray-50 text-gray-500 px-2.5 py-1 rounded-lg border border-gray-100"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            <span className="text-sm">🕐</span>
            <span className="text-sm font-semibold text-gray-600">{formation.duration}</span>
          </div>
          <Link
            href="/inscription"
            className="text-sm font-bold px-4 py-2 rounded-xl text-white transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-95"
            style={{ backgroundColor: formation.color }}
          >
            S&apos;inscrire
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
