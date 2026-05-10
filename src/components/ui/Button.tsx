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
    bg: 'bg-primary hover:bg-primary-dark shadow-glow-violet hover:shadow-glow-violet-lg',
    border: 'border border-primary/40 text-primary-light hover:bg-primary/10 hover:border-primary/60',
  },
  red: {
    bg: 'bg-red-600 hover:bg-red-700',
    border: 'border border-red-500/40 text-red-400 hover:bg-red-500/10',
  },
  green: {
    bg: 'bg-emerald-600 hover:bg-emerald-700',
    border: 'border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10',
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
    variant === 'primary' && `${colorMap[color].bg} text-white`,
    variant === 'outline' && `${colorMap[color].border} bg-transparent`,
    variant === 'secondary' && 'bg-dark-card text-slate-200 hover:bg-dark-muted border border-white/[0.07]',
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
