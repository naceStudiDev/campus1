import ContactForm from '@/components/forms/ContactForm'
import { Mail, MapPin, Phone, Clock, Zap, ChevronRight } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, TelegramIcon } from '@/components/ui/SocialIcons'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contactez l'équipe de Digital Campus Dz pour toute question sur nos formations.",
}

const socials = [
  { name: 'Facebook', Icon: FacebookIcon, handle: '@DigitalCampusDz', href: 'https://www.facebook.com/profile.php?id=61585710231966', color: '#1877F2' },
  { name: 'Instagram', Icon: InstagramIcon, handle: '@digitalcampusdz', href: '#', color: '#E1306C' },
  { name: 'LinkedIn', Icon: LinkedinIcon, handle: 'Digital Campus Dz', href: '#', color: '#0A66C2' },
  { name: 'Telegram', Icon: TelegramIcon, handle: '@dcd_community', href: '#', color: '#229ED9' },
  { name: 'YouTube', Icon: YoutubeIcon, handle: 'Digital Campus Dz', href: '#', color: '#FF0000' },
]

const contactInfo = [
  { Icon: Mail, label: 'Email', value: 'contact@digitalcampusdz.com' },
  { Icon: Phone, label: 'Téléphone', value: '+213 (0) XX XX XX XX' },
  { Icon: MapPin, label: 'Localisation', value: 'Algérie (100% en ligne)' },
  { Icon: Clock, label: 'Disponibilité', value: 'Lun–Ven : 09h – 18h' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-semibold mb-6">
            <Mail className="w-4 h-4" />
            Contact
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            On est là pour toi
          </h1>
          <p className="text-slate-400 text-lg">
            Une question ? Un doute ? Envoie-nous un message, on répond vite.
          </p>
        </div>
      </section>

      <section className="py-12 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-dark-card rounded-2xl border border-white/[0.07] p-8">
                <h2 className="font-heading text-xl font-bold text-slate-100 mb-6">Envoie-nous un message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact info */}
              <div className="bg-dark-card rounded-2xl border border-white/[0.07] p-6">
                <h3 className="font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wider">Infos de contact</h3>
                <div className="space-y-4">
                  {contactInfo.map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary-light" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">{label}</p>
                        <p className="text-sm text-slate-300 font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="bg-dark-card rounded-2xl border border-white/[0.07] p-6">
                <h3 className="font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wider">Nos réseaux</h3>
                <div className="space-y-2">
                  {socials.map(({ name, Icon, handle, href, color }) => (
                    <a
                      key={name}
                      href={href}
                      className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-200 group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${color}20` }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-300 group-hover:text-slate-100 transition-colors">{name}</p>
                        <p className="text-xs text-slate-500">{handle}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="bg-primary/[0.08] border border-primary/20 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-primary-light" />
                </div>
                <div>
                  <p className="font-semibold text-slate-200 text-sm">Réponse rapide</p>
                  <p className="text-xs text-slate-400 mt-1">Nous répondons à tous les messages en moins de 24 heures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
