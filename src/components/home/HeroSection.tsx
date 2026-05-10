'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Video, ChevronRight } from 'lucide-react'
import AuroraBackground from '@/components/ui/AuroraBackground'

const codeLines = [
  { text: "hesitation = perte = int('0')", color: 'text-violet-400' },
  { text: "DCD = 'Digital Campus Dz'", color: 'text-cyan-400' },
  { text: "if \"t'es décidé\":", color: 'text-fuchsia-400' },
  { text: "    rejoins(DCD, gratuit=True)", color: 'text-amber-300' },
  { text: "elif hesitation == True:", color: 'text-fuchsia-400' },
  { text: '    découvrir_nos_cours()', color: 'text-amber-300' },
  { text: "else:", color: 'text-fuchsia-400' },
  { text: '    print("you are a Lazy Student")', color: 'text-red-400' },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      setDone(true)
      return
    }
    const line = codeLines[currentLine].text
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev]
          updated[currentLine] = line.slice(0, currentChar + 1)
          return updated
        })
        setCurrentChar((c) => c + 1)
      }, 28)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1)
        setCurrentChar(0)
      }, 120)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar])

  return (
    <AuroraBackground className="relative min-h-screen bg-dark-bg pt-20">
      {/* Grid background — subtle over the aurora */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      {/* Radial glow — top right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl" />
      </div>
      {/* Radial glow — bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-accent/10 via-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 items-center w-full">

          {/* Left — Text */}
          <div className="flex flex-col">
            <motion.div
              {...fadeUp}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-xs font-semibold mb-8 tracking-wide">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Cours disponibles maintenant
                <ChevronRight className="w-3 h-3 opacity-60" />
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.0] text-slate-100 mb-6"
            >
              Together we go{' '}
              <span className="gradient-text-violet italic">Further</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg font-normal"
            >
              Rejoignez <span className="font-semibold text-slate-200">Digital Campus Dz</span>, l&apos;école fondée par des étudiants pour des étudiants.
              Cours en ligne en{' '}
              <span className="font-semibold text-slate-200">informatique, digital et marketing</span>{' '}
              — en direct via Google Meet.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-glow-violet hover:shadow-glow-violet-lg group"
              >
                Commencer maintenant
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/formations"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 border border-white/[0.1] hover:border-primary/40 hover:text-white hover:bg-primary/5 transition-all duration-200"
              >
                Voir les formations
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/[0.06]"
            >
              {[
                { value: '9+', label: 'Formations', accent: 'text-primary-light' },
                { value: '100%', label: 'En ligne', accent: 'text-accent' },
                { value: '24/7', label: 'Support', accent: 'text-emerald-400' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div>
                    <p className={`font-heading text-3xl font-bold ${stat.accent}`}>{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                  {i < 2 && <div className="h-8 w-px bg-white/[0.08]" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] shadow-[0_0_60px_rgba(124,58,237,0.12)] ring-1 ring-primary/10">
              {/* Terminal header */}
              <div className="bg-[#0D1117] border-b border-white/[0.06] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-slate-500 text-xs font-mono">digital_campus_dz.py</span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="bg-[#080B14] p-6 font-mono text-sm min-h-[300px]">
                <div className="text-slate-600 mb-4 text-xs">
                  <span className="text-emerald-400">▶</span>
                  <span className="ml-2">python digital_campus_dz.py</span>
                </div>
                {codeLines.map((line, i) => (
                  <div key={i} className="leading-7">
                    {displayedLines[i] !== undefined ? (
                      <span className={line.color}>{displayedLines[i]}</span>
                    ) : null}
                    {i === currentLine && !done && (
                      <span className="inline-block w-2 h-4 bg-violet-400 cursor-blink ml-0.5 opacity-90" />
                    )}
                  </div>
                ))}
                {done && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 text-emerald-400 text-xs flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    Programme exécuté avec succès. Rejoins D.C.D dès aujourd&apos;hui !
                  </motion.div>
                )}
              </div>
            </div>

            {/* Google Meet badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              className="flex items-center gap-3 bg-dark-card border border-white/[0.07] rounded-xl px-4 py-3 shadow-card-dark"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary-light">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200">Cours via Google Meet</p>
                <p className="text-xs text-slate-500">Sessions en direct, interactives et enregistrées</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">Live</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  )
}
