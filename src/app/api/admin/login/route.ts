import { NextRequest, NextResponse } from 'next/server'
import { generateSessionToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { password } = await req.json()

  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword || !password || password.trim() !== adminPassword.trim()) {
    // Délai artificiel pour ralentir le brute force
    await new Promise((r) => setTimeout(r, 500))
    return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 })
  }

  // On stocke un token HMAC, jamais le mot de passe brut
  const token = generateSessionToken(adminPassword)

  const response = NextResponse.json({ success: true })
  response.cookies.set('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 8,
    path: '/',
  })

  return response
}
