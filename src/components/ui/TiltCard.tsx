'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Clock } from 'lucide-react'
import { Formation } from '@/data/formations'
import { getFormationIcon } from '@/lib/formation-icons'

interface TiltCardProps {
  formation: Formation
  index?: number
}

export default function TiltCard({ formation, index = 0 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { Icon, gradient, glow } = getFormationIcon(formation.id)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%'])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    x.set(nx)
    y.set(ny)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="group relative cursor-default select-none"
    >
      {/* Glow border — conic gradient, revealed on hover */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `conic-gradient(from 180deg at ${glowX} ${glowY}, ${glow} 0deg, transparent 60deg, transparent 300deg, ${glow} 360deg)`,
          filter: 'blur(2px)',
        }}
      />

      {/* Card body */}
      <div
        className="relative bg-dark-card rounded-2xl border border-white/[0.07] overflow-hidden flex flex-col h-full"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Colored top line */}
        <div className={`h-0.5 w-full bg-gradient-to-r ${gradient}`} />

        {/* Icon header */}
        <div className="p-6 pb-4">
          <div className="relative w-12 h-12 mb-5">
            <div
              className="absolute inset-0 rounded-xl blur-lg opacity-60"
              style={{ background: glow }}
            />
            <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
          </div>

          <h3 className="font-heading text-xl font-bold text-slate-100 mb-2 leading-snug line-clamp-1">
            {formation.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-4">
            {formation.description}
          </p>

          {/* Topics */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {formation.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-400"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto px-6 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{formation.duration}</span>
          </div>

          <span
            className="text-[11px] font-semibold px-3 py-1 rounded-full border"
            style={{
              backgroundColor: `${formation.color}15`,
              color: formation.color,
              borderColor: `${formation.color}30`,
            }}
          >
            {formation.level}
          </span>
        </div>

        {/* CTA — reveals on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-dark-card via-dark-card to-transparent pt-8 pb-6 px-6">
          <Link
            href="/inscription"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 shadow-glow-violet hover:shadow-glow-violet-lg bg-primary hover:bg-primary-dark"
          >
            S&apos;inscrire
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
