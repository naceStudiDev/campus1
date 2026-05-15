import InscriptionForm from '@/components/forms/InscriptionForm'
import { ClipboardList, GraduationCap, Video, Flag } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'S\'inscrire à une formation',
  description: "Inscris-toi gratuitement à Digital Campus Dz et commence ta formation en ligne : Python, Développement Web, Cybersécurité ou Algorithmique. Cours en direct via Google Meet.",
  openGraph: {
    title: 'S\'inscrire — Digital Campus Dz',
    description: "Rejoins Digital Campus Dz et apprends la programmation en direct avec des formateurs passionnés. Inscription gratuite.",
  },
  alternates: {
    canonical: 'https://www.digitalcampus-dz.com/inscription',
  },
}

const reassurance = [
  { Icon: GraduationCap, label: 'Premier cours gratuit' },
  { Icon: Video, label: 'Via Google Meet' },
  { Icon: Flag, label: 'École algérienne' },
]

export default function InscriptionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-semibold mb-6">
            <ClipboardList className="w-4 h-4" />
            Inscription
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Rejoins D.C.D
          </h1>
          <p className="text-slate-400 text-lg">
            Remplis ce formulaire et on te recontacte dans les 24h.
          </p>
        </div>
      </section>

      <section className="py-12 bg-dark-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-dark-card rounded-2xl border border-white/[0.07] p-8 md:p-10">
            <InscriptionForm />
          </div>

          {/* Reassurance */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {reassurance.map(({ Icon, label }) => (
              <div key={label} className="text-center bg-dark-card border border-white/[0.07] rounded-2xl p-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-light" />
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
