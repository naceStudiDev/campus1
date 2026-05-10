'use client'

import Image from 'next/image'
import Link from 'next/link'

interface DCDLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showName?: boolean
}

const sizes = {
  sm: { img: 28, title: 'text-base', sub: 'text-[10px]', gap: 'gap-2' },
  md: { img: 36, title: 'text-lg', sub: 'text-xs', gap: 'gap-2.5' },
  lg: { img: 48, title: 'text-2xl', sub: 'text-sm', gap: 'gap-3' },
}

export default function DCDLogo({ size = 'md', showName = true }: DCDLogoProps) {
  const s = sizes[size]

  return (
    <Link href="/" className={`flex items-center ${s.gap} group`}>
      <div
        className="flex-shrink-0 transition-transform group-hover:scale-105"
        style={{ filter: 'drop-shadow(0 0 8px rgba(167,139,250,0.4))' }}
      >
        <Image
          src="/images/logo.png"
          alt="Digital Campus Dz"
          width={s.img}
          height={s.img}
          className="object-contain"
          priority
        />
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
