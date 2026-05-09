'use client'

import Image from 'next/image'
import Link from 'next/link'

interface DCDLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showName?: boolean
}

const sizes = {
  sm: { img: 32, title: 'text-base', sub: 'text-[10px]', gap: 'gap-2' },
  md: { img: 42, title: 'text-lg', sub: 'text-xs', gap: 'gap-2.5' },
  lg: { img: 56, title: 'text-2xl', sub: 'text-sm', gap: 'gap-3' },
}

export default function DCDLogo({ size = 'md', showName = true }: DCDLogoProps) {
  const s = sizes[size]

  return (
    <Link href="/" className={`flex items-center ${s.gap} group`}>
      {/* Logo image with light green background */}
      <div
        className="flex items-center justify-center rounded-xl flex-shrink-0 transition-transform group-hover:scale-105"
        style={{
          backgroundColor: '#d4f5e2',
          width: s.img + 14,
          height: s.img + 14,
          padding: 7,
        }}
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

      {/* Name */}
      {showName && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-black tracking-tight text-gray-900 ${s.title}`}
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Digital Campus
          </span>
          <span
            className={`font-bold tracking-widest uppercase ${s.sub}`}
            style={{ color: '#34A853', fontFamily: 'Roboto, sans-serif', letterSpacing: '0.15em' }}
          >
            Dz
          </span>
        </div>
      )}
    </Link>
  )
}
