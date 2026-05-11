import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Mon espace',
  robots: { index: false, follow: false },
}

export default function MonEspaceLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
