'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const codeLines = [
  { text: "hesitation = perte = int('0')", color: 'text-green-400' },
  { text: "DCD = 'Digital Campus Dz'", color: 'text-blue-400' },
  { text: "if \"t'es décidé\":", color: 'text-purple-400' },
  { text: "    'rejoint D.C.D'", color: 'text-yellow-300' },
  { text: "elif hesitation == True:", color: 'text-purple-400' },
  { text: '    "viens Découvrir et assister à nos cours Graaaatis"', color: 'text-yellow-300' },
  { text: "else:", color: 'text-purple-400' },
  { text: '    print("you are a Lazy Student")', color: 'text-red-400' },
]

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#eff6ff_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#ecfdf5_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2563EB]/8 border border-[#2563EB]/20 rounded-full text-[#2563EB] text-xs font-semibold mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 bg-[#059669] rounded-full animate-pulse" />
              Cours disponibles maintenant
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-gray-900 mb-6 tracking-tight">
              Together we go{' '}
              <span className="text-[#2563EB]">Further</span>
            </h1>

            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg font-normal">
              Rejoignez <span className="font-semibold text-gray-700">Digital Campus Dz</span>, l&apos;école fondée par des étudiants pour des étudiants.
              Cours en ligne en <span className="font-semibold text-gray-700">informatique, digital et marketing</span> — en direct via Google Meet.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/inscription" color="blue" className="text-sm px-7 py-3.5">
                Commencer maintenant →
              </Button>
              <Button href="/formations" variant="outline" color="blue" className="text-sm px-7 py-3.5">
                Voir les formations
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
              {[
                { value: '9+', label: 'Formations', color: '#2563EB' },
                { value: '100%', label: 'En ligne', color: '#DC2626' },
                { value: '24/7', label: 'Support', color: '#059669' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold tracking-tight" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 ring-1 ring-black/5">
              {/* Terminal header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#DC2626]" />
                  <div className="w-3 h-3 rounded-full bg-[#D97706]" />
                  <div className="w-3 h-3 rounded-full bg-[#059669]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-xs font-mono">digital_campus_dz.py</span>
                </div>
              </div>
              {/* Terminal body */}
              <div className="bg-[#0D1117] p-6 font-mono text-sm min-h-[300px]">
                <div className="text-gray-500 mb-4 text-xs">
                  <span className="text-[#059669]">▶</span> python digital_campus_dz.py
                </div>
                {codeLines.map((line, i) => (
                  <div key={i} className="leading-7">
                    {displayedLines[i] !== undefined ? (
                      <span className={line.color}>{displayedLines[i]}</span>
                    ) : null}
                    {i === currentLine && !done && (
                      <span className="inline-block w-2 h-4 bg-white cursor-blink ml-0.5" />
                    )}
                  </div>
                ))}
                {done && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-[#059669] text-xs"
                  >
                    <span className="mr-2">✓</span>Programme exécuté avec succès. Rejoins D.C.D dès aujourd&apos;hui !
                  </motion.div>
                )}
              </div>
            </div>

            {/* Google Meet badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-4 flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm"
            >
              <div className="w-10 h-10 bg-[#2563EB]/8 rounded-xl flex items-center justify-center text-xl">
                📹
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Cours via Google Meet</p>
                <p className="text-xs text-gray-400">Sessions en direct, interactives et enregistrées</p>
              </div>
              <div className="ml-auto w-2.5 h-2.5 bg-[#059669] rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
