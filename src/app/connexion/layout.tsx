import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Connexion',
  robots: { index: false, follow: false },
}

export default function ConnexionLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
