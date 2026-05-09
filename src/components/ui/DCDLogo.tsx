'use client'

import Image from 'next/image'
import Link from 'next/link'

interface DCDLogoProps {
  showImage?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { img: 32, text: 'text-xl' },
  md: { img: 40, text: 'text-2xl' },
  lg: { img: 56, text: 'text-4xl' },
}

export default function DCDLogo({ showImage = true, size = 'md' }: DCDLogoProps) {
  const s = sizes[size]

  return (
    <Link href="/" className="flex items-center gap-2 group">
      {showImage && (
        <Image
          src="/images/logo.png"
          alt="Digital Campus Dz Logo"
          width={s.img}
          height={s.img}
          className="object-contain"
          priority
        />
      )}
      <span className={`font-black tracking-tight ${s.text}`}>
        <span style={{ color: '#4285F4' }}>D</span>
        <span className="text-gray-400">.</span>
        <span style={{ color: '#EA4335' }}>C</span>
        <span className="text-gray-400">.</span>
        <span style={{ color: '#34A853' }}>D</span>
      </span>
    </Link>
  )
}
