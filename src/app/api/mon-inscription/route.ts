import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  // Récupère le token depuis le header Authorization
  const authHeader = req.headers.get('authorization')
  const token = authHeader?.replace('Bearer ', '')

  if (!token) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  // Vérifie le token JWT Supabase et récupère l'utilisateur
  const { data: { user }, error: authError } = await supabase.auth.getUser(token)

  if (authError || !user?.email) {
    return NextResponse.json({ error: 'Session invalide' }, { status: 401 })
  }

  // Cherche l'inscription par email
  const { data, error } = await supabaseAdmin
    .from('inscriptions')
    .select('*')
    .eq('email', user.email.toLowerCase())
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Aucune inscription trouvée' }, { status: 404 })
  }

  return NextResponse.json(data)
}
