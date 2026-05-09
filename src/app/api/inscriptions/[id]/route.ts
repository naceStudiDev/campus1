import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { verifySessionToken } from '@/lib/auth'

const VALID_STATUTS = ['nouveau', 'contacté', 'inscrit', 'annulé']

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const token = req.cookies.get('admin_session')?.value
  if (!token || !verifySessionToken(token)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { statut } = await req.json()
  if (!VALID_STATUTS.includes(statut)) {
    return NextResponse.json({ error: 'Statut invalide' }, { status: 400 })
  }

  const { error } = await supabaseAdmin
    .from('inscriptions')
    .update({ statut })
    .eq('id', params.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const token = req.cookies.get('admin_session')?.value
  if (!token || !verifySessionToken(token)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { error } = await supabaseAdmin
    .from('inscriptions')
    .delete()
    .eq('id', params.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
