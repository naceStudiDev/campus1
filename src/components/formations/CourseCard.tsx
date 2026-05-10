'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Formation } from '@/data/formations'
import { getFormationIcon } from '@/lib/formation-icons'
import Link from 'next/link'
import { Clock, ChevronDown, ClipboardList } from 'lucide-react'

export default function CourseCard({ formation, index }: { formation: Formation; index: number }) {
  const [open, setOpen] = useState(false)
  const { Icon, gradient, glow } = getFormationIcon(formation.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-dark-card rounded-2xl border border-white/[0.07] overflow-hidden flex flex-col hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Gradient top line */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${gradient}`} />

      {/* Icon header */}
      <div
        className="h-28 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${formation.color}12 0%, transparent 100%)` }}
      >
        <div className="relative">
          <div
            className="absolute inset-0 rounded-2xl blur-xl"
            style={{ background: glow, opacity: 0.5 }}
          />
          <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title + level */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-slate-100 leading-snug font-heading">{formation.title}</h3>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-2 border"
            style={{
              backgroundColor: `${formation.color}15`,
              color: formation.color,
              borderColor: `${formation.color}30`,
            }}
          >
            {formation.level}
          </span>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">{formation.description}</p>

        {/* Topics */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {formation.topics.map((topic) => (
            <span
              key={topic}
              className="text-xs bg-white/[0.04] text-slate-400 px-2.5 py-1 rounded-lg border border-white/[0.06]"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Programme toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full text-sm font-semibold py-2.5 px-3 rounded-xl transition-colors mb-3 border"
          style={{
            backgroundColor: `${formation.color}10`,
            color: formation.color,
            borderColor: `${formation.color}20`,
          }}
        >
          <span className="flex items-center gap-2">
            <ClipboardList className="w-4 h-4" />
            Programme ({formation.program.length} modules)
          </span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-4 h-4" />
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
                  <div key={i} className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.06]">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-xs font-bold text-slate-200 leading-snug">{mod.title}</p>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                        style={{ backgroundColor: `${formation.color}15`, color: formation.color }}
                      >
                        {mod.duration}
                      </span>
                    </div>
                    <ul className="space-y-0.5">
                      {mod.topics.map((t, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-xs text-slate-500">
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
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-sm font-semibold">{formation.duration}</span>
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
