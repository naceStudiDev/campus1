'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import DCDLogo from '@/components/ui/DCDLogo'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 text-center">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#EA4335]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FBBC05]/10 rounded-full blur-3xl" />

      <div className="relative">
        <DCDLogo size="lg" />

        <div className="mt-10 mb-4 text-6xl">⚠️</div>

        <p className="text-2xl font-bold text-white mb-2">Oops, quelque chose a mal tourné</p>
        <p className="text-gray-500 max-w-sm mx-auto mt-3 mb-8 text-sm leading-relaxed">
          Une erreur inattendue s&apos;est produite. Tu peux réessayer ou retourner à l&apos;accueil.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #4285F4 0%, #3367d6 100%)' }}
          >
            🔄 Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-gray-300 bg-gray-800 hover:bg-gray-700 transition-all"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-gray-700 font-mono">
            ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
