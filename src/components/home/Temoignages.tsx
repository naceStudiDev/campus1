'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { temoignages, type Temoignage } from '@/data/temoignages'

const AVATAR_COLORS = ['#4285F4', '#EA4335', '#34A853', '#FBBC05']

function TemoignageCard({ item, index }: { item: Temoignage; index: number }) {
  const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4"
    >
      {/* Quote mark */}
      <span
        className="absolute top-4 right-5 text-6xl font-black leading-none select-none pointer-events-none"
        style={{ color: `${avatarColor}18` }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Header: avatar + name + city */}
      <div className="flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {item.initiales}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm leading-tight">{item.prenom}</p>
          <p className="text-xs text-gray-400">{item.ville}</p>
        </div>

        {/* Formation badge */}
        <span
          className="ml-auto text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
          style={{ backgroundColor: `${avatarColor}15`, color: avatarColor }}
        >
          {item.formation}
        </span>
      </div>

      {/* Testimonial text */}
      <p className="text-sm text-gray-600 leading-relaxed italic">&ldquo;{item.texte}&rdquo;</p>
    </motion.div>
  )
}

export default function Temoignages() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Ce que disent nos étudiants"
          subtitle="Ils ont fait le premier pas — et ils ne le regrettent pas."
          accent="blue"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {temoignages.map((item, i) => (
            <TemoignageCard key={item.prenom} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
