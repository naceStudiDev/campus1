import HeroSection from '@/components/home/HeroSection'
import BentoSection from '@/components/home/BentoSection'
import StatsSection from '@/components/home/StatsSection'
import Temoignages from '@/components/home/Temoignages'
import FAQ from '@/components/home/FAQ'
import TiltCard from '@/components/ui/TiltCard'
import Link from 'next/link'
import { formations } from '@/data/formations'
import { Video, ArrowRight, Target, Film, Users, MessageCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <BentoSection />
      <Temoignages />
      <FAQ />

      {/* Formations aperçu */}
      <section className="py-24 bg-dark-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">Programmes</p>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-100 leading-tight">
                Nos <span className="italic gradient-text-violet">formations</span>
              </h2>
              <Link
                href="/formations"
                className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary-light transition-colors group"
              >
                Toutes les formations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="mt-4 text-slate-400 text-base">Des parcours complets adaptés aux étudiants algériens</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10" style={{ perspective: '1200px' }}>
            {formations.slice(0, 3).map((f, i) => (
              <TiltCard key={f.id} formation={f} index={i} />
            ))}
          </div>

          <div className="text-center sm:hidden">
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary-light transition-colors"
            >
              Voir toutes les formations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Google Meet section */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#0D0821] via-[#0D1117] to-[#080B14] rounded-3xl p-10 md:p-16 overflow-hidden border border-white/[0.06]">
            {/* Glow blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center gap-10">
              {/* Text side */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mb-6 border border-primary/20">
                  <Video className="w-6 h-6 text-primary-light" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                  Tous nos cours via{' '}
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>{' '}
                  Meet
                </h2>
                <p className="text-slate-400 text-base max-w-lg mb-8">
                  Des sessions en direct, interactives, depuis chez toi. Pose tes questions en temps réel, partage ton écran, collabore avec tes camarades.
                </p>
                <Link
                  href="/inscription"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-glow-violet hover:shadow-glow-violet-lg group"
                >
                  Rejoindre la prochaine session
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Visual side */}
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full max-w-xs">
                {[
                  { Icon: Target, label: 'Questions en direct' },
                  { Icon: Film, label: 'Cours enregistrés' },
                  { Icon: Users, label: 'Sessions ciblées' },
                  { Icon: MessageCircle, label: 'Communauté active' },
                ].map(({ Icon, label }) => (
                  <div key={label} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 text-primary-light" />
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-28 bg-dark-bg overflow-hidden">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-dark-bg to-dark-bg pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-6">Rejoins-nous</p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
            Prêt à{' '}
            <span className="italic gradient-text-violet">commencer ?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
            Inscris-toi gratuitement et assiste à ton premier cours dès aujourd&apos;hui.
          </p>
          <Link
            href="/inscription"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl text-base font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-glow-violet hover:shadow-glow-violet-lg group"
          >
            S&apos;inscrire gratuitement
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
