'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { temoignages, type Temoignage } from '@/data/temoignages'

const AVATAR_COLORS = ['#2563EB', '#DC2626', '#059669', '#D97706']

function TemoignageCard({ item, index }: { item: Temoignage; index: number }) {
  const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-5"
    >
      {/* Large faint quote */}
      <span
        className="absolute top-4 right-5 text-7xl font-bold leading-none select-none pointer-events-none"
        style={{ color: `${avatarColor}10` }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Testimonial text first — more impactful */}
      <p className="text-sm text-gray-600 leading-relaxed italic relative z-10">
        &ldquo;{item.texte}&rdquo;
      </p>

      {/* Footer: avatar + name + badge */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {item.initiales}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm leading-tight">{item.prenom}</p>
          <p className="text-xs text-gray-400 mt-0.5">{item.ville}</p>
        </div>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-lg whitespace-nowrap flex-shrink-0"
          style={{ backgroundColor: `${avatarColor}10`, color: avatarColor }}
        >
          {item.formation}
        </span>
      </div>
    </motion.div>
  )
}

export default function Temoignages() {
  return (
    <section className="py-24 bg-[#F4F3EF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Ce que disent nos étudiants"
          subtitle="Ils ont fait le premier pas — et ils ne le regrettent pas."
          accent="blue"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {temoignages.map((item, i) => (
            <TemoignageCard key={item.prenom} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
