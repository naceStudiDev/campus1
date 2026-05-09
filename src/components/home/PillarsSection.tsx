'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

const pillars = [
  {
    icon: '👂',
    title: 'Écoute de l\'étudiant',
    description: 'Chaque étudiant est unique. Nos professeurs adaptent leur pédagogie à votre rythme et vos besoins spécifiques.',
    color: '#4285F4',
    bg: 'bg-[#4285F4]/5',
  },
  {
    icon: '⏰',
    title: 'Disponibilité des professeurs',
    description: 'Nos enseignants sont disponibles avant, pendant et après les cours pour répondre à toutes vos questions.',
    color: '#EA4335',
    bg: 'bg-[#EA4335]/5',
  },
  {
    icon: '🚀',
    title: 'Pédagogie innovante',
    description: 'Des cours pratiques, des projets réels et des méthodes modernes pour un apprentissage efficace et engageant.',
    color: '#34A853',
    bg: 'bg-[#34A853]/5',
  },
  {
    icon: '📈',
    title: 'Suivi personnalisé',
    description: 'Un tableau de bord de progression, des feedbacks réguliers et un accompagnement individuel tout au long de votre parcours.',
    color: '#FBBC05',
    bg: 'bg-[#FBBC05]/10',
  },
]

export default function PillarsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nos piliers"
          subtitle="Ce qui fait la différence chez Digital Campus Dz"
          accent="blue"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 ${pillar.bg} rounded-xl flex items-center justify-center text-2xl mb-5`}>
                {pillar.icon}
              </div>
              <div className="w-8 h-1 rounded-full mb-4" style={{ backgroundColor: pillar.color }} />
              <h3 className="text-lg font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
