'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  color?: 'blue' | 'red' | 'green'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const colorMap = {
  blue: {
    bg: 'bg-[#2563EB] hover:bg-[#1D4ED8]',
    border: 'border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]',
  },
  red: {
    bg: 'bg-[#DC2626] hover:bg-[#B91C1C]',
    border: 'border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626]',
  },
  green: {
    bg: 'bg-[#059669] hover:bg-[#047857]',
    border: 'border-[#059669] text-[#059669] hover:bg-[#059669]',
  },
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  color = 'blue',
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-sm tracking-wide'

  const styles = cn(
    base,
    variant === 'primary' && `${colorMap[color].bg} text-white shadow-sm hover:shadow-md`,
    variant === 'outline' &&
      `border-2 ${colorMap[color].border} hover:text-white bg-transparent`,
    variant === 'secondary' && 'bg-white text-gray-800 hover:bg-gray-50 shadow-sm',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} className={styles}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </motion.button>
  )
}
