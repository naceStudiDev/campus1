import { formations } from '@/data/formations'
import TiltCard from '@/components/ui/TiltCard'
import Link from 'next/link'
import { BookOpen, ArrowRight, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formations',
  description: 'Découvrez toutes nos formations en ligne : Python, Développement Web, Cybersécurité, Algorithmique et plus.',
}

export default function FormationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-bg relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            Nos formations
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-slate-100 mb-4 leading-tight">
            Choisis ta{' '}
            <span className="italic gradient-text-violet">formation</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Des parcours complets, du débutant à l&apos;avancé, dispensés en direct via Google Meet par des professeurs passionnés.
          </p>
        </div>
      </section>

      {/* Formations grid */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ perspective: '1400px' }}
          >
            {formations.map((formation, i) => (
              <TiltCard key={formation.id} formation={formation} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-card border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mb-6 border border-primary/20">
            <MessageCircle className="w-6 h-6 text-primary-light" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-100 mb-4">
            Tu ne trouves pas ta formation ?
          </h2>
          <p className="text-slate-400 mb-8">Contacte-nous, on pourra peut-être adapter notre offre à tes besoins.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-glow-violet hover:shadow-glow-violet-lg group"
          >
            Nous contacter
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
