'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import type { Metadata } from 'next'

const categories = [
  {
    icon: '🐍',
    title: 'Python',
    description: 'Questions sur la syntaxe, les erreurs, les projets Python.',
    topics: 24,
    posts: 138,
    color: '#4285F4',
    last: 'il y a 2h',
  },
  {
    icon: '🌐',
    title: 'Développement Web',
    description: 'HTML, CSS, JavaScript, React — toutes vos questions ici.',
    topics: 41,
    posts: 267,
    color: '#EA4335',
    last: 'il y a 30 min',
  },
  {
    icon: '⚙️',
    title: 'Django & Backend',
    description: 'API, modèles, authentification et déploiement.',
    topics: 18,
    posts: 94,
    color: '#34A853',
    last: 'il y a 5h',
  },
  {
    icon: '📊',
    title: 'Data Science',
    description: 'Pandas, NumPy, Machine Learning et visualisation.',
    topics: 15,
    posts: 73,
    color: '#FBBC05',
    last: 'il y a 1j',
  },
  {
    icon: '💼',
    title: 'Digital & Marketing',
    description: 'SEO, réseaux sociaux, stratégie digitale, e-commerce.',
    topics: 22,
    posts: 119,
    color: '#4285F4',
    last: 'il y a 3h',
  },
  {
    icon: '🎯',
    title: 'Entraide générale',
    description: 'Orientation, conseils carrière, partage d\'expériences.',
    topics: 56,
    posts: 312,
    color: '#EA4335',
    last: 'il y a 10 min',
  },
]

const recentPosts = [
  { title: 'Comment gérer les erreurs en Python ?', author: 'Amine B.', category: 'Python', time: 'il y a 15 min', replies: 4 },
  { title: 'Différence entre flex et grid en CSS ?', author: 'Sara K.', category: 'Dev Web', time: 'il y a 45 min', replies: 7 },
  { title: 'Mon projet Django ne se déploie pas sur Railway', author: 'Youcef M.', category: 'Django', time: 'il y a 2h', replies: 3 },
  { title: 'Quelle formation choisir pour débuter ?', author: 'Lina H.', category: 'Entraide', time: 'il y a 3h', replies: 12 },
  { title: 'Comment créer un DataFrame avec Pandas ?', author: 'Riad T.', category: 'Data Science', time: 'il y a 5h', replies: 6 },
]

export default function ForumPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4285F4]/10 rounded-full text-[#4285F4] text-sm font-semibold mb-6">
            💬 Forum communautaire
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Ensemble on va plus loin
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Pose tes questions, aide les autres, partage tes projets. La communauté D.C.D est là pour toi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/inscription" color="blue">
              Rejoindre la communauté
            </Button>
            <Button href="#categories" variant="outline" color="blue">
              Voir les catégories
            </Button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-6 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '176+', label: 'Sujets', color: '#4285F4' },
              { value: '1 003+', label: 'Réponses', color: '#EA4335' },
              { value: '340+', label: 'Membres actifs', color: '#34A853' },
              { value: '24/7', label: 'Disponible', color: '#FBBC05' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black" style={{ color: s.color }}>{s.value}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Catégories" subtitle="Trouve le bon espace pour ta question" accent="blue" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-5 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-2xl p-5 cursor-pointer transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${cat.color}15` }}
                >
                  {cat.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900">{cat.title}</h3>
                  <p className="text-sm text-gray-500 truncate">{cat.description}</p>
                  <p className="text-xs text-gray-400 mt-1">Dernier post : {cat.last}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-gray-700">{cat.topics}</p>
                  <p className="text-xs text-gray-400">sujets</p>
                  <p className="text-sm font-bold text-gray-700 mt-1">{cat.posts}</p>
                  <p className="text-xs text-gray-400">posts</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Discussions récentes" accent="red" />
          <div className="space-y-3">
            {recentPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 px-6 py-4 hover:shadow-sm transition-shadow cursor-pointer"
              >
                <div className="w-9 h-9 bg-[#4285F4]/10 rounded-full flex items-center justify-center text-sm font-bold text-[#4285F4] flex-shrink-0">
                  {post.author[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{post.title}</p>
                  <p className="text-xs text-gray-400">{post.author} · {post.time}</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full hidden sm:block flex-shrink-0">
                  {post.category}
                </span>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-gray-700">{post.replies}</p>
                  <p className="text-xs text-gray-400">rép.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#4285F4]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Tu as une question ?</h2>
          <p className="text-blue-100 mb-8">Inscris-toi et pose ta question à la communauté D.C.D.</p>
          <Button href="/inscription" variant="secondary" className="text-gray-900 text-base px-8 py-4">
            Rejoindre le forum
          </Button>
        </div>
      </section>
    </>
  )
}
