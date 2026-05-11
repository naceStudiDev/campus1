import { createClient } from '@supabase/supabase-js'

// Client public — safe pour les composants navigateur (pas de clé service)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
