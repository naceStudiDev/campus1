'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase-browser'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'

function CallbackHandler() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const code = searchParams.get('code')

    if (code) {
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        if (error) {
          router.replace('/connexion?error=lien_invalide')
        } else {
          router.replace('/mon-espace')
        }
      })
    } else {
      // Implicit flow — session déjà dans le hash, Supabase la récupère automatiquement
      supabase.auth.getSession().then(({ data }) => {
        if (data.session) {
          router.replace('/mon-espace')
        } else {
          router.replace('/connexion?error=session_introuvable')
        }
      })
    }
  }, [router, searchParams])

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center gap-4">
      <Loader2 className="w-8 h-8 text-primary-light animate-spin" />
      <p className="text-slate-400 text-sm">Connexion en cours…</p>
    </div>
  )
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-light animate-spin" />
      </div>
    }>
      <CallbackHandler />
    </Suspense>
  )
}
