'use client'

import { ReactNode } from 'react'

interface MeshGradientBgProps {
  children: ReactNode
  className?: string
  color1?: string
  color2?: string
}

export default function MeshGradientBg({
  children,
  className = '',
  color1 = '#006233',
  color2 = '#7C3AED',
}: MeshGradientBgProps) {
  return (
    <div className={`relative overflow-hidden bg-dark-bg ${className}`}>
      {/* Blob 1 — color1 dominant, top-right */}
      <div
        className="animate-mesh1 absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color1}40 0%, ${color1}15 40%, transparent 70%)`,
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Blob 2 — color2, bottom-left */}
      <div
        className="animate-mesh2 absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color2}35 0%, ${color2}12 40%, transparent 70%)`,
          filter: 'blur(70px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Blob 3 — subtle center depth */}
      <div
        className="animate-mesh3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${color1}20 0%, ${color2}10 50%, transparent 75%)`,
          filter: 'blur(50px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Grid overlay — subtle texture */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
