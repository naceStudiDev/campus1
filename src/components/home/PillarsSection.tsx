'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

const pillars = [
  {
    icon: '👂',
    title: 'Écoute de l\'étudiant',
    description: 'Chaque étudiant est unique. Nos professeurs adaptent leur pédagogie à votre rythme et vos besoins spécifiques.',
    color: '#2563EB',
  },
  {
    icon: '⏰',
    title: 'Disponibilité des professeurs',
    description: 'Nos enseignants sont disponibles avant, pendant et après les cours pour répondre à toutes vos questions.',
    color: '#DC2626',
  },
  {
    icon: '🚀',
    title: 'Pédagogie innovante',
    description: 'Des cours pratiques, des projets réels et des méthodes modernes pour un apprentissage efficace et engageant.',
    color: '#059669',
  },
  {
    icon: '📈',
    title: 'Suivi personnalisé',
    description: 'Un tableau de bord de progression, des feedbacks réguliers et un accompagnement individuel tout au long de votre parcours.',
    color: '#D97706',
  },
]

export default function PillarsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nos piliers"
          subtitle="Ce qui fait la différence chez Digital Campus Dz"
          accent="green"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-[#F4F3EF] hover:bg-white rounded-2xl p-6 border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ backgroundColor: `${pillar.color}12` }}
              >
                {pillar.icon}
              </div>

              {/* Accent dot */}
              <div
                className="w-1.5 h-1.5 rounded-full mb-3"
                style={{ backgroundColor: pillar.color }}
              />

              <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">{pillar.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: pillar.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
