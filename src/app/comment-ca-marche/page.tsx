'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import type { Metadata } from 'next'

const steps = [
  {
    number: '01',
    icon: '📝',
    title: 'Inscris-toi',
    description: 'Remplis le formulaire d\'inscription avec tes informations et choisis ta formation. C\'est rapide et gratuit.',
    color: '#4285F4',
  },
  {
    number: '02',
    icon: '📩',
    title: 'Reçois ton lien Google Meet',
    description: 'Après validation de ton inscription, tu reçois par email le lien de ta première session Google Meet.',
    color: '#EA4335',
  },
  {
    number: '03',
    icon: '📹',
    title: 'Assiste aux cours en direct',
    description: 'Connecte-toi aux sessions en direct depuis n\'importe où. Pose tes questions, interagis avec le prof et tes camarades.',
    color: '#34A853',
  },
  {
    number: '04',
    icon: '📈',
    title: 'Progresse à ton rythme',
    description: 'Accède aux replays des cours, fais des exercices pratiques et bénéficie d\'un suivi personnalisé.',
    color: '#FBBC05',
  },
]

const features = [
  { icon: '🎯', title: 'Sessions ciblées', desc: 'Chaque cours est structuré avec des objectifs clairs et des exercices pratiques.' },
  { icon: '💬', title: 'Questions en direct', desc: 'Pose tes questions pendant le cours, le professeur te répond en temps réel.' },
  { icon: '🔴', title: 'Cours enregistrés', desc: 'Toutes les sessions sont enregistrées, accessibles à tout moment depuis ton espace.' },
  { icon: '🤝', title: 'Communauté active', desc: 'Rejoins un groupe d\'étudiants algériens motivés sur Telegram.' },
  { icon: '📊', title: 'Suivi de progression', desc: 'Ton professeur suit ta progression et t\'aide à surmonter les difficultés.' },
  { icon: '🏆', title: 'Certificat de fin', desc: 'À la fin de ta formation, tu reçois un certificat D.C.D de réussite.' },
]

export default function CommentCaMarchePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4285F4]/10 rounded-full text-[#4285F4] text-sm font-semibold mb-6">
            ⚙️ Comment ça marche
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Simple, efficace, en ligne
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Pas besoin de te déplacer. Apprends depuis chez toi, avec un vrai professeur, en temps réel.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Les étapes" subtitle="Du zéro au héros en 4 étapes" accent="blue" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Meet explainer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Pourquoi Google Meet ?" accent="red" center={false} />
              <div className="space-y-4">
                {[
                  { point: 'Fiable et simple à utiliser, même avec une connexion moyenne.' },
                  { point: 'Partage d\'écran pour voir le code du prof en temps réel.' },
                  { point: 'Enregistrement automatique des sessions.' },
                  { point: 'Disponible sur mobile, tablette et PC.' },
                  { point: 'Salle de réunion sécurisée, uniquement pour les inscrits.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 bg-[#34A853] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600">{item.point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 text-white">
              <div className="text-5xl mb-4 text-center">📹</div>
              <div className="text-center mb-6">
                <p className="text-2xl font-black mb-2">
                  <span style={{ color: '#4285F4' }}>G</span>
                  <span style={{ color: '#EA4335' }}>o</span>
                  <span style={{ color: '#FBBC05' }}>o</span>
                  <span style={{ color: '#4285F4' }}>g</span>
                  <span style={{ color: '#34A853' }}>l</span>
                  <span style={{ color: '#EA4335' }}>e</span> Meet
                </p>
                <p className="text-gray-400 text-sm">Notre salle de classe virtuelle</p>
              </div>
              <div className="space-y-3">
                {['Partage d\'écran', 'Chat en direct', 'Enregistrement', 'Sous-groupes'].map((f) => (
                  <div key={f} className="flex items-center gap-3 bg-gray-800 rounded-xl px-4 py-3">
                    <div className="w-2 h-2 bg-[#34A853] rounded-full" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Ce que tu obtiens" accent="green" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <span className="text-3xl mb-4 block">{feat.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#4285F4]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Convaincu ? Lance-toi !</h2>
          <p className="text-blue-100 mb-8">Inscription rapide, premier cours gratuit.</p>
          <Button href="/inscription" variant="secondary" className="text-gray-900 text-base px-8 py-4">
            S&apos;inscrire maintenant
          </Button>
        </div>
      </section>
    </>
  )
}
