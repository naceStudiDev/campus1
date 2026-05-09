import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { prenom, nom, email, telephone, formation, message } = body

  if (!prenom || !nom || !email || !telephone || !formation) {
    return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 })
  }

  const { error } = await supabaseAdmin.from('inscriptions').insert({
    prenom,
    nom,
    email,
    telephone,
    formation,
    message: message || null,
    statut: 'nouveau',
  })

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'enregistrement' }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 201 })
}

export async function GET(req: NextRequest) {
  const session = req.cookies.get('admin_session')

  if (session?.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { data, error } = await supabaseAdmin
    .from('inscriptions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}
