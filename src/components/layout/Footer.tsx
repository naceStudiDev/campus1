import Link from 'next/link'
import DCDLogo from '@/components/ui/DCDLogo'

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
    { label: 'Django & Backend', href: '/formations' },
    { label: 'Data Science', href: '/formations' },
    { label: 'Mobile Flutter', href: '/formations' },
  ],
  social: [
    { label: 'Facebook', href: '#', icon: '📘' },
    { label: 'Instagram', href: '#', icon: '📷' },
    { label: 'LinkedIn', href: '#', icon: '💼' },
    { label: 'YouTube', href: '#', icon: '▶️' },
    { label: 'Telegram', href: '#', icon: '✈️' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <DCDLogo showImage={false} size="md" />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Digital Campus Dz — Votre école d&apos;e-learning algérienne. Des cours en ligne via Google Meet, animés par des professeurs disponibles et passionnés.
            </p>
            <div className="flex gap-3 mt-6">
              {links.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-sm transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {links.navigation.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Formations</h3>
            <ul className="space-y-2">
              {links.formations.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span>📍</span> Algérie
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span> contact@digitalcampusdz.com
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span> +213 (0) XX XX XX XX
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span> Lun–Ven : 09h – 18h
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Digital Campus Dz. Tous droits réservés.</p>
          <p>
            Cours dispensés via{' '}
            <span className="text-white font-medium">Google Meet</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
