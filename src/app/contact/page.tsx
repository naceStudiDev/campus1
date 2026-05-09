import ContactForm from '@/components/forms/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Digital Campus Dz',
  description: 'Contactez l\'équipe de Digital Campus Dz pour toute question sur nos formations.',
}

const socials = [
  { name: 'Facebook', icon: '📘', handle: '@DigitalCampusDz', href: '#', color: '#1877F2' },
  { name: 'Instagram', icon: '📷', handle: '@digitalcampusdz', href: '#', color: '#E1306C' },
  { name: 'LinkedIn', icon: '💼', handle: 'Digital Campus Dz', href: '#', color: '#0A66C2' },
  { name: 'Telegram', icon: '✈️', handle: '@dcd_community', href: '#', color: '#229ED9' },
  { name: 'YouTube', icon: '▶️', handle: 'Digital Campus Dz', href: '#', color: '#FF0000' },
]

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EA4335]/10 rounded-full text-[#EA4335] text-sm font-semibold mb-6">
            📬 Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">On est là pour toi</h1>
          <p className="text-gray-500 text-lg">
            Une question ? Un doute ? Envoie-nous un message, on répond vite.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Envoie-nous un message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Infos de contact</h3>
                <div className="space-y-3">
                  {[
                    { icon: '📧', label: 'Email', value: 'contact@digitalcampusdz.com' },
                    { icon: '📱', label: 'Téléphone', value: '+213 (0) XX XX XX XX' },
                    { icon: '📍', label: 'Localisation', value: 'Algérie (100% en ligne)' },
                    { icon: '🕐', label: 'Disponibilité', value: 'Lun–Ven : 09h – 18h' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-xl w-8 flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                        <p className="text-sm text-gray-700 font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Nos réseaux</h3>
                <div className="space-y-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-shadow group"
                    >
                      <span className="text-xl">{s.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-[#4285F4] transition-colors">{s.name}</p>
                        <p className="text-xs text-gray-400">{s.handle}</p>
                      </div>
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-[#4285F4] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="bg-[#34A853]/10 rounded-2xl p-5 flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Réponse rapide</p>
                  <p className="text-xs text-gray-500 mt-1">Nous répondons à tous les messages en moins de 24 heures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
