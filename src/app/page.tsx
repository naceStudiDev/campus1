import HeroSection from '@/components/home/HeroSection'
import PillarsSection from '@/components/home/PillarsSection'
import StatsSection from '@/components/home/StatsSection'
import Temoignages from '@/components/home/Temoignages'
import FAQ from '@/components/home/FAQ'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import { formations } from '@/data/formations'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <StatsSection />
      <Temoignages />
      <FAQ />

      {/* Formations aperçu */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos formations"
            subtitle="Des parcours complets adaptés aux étudiants algériens"
            accent="green"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {formations.slice(0, 3).map((f) => (
              <div key={f.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{f.description}</p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${f.color}15`, color: f.color }}
                  >
                    {f.level}
                  </span>
                  <span className="text-xs text-gray-400">{f.duration}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button href="/formations" color="blue" variant="outline">
              Voir toutes les formations →
            </Button>
          </div>
        </div>
      </section>

      {/* Google Meet section */}
      <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4285F4]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#34A853]/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="text-5xl mb-6">📹</div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Tous nos cours via{' '}
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>o</span>
                <span style={{ color: '#FBBC05' }}>o</span>
                <span style={{ color: '#4285F4' }}>g</span>
                <span style={{ color: '#34A853' }}>l</span>
                <span style={{ color: '#EA4335' }}>e</span>{' '}
                Meet
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Des sessions en direct, interactives, depuis chez toi. Pose tes questions en temps réel, partage ton écran, collabore avec tes camarades.
              </p>
              <Button href="/inscription" color="green" className="text-base px-8 py-4">
                Rejoindre la prochaine session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Rejoins-nous</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Prêt à commencer ?</h2>
          <p className="text-slate-400 text-base mb-10">Inscris-toi gratuitement et assiste à ton premier cours dès aujourd&apos;hui.</p>
          <Button href="/inscription" color="blue" className="text-sm px-8 py-3.5">
            S&apos;inscrire gratuitement
          </Button>
        </div>
      </section>
    </>
  )
}
