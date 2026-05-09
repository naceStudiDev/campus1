import InscriptionForm from '@/components/forms/InscriptionForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inscription',
  description: "Inscris-toi à Digital Campus Dz et commence ta formation en ligne dès aujourd'hui.",
}

export default function InscriptionPage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4285F4]/10 rounded-full text-[#4285F4] text-sm font-semibold mb-6">
            📝 Inscription
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Rejoins D.C.D
          </h1>
          <p className="text-gray-500 text-lg mb-2">
            Remplis ce formulaire et on te recontacte dans les 24h.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10">
            <InscriptionForm />
          </div>

          {/* Reassurance */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { icon: '🎓', label: 'Premier cours gratuit' },
              { icon: '📹', label: 'Via Google Meet' },
              { icon: '🇩🇿', label: 'École algérienne' },
            ].map((item) => (
              <div key={item.label} className="text-center bg-gray-50 rounded-2xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-xs text-gray-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
