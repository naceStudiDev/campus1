'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  accent?: 'blue' | 'red' | 'green'
  center?: boolean
}

const accentColors = {
  blue: '#2563EB',
  red: '#DC2626',
  green: '#059669',
}

export default function SectionTitle({ title, subtitle, accent = 'blue', center = true }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {/* Eyebrow rule */}
      <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
        <div className="h-px w-10 rounded-full opacity-60" style={{ backgroundColor: accentColors[accent] }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColors[accent] }} />
        <div className="h-px w-10 rounded-full opacity-60" style={{ backgroundColor: accentColors[accent] }} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
