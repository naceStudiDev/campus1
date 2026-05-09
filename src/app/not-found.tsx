import Link from 'next/link'
import DCDLogo from '@/components/ui/DCDLogo'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 text-center">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4285F4]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#34A853]/10 rounded-full blur-3xl" />

      <div className="relative">
        <DCDLogo size="lg" />

        <div className="mt-10 mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gray-700" />
          <span className="text-8xl font-black" style={{
            background: 'linear-gradient(135deg, #4285F4, #EA4335, #34A853)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            404
          </span>
          <div className="h-px w-12 bg-gray-700" />
        </div>

        <p className="text-2xl font-bold text-white mb-2">
          Page introuvable
        </p>
        <p className="text-gray-400 text-lg mb-2" dir="rtl" lang="ar">
          الصفحة غير موجودة
        </p>
        <p className="text-gray-500 max-w-sm mx-auto mt-4 mb-10 text-sm leading-relaxed">
          La page que tu cherches n&apos;existe pas ou a été déplacée.<br />
          Pas de panique, on te ramène à l&apos;accueil !
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #34A853 0%, #2d8f47 100%)' }}
        >
          ← Retour à l&apos;accueil
        </Link>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm">
          <Link href="/formations" className="text-gray-500 hover:text-[#4285F4] transition-colors">Formations</Link>
          <span className="text-gray-700">·</span>
          <Link href="/inscription" className="text-gray-500 hover:text-[#34A853] transition-colors">S&apos;inscrire</Link>
          <span className="text-gray-700">·</span>
          <Link href="/contact" className="text-gray-500 hover:text-[#EA4335] transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  )
}
