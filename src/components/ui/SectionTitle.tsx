'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  accent?: 'blue' | 'red' | 'green'
  center?: boolean
}

export default function SectionTitle({ title, subtitle, center = true }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${center ? 'text-center' : ''}`}
    >
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-100 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
