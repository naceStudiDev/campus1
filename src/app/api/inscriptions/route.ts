import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin } from '@/lib/supabase'
import { verifySessionToken } from '@/lib/auth'
import { validateInscription } from '@/lib/validation'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const errors = validateInscription(body)
  if (errors.length > 0) {
    return NextResponse.json({ error: errors[0].message }, { status: 400 })
  }

  const { prenom, nom, email, telephone, formation, message } = body

  // Utilise la clé publique + RLS pour les inscriptions
  const { error } = await supabase.from('inscriptions').insert({
    prenom: prenom.trim(),
    nom: nom.trim(),
    email: email.trim().toLowerCase(),
    telephone: telephone.trim(),
    formation,
    message: message?.trim() || null,
    statut: 'nouveau',
  })

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'enregistrement' }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 201 })
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get('admin_session')?.value

  if (!token || !verifySessionToken(token)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { data, error } = await supabaseAdmin
    .from('inscriptions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}
