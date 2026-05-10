import Link from 'next/link'
import DCDLogo from '@/components/ui/DCDLogo'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, TelegramIcon } from '@/components/ui/SocialIcons'

const links = {
  navigation: [
    { label: 'Accueil', href: '/' },
    { label: 'Formations', href: '/formations' },
    { label: 'Bibliothèque', href: '/bibliotheque' },
    { label: 'Forum', href: '/forum' },
    { label: 'Comment ça marche', href: '/comment-ca-marche' },
    { label: 'Inscription', href: '/inscription' },
    { label: 'Contact', href: '/contact' },
  ],
  formations: [
    { label: 'Python', href: '/formations' },
    { label: 'Développement Web', href: '/formations' },
    { label: 'Algorithmique 1 & 2', href: '/formations' },
    { label: 'Bases de données SQL', href: '/formations' },
    { label: 'Cybersécurité', href: '/formations' },
    { label: 'Langage C', href: '/formations' },
    { label: 'Architecture Machine', href: '/formations' },
    { label: 'Marketing Digital', href: '/formations' },
  ],
  social: [
    { label: 'Facebook', Icon: FacebookIcon, href: '#' },
    { label: 'Instagram', Icon: InstagramIcon, href: '#' },
    { label: 'LinkedIn', Icon: LinkedinIcon, href: '#' },
    { label: 'YouTube', Icon: YoutubeIcon, href: '#' },
    { label: 'Telegram', Icon: TelegramIcon, href: '#' },
  ],
}

const contactInfo = [
  { Icon: MapPin, value: 'Algérie' },
  { Icon: Mail, value: 'contact@digitalcampusdz.com' },
  { Icon: Phone, value: '+213 (0) XX XX XX XX' },
  { Icon: Clock, value: 'Lun–Ven : 09h – 18h' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-white/[0.05] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <DCDLogo size="md" />
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Digital Campus Dz — Votre école d&apos;e-learning algérienne. Des cours en ligne via Google Meet, animés par des professeurs disponibles et passionnés.
            </p>
            <div className="flex gap-2 mt-6">
              {links.social.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/[0.05] hover:bg-primary/15 hover:text-primary-light border border-white/[0.06] rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {links.navigation.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-sm text-slate-500 hover:text-slate-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-wider">Formations</h3>
            <ul className="space-y-2">
              {links.formations.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-500 hover:text-slate-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map(({ Icon, value }) => (
                <li key={value} className="flex items-center gap-2 text-sm text-slate-500">
                  <Icon className="w-4 h-4 flex-shrink-0 text-slate-600" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Digital Campus Dz. Tous droits réservés.</p>
          <p>
            Cours dispensés via{' '}
            <span className="text-slate-400 font-medium">Google Meet</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
