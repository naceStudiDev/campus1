'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import MeshGradientBg from '@/components/ui/MeshGradientBg'
import { formations } from '@/data/formations'
import { resources } from '@/data/ressources'
import { getFormationIcon } from '@/lib/formation-icons'
import {
  User, Mail, Phone, BookOpen, ChevronDown, ExternalLink,
  MessageCircle, Library, HeadphonesIcon, CheckCircle2,
  Clock, ClipboardList, FileText, Film, PenLine, Map,
  CalendarDays, Bell, LogOut, LucideIcon,
} from 'lucide-react'

// ─── Mock user — remplacé par Supabase Auth plus tard ───────────────────────
const MOCK_USER = {
  prenom: 'Amine',
  nom: 'Benali',
  email: 'amine.benali@gmail.com',
  telephone: '0550 123 456',
  formation: 'python',
  statut: 'contacté' as const,
  message: "Bonjour, j'aimerais en savoir plus sur le programme.",
  created_at: '2026-05-09',
}

const STATUT_STEPS = [
  { key: 'nouveau',  label: 'Inscription reçue',  desc: 'Ta demande a bien été enregistrée.' },
  { key: 'contacté', label: 'Contacté',            desc: 'L\'équipe t\'a contacté ou va le faire.' },
  { key: 'inscrit',  label: 'Confirmé',            desc: 'Ton inscription est officiellement validée.' },
  { key: 'en-cours', label: 'En cours',            desc: 'Ta formation a démarré.' },
]

const STATUT_ORDER: Record<string, number> = {
  nouveau: 0, contacté: 1, inscrit: 2, 'en-cours': 3,
}

const TYPE_ICONS: Record<string, LucideIcon> = {
  PDF: FileText, Vidéo: Film, Exercices: PenLine, Fiche: ClipboardList, Guide: Map,
}

const TYPE_GRADIENTS: Record<string, string> = {
  PDF: 'from-red-500 to-rose-400',
  Vidéo: 'from-blue-500 to-cyan-400',
  Exercices: 'from-emerald-500 to-teal-400',
  Fiche: 'from-amber-500 to-yellow-400',
  Guide: 'from-violet-500 to-purple-400',
}

// Mappe l'ID formation → catégorie ressource
const FORMATION_TO_CATEGORY: Record<string, string> = {
  python: 'Python',
  'dev-web': 'Dev Web',
  'algo-1': 'Dev Web',
  'algo-2': 'Dev Web',
  sql: 'Dev Web',
  cybersecurite: 'Cybersécurité',
  'c-language': 'Langage C',
  'architecture-machine': 'Architecture',
  'marketing-digital': 'Marketing',
}

export default function MonEspacePage() {
  const [programOpen, setProgramOpen] = useState(false)
  const user = MOCK_USER

  const formation = formations.find(f => f.id === user.formation)
  const { Icon, gradient, glow } = getFormationIcon(user.formation)
  const currentStep = STATUT_ORDER[user.statut] ?? 0

  const initiales = `${user.prenom[0]}${user.nom[0]}`.toUpperCase()

  // Ressources filtrées par catégorie de la formation
  const category = FORMATION_TO_CATEGORY[user.formation] ?? 'Python'
  const recommandees = resources.filter(r => r.category === category).slice(0, 3)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <MeshGradientBg color1="#7C3AED" color2="#006233" className="pt-28 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-2xl font-bold text-white shadow-glow-violet">
                {initiales}
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-algerie rounded-full border-2 border-dark-bg" />
            </div>

            {/* Infos */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-1">Mon espace</p>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-100 mb-2">
                {user.prenom} <span className="text-slate-400">{user.nom}</span>
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" />{user.email}</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />{user.telephone}</span>
                <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" />Inscrit le {new Date(user.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
            </div>

            {/* Actions top-right */}
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-white/[0.15] transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:text-red-400 hover:border-red-500/20 text-sm font-medium transition-colors">
                <LogOut className="w-4 h-4" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </MeshGradientBg>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="bg-dark-bg min-h-screen py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* ── Statut timeline ─────────────────────────────────────────── */}
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-5">Statut de mon inscription</p>
            <div className="bg-dark-card border border-white/[0.07] rounded-2xl p-6">
              <div className="relative flex items-start justify-between gap-2">
                {/* Ligne de progression */}
                <div className="absolute top-4 left-0 right-0 h-0.5 bg-white/[0.06]" />
                <div
                  className="absolute top-4 left-0 h-0.5 bg-gradient-to-r from-primary to-algerie transition-all duration-700"
                  style={{ width: `${(currentStep / (STATUT_STEPS.length - 1)) * 100}%` }}
                />

                {STATUT_STEPS.map((step, i) => {
                  const done = i < currentStep
                  const active = i === currentStep
                  return (
                    <div key={step.key} className="relative flex flex-col items-center flex-1 z-10">
                      {/* Dot */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        done   ? 'bg-algerie border-algerie shadow-glow-algerie' :
                        active ? 'bg-primary border-primary shadow-glow-violet' :
                                 'bg-dark-bg border-white/[0.12]'
                      }`}>
                        {done ? (
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        ) : (
                          <span className={`text-xs font-bold ${active ? 'text-white' : 'text-slate-600'}`}>{i + 1}</span>
                        )}
                      </div>
                      {/* Label */}
                      <p className={`mt-3 text-xs font-semibold text-center leading-tight ${active ? 'text-slate-100' : done ? 'text-algerie-light' : 'text-slate-600'}`}>
                        {step.label}
                      </p>
                      {active && (
                        <p className="mt-1 text-[10px] text-slate-500 text-center hidden sm:block max-w-[100px]">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ── Formation + Infos ────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Formation card */}
            <div className="lg:col-span-3 bg-dark-card border border-white/[0.07] rounded-2xl overflow-hidden">
              <div className={`h-0.5 w-full bg-gradient-to-r ${gradient}`} />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">Ma formation</p>

                <div className="flex items-start gap-4 mb-5">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 rounded-xl blur-lg opacity-50" style={{ background: glow }} />
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-slate-100">{formation?.title}</h2>
                    <p className="text-sm text-slate-400 mt-0.5 leading-relaxed">{formation?.description}</p>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {formation?.topics.map(t => (
                    <span key={t} className="text-xs bg-white/[0.04] border border-white/[0.06] text-slate-400 px-2.5 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-5 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{formation?.duration}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    {formation?.level}
                  </span>
                </div>

                {/* Programme accordéon */}
                <button
                  onClick={() => setProgramOpen(!programOpen)}
                  className="flex items-center justify-between w-full text-sm font-semibold py-2.5 px-3 rounded-xl border transition-colors"
                  style={{ backgroundColor: `${formation?.color}10`, color: formation?.color, borderColor: `${formation?.color}20` }}
                >
                  <span className="flex items-center gap-2">
                    <ClipboardList className="w-4 h-4" />
                    Programme ({formation?.program.length} modules)
                  </span>
                  <motion.span animate={{ rotate: programOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {programOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                        {formation?.program.map((mod, i) => (
                          <div key={i} className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.05]">
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <p className="text-xs font-bold text-slate-200 leading-snug">{mod.title}</p>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                                style={{ backgroundColor: `${formation.color}15`, color: formation.color }}>
                                {mod.duration}
                              </span>
                            </div>
                            <ul className="space-y-0.5">
                              {mod.topics.map((t, j) => (
                                <li key={j} className="flex items-start gap-1.5 text-xs text-slate-500">
                                  <span className="mt-0.5 flex-shrink-0" style={{ color: formation.color }}>•</span>
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Informations personnelles */}
            <div className="lg:col-span-2 space-y-4">
              {/* Profil */}
              <div className="bg-dark-card border border-white/[0.07] rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">Mes informations</p>
                <ul className="space-y-3">
                  {[
                    { Icon: User,     value: `${user.prenom} ${user.nom}` },
                    { Icon: Mail,     value: user.email },
                    { Icon: Phone,    value: user.telephone },
                    { Icon: BookOpen, value: formation?.title ?? user.formation },
                  ].map(({ Icon: I, value }) => (
                    <li key={value} className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <I className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                      <span className="text-slate-300 truncate">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Message */}
              {user.message && (
                <div className="bg-dark-card border border-white/[0.07] rounded-2xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3">Mon message</p>
                  <p className="text-sm text-slate-400 leading-relaxed italic">"{user.message}"</p>
                </div>
              )}

              {/* Prochaine étape */}
              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-light mb-3">Prochaine étape</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  L'équipe D.C.D te contactera prochainement pour confirmer ton inscription et t'envoyer les détails de la session.
                </p>
              </div>
            </div>
          </div>

          {/* ── Ressources recommandées ─────────────────────────────────── */}
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-5">
              Ressources recommandées — {category}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recommandees.map((res) => {
                const TypeIcon = TYPE_ICONS[res.type] ?? FileText
                const grad = TYPE_GRADIENTS[res.type] ?? 'from-slate-500 to-slate-400'
                return (
                  <motion.div
                    key={res.title}
                    whileHover={{ y: -2 }}
                    className="bg-dark-card border border-white/[0.07] rounded-2xl p-4 flex flex-col hover:border-algerie/25 hover:shadow-glow-algerie transition-all duration-300"
                  >
                    <div className="h-0.5 w-full rounded-full mb-4" style={{ backgroundColor: res.typeColor }} />
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center flex-shrink-0`}>
                        <TypeIcon className="w-4 h-4 text-white" strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                        style={{
                          backgroundColor: res.tag === 'Gratuit' ? 'rgba(0,98,51,0.15)' : 'rgba(124,58,237,0.15)',
                          color: res.tag === 'Gratuit' ? '#00A854' : '#A78BFA',
                          borderColor: res.tag === 'Gratuit' ? 'rgba(0,98,51,0.3)' : 'rgba(124,58,237,0.3)',
                        }}>
                        {res.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-100 leading-snug mb-1">{res.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-3">{res.description}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
                      <span className="text-[10px] text-slate-600 bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded">{res.level}</span>
                      {res.url ? (
                        <a href={res.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-bold text-algerie-light hover:text-algerie transition-colors">
                          Accéder <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-700">Bientôt</span>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
            <div className="mt-3 text-right">
              <Link href="/bibliotheque" className="text-sm text-algerie-light hover:text-algerie transition-colors underline underline-offset-4">
                Voir toutes les ressources
              </Link>
            </div>
          </section>

          {/* ── Actions rapides ─────────────────────────────────────────── */}
          <section className="pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-5">Actions rapides</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  Icon: MessageCircle,
                  title: 'Forum communautaire',
                  desc: 'Pose tes questions, aide les autres.',
                  href: '/forum',
                  color: 'primary',
                  border: 'border-primary/15',
                  bg: 'bg-primary/5',
                  iconBg: 'bg-primary/10',
                  iconColor: 'text-primary-light',
                },
                {
                  Icon: Library,
                  title: 'Bibliothèque',
                  desc: 'Accède à toutes les ressources gratuites.',
                  href: '/bibliotheque',
                  color: 'algerie',
                  border: 'border-algerie/15',
                  bg: 'bg-algerie/5',
                  iconBg: 'bg-algerie/10',
                  iconColor: 'text-algerie-light',
                },
                {
                  Icon: HeadphonesIcon,
                  title: 'Contacter l\'équipe',
                  desc: 'Une question sur ta formation ?',
                  href: '/contact',
                  color: 'accent',
                  border: 'border-accent/15',
                  bg: 'bg-accent/5',
                  iconBg: 'bg-accent/10',
                  iconColor: 'text-accent-light',
                },
              ].map(({ Icon: I, title, desc, href, border, bg, iconBg, iconColor }) => (
                <Link key={href} href={href}
                  className={`flex items-start gap-4 ${bg} border ${border} rounded-2xl p-5 hover:brightness-110 transition-all duration-200 group`}>
                  <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <I className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100 text-sm group-hover:text-white transition-colors">{title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
