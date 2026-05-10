'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import Link from 'next/link'
import { ArrowRight, ClipboardList, Mail, Video, TrendingUp, Target, MessageCircle, PlayCircle, Users, BarChart3, Trophy, Settings2, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    Icon: ClipboardList,
    title: "Inscris-toi",
    description: "Remplis le formulaire d'inscription avec tes informations et choisis ta formation. C'est rapide et gratuit.",
    color: '#4285F4',
  },
  {
    number: '02',
    Icon: Mail,
    title: 'Reçois ton lien Google Meet',
    description: "Après validation de ton inscription, tu reçois par email le lien de ta première session Google Meet.",
    color: '#EA4335',
  },
  {
    number: '03',
    Icon: Video,
    title: 'Assiste aux cours en direct',
    description: "Connecte-toi aux sessions en direct depuis n'importe où. Pose tes questions, interagis avec le prof et tes camarades.",
    color: '#34A853',
  },
  {
    number: '04',
    Icon: TrendingUp,
    title: 'Progresse à ton rythme',
    description: "Accède aux replays des cours, fais des exercices pratiques et bénéficie d'un suivi personnalisé.",
    color: '#FBBC05',
  },
]

const features = [
  { Icon: Target, title: 'Sessions ciblées', desc: 'Chaque cours est structuré avec des objectifs clairs et des exercices pratiques.' },
  { Icon: MessageCircle, title: 'Questions en direct', desc: 'Pose tes questions pendant le cours, le professeur te répond en temps réel.' },
  { Icon: PlayCircle, title: 'Cours enregistrés', desc: 'Toutes les sessions sont enregistrées, accessibles à tout moment depuis ton espace.' },
  { Icon: Users, title: 'Communauté active', desc: "Rejoins un groupe d'étudiants algériens motivés sur Telegram." },
  { Icon: BarChart3, title: 'Suivi de progression', desc: 'Ton professeur suit ta progression et t\'aide à surmonter les difficultés.' },
  { Icon: Trophy, title: 'Certificat de fin', desc: 'À la fin de ta formation, tu reçois un certificat D.C.D de réussite.' },
]

const googleMeetPoints = [
  'Fiable et simple à utiliser, même avec une connexion moyenne.',
  "Partage d'écran pour voir le code du prof en temps réel.",
  'Enregistrement automatique des sessions.',
  'Disponible sur mobile, tablette et PC.',
  'Salle de réunion sécurisée, uniquement pour les inscrits.',
]

const googleMeetFeatures = ["Partage d'écran", 'Chat en direct', 'Enregistrement', 'Sous-groupes']

export default function CommentCaMarcheContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-semibold mb-6">
            <Settings2 className="w-4 h-4" />
            Comment ça marche
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Simple, efficace, en ligne
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Pas besoin de te déplacer. Apprends depuis chez toi, avec un vrai professeur, en temps réel.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Les étapes" subtitle="Du zéro au héros en 4 étapes" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 items-start bg-dark-card rounded-2xl p-6 border border-white/[0.07] hover:border-primary/20 transition-colors duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.Icon className="w-5 h-5 flex-shrink-0" style={{ color: step.color }} />
                    <h3 className="text-xl font-bold text-slate-100 font-heading">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Meet */}
      <section className="py-20 bg-dark-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Pourquoi Google Meet ?" center={false} />
              <div className="space-y-4">
                {googleMeetPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 bg-[#34A853] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-slate-400">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Google Meet card */}
            <div className="bg-dark-card rounded-2xl border border-white/[0.07] p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center">
                  <Video className="w-7 h-7 text-primary-light" />
                </div>
              </div>
              <div className="text-center mb-6">
                <p className="text-2xl font-black font-heading mb-2">
                  <span style={{ color: '#4285F4' }}>G</span>
                  <span style={{ color: '#EA4335' }}>o</span>
                  <span style={{ color: '#FBBC05' }}>o</span>
                  <span style={{ color: '#4285F4' }}>g</span>
                  <span style={{ color: '#34A853' }}>l</span>
                  <span style={{ color: '#EA4335' }}>e</span>
                  {' '}Meet
                </p>
                <p className="text-slate-400 text-sm">Notre salle de classe virtuelle</p>
              </div>
              <div className="space-y-2">
                {googleMeetFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3">
                    <div className="w-2 h-2 bg-[#34A853] rounded-full flex-shrink-0" />
                    <span className="text-sm text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Ce que tu obtiens" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-card rounded-2xl p-6 border border-white/[0.07] hover:border-primary/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <feat.Icon className="w-5 h-5 text-primary-light" />
                </div>
                <h3 className="font-bold text-slate-100 mb-2 font-heading">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">Convaincu ? Lance-toi !</h2>
          <p className="text-primary-light/80 mb-8">Inscription rapide, premier cours gratuit.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-primary bg-white hover:bg-slate-100 transition-all duration-200 group"
            >
              S&apos;inscrire maintenant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="/#faq"
              className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors"
            >
              Encore des questions ? Voir la FAQ
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
