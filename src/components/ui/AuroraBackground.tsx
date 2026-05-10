'use client'

import { ReactNode } from 'react'

interface AuroraBackgroundProps {
  children: ReactNode
  className?: string
}

export default function AuroraBackground({ children, className = '' }: AuroraBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Aurora layer */}
      <div
        className="animate-aurora absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'repeating-linear-gradient(100deg, rgba(124,58,237,0.08) 0%, rgba(167,139,250,0.05) 7%, transparent 10%, transparent 12%, rgba(245,158,11,0.04) 16%)',
            'repeating-linear-gradient(100deg, rgba(124,58,237,0.04) 10%, transparent 15%, rgba(167,139,250,0.06) 20%, transparent 25%, rgba(245,158,11,0.03) 30%)',
          ].join(', '),
          backgroundSize: '300% 300%',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Noise overlay for texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />
      {children}
    </div>
  )
}
