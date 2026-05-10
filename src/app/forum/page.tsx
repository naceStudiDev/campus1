'use client'

import { motion } from 'framer-motion'
import MeshGradientBg from '@/components/ui/MeshGradientBg'
import Link from 'next/link'
import { Users, Code2, Globe, Server, BarChart3, TrendingUp, MessageCircle, ChevronRight, LucideIcon, ArrowRight } from 'lucide-react'

const CAT_ICONS: Record<string, LucideIcon> = {
  'Python':              Code2,
  'Développement Web':   Globe,
  'Django & Backend':    Server,
  'Data Science':        BarChart3,
  'Digital & Marketing': TrendingUp,
  'Entraide générale':   Users,
}

const categories = [
  {
    title: 'Python',
    description: 'Questions sur la syntaxe, les erreurs, les projets Python.',
    topics: 24, posts: 138, color: '#4285F4', last: 'il y a 2h',
  },
  {
    title: 'Développement Web',
    description: 'HTML, CSS, JavaScript, React — toutes vos questions ici.',
    topics: 41, posts: 267, color: '#EA4335', last: 'il y a 30 min',
  },
  {
    title: 'Django & Backend',
    description: 'API, modèles, authentification et déploiement.',
    topics: 18, posts: 94, color: '#34A853', last: 'il y a 5h',
  },
  {
    title: 'Data Science',
    description: 'Pandas, NumPy, Machine Learning et visualisation.',
    topics: 15, posts: 73, color: '#FBBC05', last: 'il y a 1j',
  },
  {
    title: 'Digital & Marketing',
    description: 'SEO, réseaux sociaux, stratégie digitale, e-commerce.',
    topics: 22, posts: 119, color: '#A78BFA', last: 'il y a 3h',
  },
  {
    title: 'Entraide générale',
    description: "Orientation, conseils carrière, partage d'expériences.",
    topics: 56, posts: 312, color: '#00A854', last: 'il y a 10 min',
  },
]

const recentPosts = [
  { title: 'Comment gérer les erreurs en Python ?', author: 'Amine B.', category: 'Python', color: '#4285F4', time: 'il y a 15 min', replies: 4 },
  { title: 'Différence entre flex et grid en CSS ?', author: 'Sara K.', category: 'Dev Web', color: '#EA4335', time: 'il y a 45 min', replies: 7 },
  { title: 'Mon projet Django ne se déploie pas sur Railway', author: 'Youcef M.', category: 'Django', color: '#34A853', time: 'il y a 2h', replies: 3 },
  { title: 'Quelle formation choisir pour débuter ?', author: 'Lina H.', category: 'Entraide', color: '#00A854', time: 'il y a 3h', replies: 12 },
  { title: 'Comment créer un DataFrame avec Pandas ?', author: 'Riad T.', category: 'Data Science', color: '#FBBC05', time: 'il y a 5h', replies: 6 },
]

const stats = [
  { value: '176+', label: 'Sujets', color: 'text-primary-light' },
  { value: '1 003+', label: 'Réponses', color: 'text-slate-200' },
  { value: '340+', label: 'Membres actifs', color: 'text-algerie-light' },
  { value: '24/7', label: 'Disponible', color: 'text-accent' },
]

export default function ForumPage() {
  return (
    <>
      {/* Hero avec Mesh Gradient Shader */}
      <MeshGradientBg color1="#7C3AED" color2="#006233" className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            Forum communautaire
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-slate-100 mb-4 leading-tight">
            Ensemble on va{' '}
            <span className="gradient-text-algerie italic">plus loin</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Pose tes questions, aide les autres, partage tes projets. La communauté D.C.D est là pour toi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-glow-violet hover:shadow-glow-violet-lg group"
            >
              Rejoindre la communauté
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 border border-white/[0.1] hover:border-primary/40 hover:text-white hover:bg-primary/5 transition-all duration-200"
            >
              Voir les catégories
            </a>
          </div>
        </div>
      </MeshGradientBg>

      {/* Stats bar */}
      <section className="bg-dark-muted border-y border-white/[0.04] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8 sm:gap-16">
                <div className="text-center">
                  <p className={`font-heading text-3xl sm:text-4xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">{s.label}</p>
                </div>
                {i < stats.length - 1 && <div className="h-8 w-px bg-white/[0.08] hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3">Espaces de discussion</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100">Catégories</h2>
            <p className="text-slate-400 mt-2">Trouve le bon espace pour ta question</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, i) => {
              const Icon = CAT_ICONS[cat.title] ?? Users
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-5 bg-dark-card border border-white/[0.07] rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:border-algerie/25 hover:shadow-glow-algerie group"
                  style={{ borderLeftColor: cat.color, borderLeftWidth: '3px' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${cat.color}18` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: cat.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-slate-100 group-hover:text-white transition-colors">{cat.title}</h3>
                    <p className="text-sm text-slate-500 truncate mt-0.5">{cat.description}</p>
                    <p className="text-xs text-slate-600 mt-1">Dernier post : {cat.last}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-heading text-lg font-bold text-slate-200">{cat.topics}</p>
                    <p className="text-xs text-slate-500">sujets</p>
                    <p className="font-heading text-lg font-bold text-slate-200 mt-1">{cat.posts}</p>
                    <p className="text-xs text-slate-500">posts</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent posts — Thread Feed */}
      <section className="py-20 bg-dark-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3">Activité récente</p>
            <h2 className="font-heading text-3xl font-bold text-slate-100">Discussions récentes</h2>
          </div>

          {/* Timeline feed */}
          <div className="relative border-l-2 border-primary/20 pl-8 ml-3 space-y-4">
            {recentPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[2.35rem] top-4 w-3 h-3 rounded-full border-2 border-primary/40"
                  style={{ backgroundColor: post.color }}
                />

                <div className="bg-dark-card border border-white/[0.07] rounded-2xl px-5 py-4 hover:border-primary/20 transition-colors duration-200 cursor-pointer group">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: `${post.color}30`, color: post.color }}
                    >
                      {post.author[0]}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-200 group-hover:text-white transition-colors truncate leading-snug">
                        {post.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {post.author} · {post.time}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full hidden sm:block"
                        style={{ backgroundColor: `${post.color}15`, color: post.color }}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-500">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm font-bold text-slate-300">{post.replies}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-dark-card to-dark-bg border border-algerie/15 rounded-3xl p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-algerie/15 border border-algerie/30 rounded-2xl mb-6">
              <Users className="w-7 h-7 text-algerie-light" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-slate-100 mb-4">Tu as une question ?</h2>
            <p className="text-slate-400 mb-8">Inscris-toi et pose ta question à la communauté D.C.D.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/inscription"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-algerie hover:bg-algerie-dark transition-all duration-200 shadow-glow-algerie hover:shadow-glow-algerie-lg group"
              >
                Rejoindre le forum
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="/#faq"
                className="text-slate-500 hover:text-slate-300 text-sm underline underline-offset-4 transition-colors"
              >
                Voir la FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
