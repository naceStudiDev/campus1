'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Formation } from '@/data/formations'
import Link from 'next/link'

export default function CourseCard({ formation, index }: { formation: Formation; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Header coloré */}
      <div
        className="h-28 flex items-center justify-center text-5xl relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${formation.color}20 0%, ${formation.color}08 100%)` }}
      >
        <span className="relative z-10">{formation.icon}</span>
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-30"
          style={{ backgroundColor: formation.color }}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Titre + niveau */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-snug">{formation.title}</h3>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-2"
            style={{ backgroundColor: `${formation.color}15`, color: formation.color }}
          >
            {formation.level}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4">{formation.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {formation.topics.map((topic) => (
            <span key={topic} className="text-xs bg-gray-50 text-gray-500 px-2.5 py-1 rounded-lg border border-gray-100">
              {topic}
            </span>
          ))}
        </div>

        {/* Voir le programme */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full text-sm font-semibold py-2.5 px-3 rounded-xl transition-colors mb-3"
          style={{ backgroundColor: `${formation.color}10`, color: formation.color }}
        >
          <span>📋 Programme détaillé ({formation.program.length} modules)</span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            ▾
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mb-4"
            >
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {formation.program.map((mod, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-xs font-bold text-gray-800 leading-snug">{mod.title}</p>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                        style={{ backgroundColor: `${formation.color}15`, color: formation.color }}
                      >
                        {mod.duration}
                      </span>
                    </div>
                    <ul className="space-y-0.5">
                      {mod.topics.map((t, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-xs text-gray-500">
                          <span className="mt-0.5 flex-shrink-0" style={{ color: formation.color }}>•</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
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
