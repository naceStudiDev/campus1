'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

const pillars = [
  {
    icon: '👂',
    title: 'Écoute de l\'étudiant',
    description: 'Chaque étudiant est unique. Nos professeurs adaptent leur pédagogie à votre rythme et vos besoins spécifiques.',
    color: '#4285F4',
    gradient: 'from-[#4285F4]/10 to-[#4285F4]/5',
  },
  {
    icon: '⏰',
    title: 'Disponibilité des professeurs',
    description: 'Nos enseignants sont disponibles avant, pendant et après les cours pour répondre à toutes vos questions.',
    color: '#EA4335',
    gradient: 'from-[#EA4335]/10 to-[#EA4335]/5',
  },
  {
    icon: '🚀',
    title: 'Pédagogie innovante',
    description: 'Des cours pratiques, des projets réels et des méthodes modernes pour un apprentissage efficace et engageant.',
    color: '#34A853',
    gradient: 'from-[#34A853]/10 to-[#34A853]/5',
  },
  {
    icon: '📈',
    title: 'Suivi personnalisé',
    description: 'Un tableau de bord de progression, des feedbacks réguliers et un accompagnement individuel tout au long de votre parcours.',
    color: '#FBBC05',
    gradient: 'from-[#FBBC05]/15 to-[#FBBC05]/5',
  },
]

export default function PillarsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nos piliers"
          subtitle="Ce qui fait la différence chez Digital Campus Dz"
          accent="green"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: `${pillar.color}18` }}
                >
                  {pillar.icon}
                </div>

                {/* Accent line */}
                <div className="flex gap-1 mb-4">
                  <div className="h-1 w-8 rounded-full" style={{ backgroundColor: pillar.color }} />
                  <div className="h-1 w-3 rounded-full opacity-40" style={{ backgroundColor: pillar.color }} />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
