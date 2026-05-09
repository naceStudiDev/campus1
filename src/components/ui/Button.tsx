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
  blue: { bg: 'bg-[#4285F4] hover:bg-[#3367d6]', border: 'border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4]' },
  red: { bg: 'bg-[#EA4335] hover:bg-[#c5341e]', border: 'border-[#EA4335] text-[#EA4335] hover:bg-[#EA4335]' },
  green: { bg: 'bg-[#34A853] hover:bg-[#2d8f47]', border: 'border-[#34A853] text-[#34A853] hover:bg-[#34A853]' },
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
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-sm'

  const styles = cn(
    base,
    variant === 'primary' && `${colorMap[color].bg} text-white shadow-md hover:shadow-lg`,
    variant === 'outline' && `border-2 ${colorMap[color].border} hover:text-white bg-transparent`,
    variant === 'secondary' && 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} className={styles}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
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
