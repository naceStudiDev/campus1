import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin } from '@/lib/supabase'
import { verifySessionToken } from '@/lib/auth'

export async function GET() {
  const { data, error } = await supabase
    .from('annonces')
    .select('*')
    .order('date', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  const token = req.cookies.get('admin_session')?.value
  if (!token || !verifySessionToken(token)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const body = await req.json()
  const { title, description, date, type, badge, is_urgent, cta_label, cta_url } = body

  if (!title || !description || !date || !type || !cta_label || !cta_url) {
    return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from('annonces')
    .insert({ title, description, date, type, badge: badge || null, is_urgent: !!is_urgent, cta_label, cta_url })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
