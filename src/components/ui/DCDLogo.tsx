'use client'

import Link from 'next/link'

interface DCDLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showName?: boolean
}

const sizes = {
  sm: { px: 30, title: 'text-base', sub: 'text-[10px]', gap: 'gap-2' },
  md: { px: 38, title: 'text-lg',   sub: 'text-xs',     gap: 'gap-2.5' },
  lg: { px: 52, title: 'text-2xl',  sub: 'text-sm',     gap: 'gap-3' },
}

function TriangleLogo({ px }: { px: number }) {
  // Equilateral triangle pointing UP — circumradius R=20, center (26,26)
  // Top: (26,6)  Bottom-left: (8.7,36)  Bottom-right: (43.3,36)
  const pts = '26,6 43.3,36 8.7,36'

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Dark circle background */}
      <circle cx="26" cy="26" r="26" fill="#0D0B21" />

      {/* 3 triangles — Google colors — rotated 30° each — screen blend */}
      <g style={{ mixBlendMode: 'screen' }}>
        {/* Triangle 1 — Google Blue — 0° */}
        <polygon points={pts} fill="#4285F4" />

        {/* Triangle 2 — Google Red — 30° */}
        <polygon points={pts} fill="#EA4335" transform="rotate(30, 26, 26)" />

        {/* Triangle 3 — Google Green — 60° */}
        <polygon points={pts} fill="#34A853" transform="rotate(60, 26, 26)" />
      </g>

      {/* Subtle circle border */}
      <circle cx="26" cy="26" r="25.5" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    </svg>
  )
}

export default function DCDLogo({ size = 'md', showName = true }: DCDLogoProps) {
  const s = sizes[size]

  return (
    <Link href="/" className={`flex items-center ${s.gap} group`}>
      <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
        <TriangleLogo px={s.px} />
      </div>

      {showName && (
        <div className="flex flex-col leading-tight">
          <span className={`font-black tracking-tight text-slate-100 ${s.title}`}>
            Digital Campus
          </span>
          <span
            className={`font-bold tracking-widest uppercase ${s.sub}`}
            style={{ color: '#A78BFA', letterSpacing: '0.15em' }}
          >
            Dz
          </span>
        </div>
      )}
    </Link>
  )
}
