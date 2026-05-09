const VALID_FORMATIONS = ['python', 'dev-web', 'django', 'data-science', 'sql', 'cybersecurite', 'c-language', 'architecture-machine', 'marketing-digital']
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[0-9+\s()-]{9,15}$/

export interface ValidationError {
  field: string
  message: string
}

export function validateInscription(data: Record<string, unknown>): ValidationError[] {
  const errors: ValidationError[] = []

  const { prenom, nom, email, telephone, formation, message } = data

  if (!prenom || typeof prenom !== 'string' || prenom.trim().length < 2 || prenom.trim().length > 50)
    errors.push({ field: 'prenom', message: 'Prénom invalide (2-50 caractères)' })

  if (!nom || typeof nom !== 'string' || nom.trim().length < 2 || nom.trim().length > 50)
    errors.push({ field: 'nom', message: 'Nom invalide (2-50 caractères)' })

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim()) || email.length > 100)
    errors.push({ field: 'email', message: 'Email invalide' })

  if (!telephone || typeof telephone !== 'string' || !PHONE_REGEX.test(telephone.trim()))
    errors.push({ field: 'telephone', message: 'Téléphone invalide' })

  if (!formation || !VALID_FORMATIONS.includes(formation as string))
    errors.push({ field: 'formation', message: 'Formation invalide' })

  if (message && (typeof message !== 'string' || message.length > 500))
    errors.push({ field: 'message', message: 'Message trop long (max 500 caractères)' })

  return errors
}
