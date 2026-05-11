import { createClient } from '@supabase/supabase-js'

// Lit la préférence "Rester connecté" stockée avant l'envoi du magic link.
// Par défaut → localStorage (session persistante). Si dcd_rm='0' → sessionStorage.
function getAuthStorage(): Storage | undefined {
  if (typeof window === 'undefined') return undefined
  return localStorage.getItem('dcd_rm') === '0'
    ? window.sessionStorage
    : window.localStorage
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      storage: getAuthStorage(),
      persistSession: true,
      autoRefreshToken: true,
    },
  }
)
