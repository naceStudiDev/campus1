'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  accent?: 'blue' | 'red' | 'green'
  center?: boolean
}

const accentColors = {
  blue: '#4285F4',
  red: '#EA4335',
  green: '#34A853',
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
      <div className="flex items-center gap-3 mb-3 justify-center">
        <div
          className="h-1 w-10 rounded-full"
          style={{ backgroundColor: accentColors[accent] }}
        />
        <div
          className="h-1 w-4 rounded-full opacity-50"
          style={{ backgroundColor: accentColors[accent] }}
        />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}
