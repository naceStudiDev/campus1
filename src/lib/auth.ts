import { createHmac } from 'crypto'

const SESSION_SALT = 'dcd-admin-session-v1'

export function generateSessionToken(password: string): string {
  return createHmac('sha256', password).update(SESSION_SALT).digest('hex')
}

export function verifySessionToken(token: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) return false
  const expected = generateSessionToken(adminPassword)
  return token === expected
}
