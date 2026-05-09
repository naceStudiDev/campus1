import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!

// Client public (formulaires)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client admin (API routes serveur uniquement)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)
