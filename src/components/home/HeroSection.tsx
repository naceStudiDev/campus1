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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Background decorative circles */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#4285F4]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#34A853]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EA4335]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4285F4]/10 rounded-full text-[#4285F4] text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#34A853] rounded-full animate-pulse" />
              Cours disponibles maintenant
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-6">
              Apprends à coder{' '}
              <span style={{ color: '#4285F4' }}>en ligne</span>,{' '}
              <span style={{ color: '#EA4335' }}>depuis</span>{' '}
              <span style={{ color: '#34A853' }}>l&apos;Algérie</span>
            </h1>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
              Des cours en direct via <strong>Google Meet</strong>, des professeurs disponibles,
              un suivi personnalisé — tout ça pour toi, où que tu sois en Algérie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/inscription" color="blue" className="text-base px-8 py-4">
                Commencer maintenant →
              </Button>
              <Button href="/formations" variant="outline" color="blue" className="text-base px-8 py-4">
                Voir les formations
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
              {[
                { value: '6+', label: 'Formations', color: '#4285F4' },
                { value: '100%', label: 'En ligne', color: '#EA4335' },
                { value: '24/7', label: 'Support', color: '#34A853' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
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
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Terminal header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#EA4335]" />
                  <div className="w-3 h-3 rounded-full bg-[#FBBC05]" />
                  <div className="w-3 h-3 rounded-full bg-[#34A853]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-xs font-mono">digital_campus_dz.py</span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="bg-gray-900 p-6 font-mono text-sm min-h-[300px]">
                <div className="text-gray-500 mb-4 text-xs">
                  <span className="text-[#34A853]">▶</span> python digital_campus_dz.py
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
                    className="mt-4 text-[#34A853] text-xs"
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
              <div className="w-10 h-10 bg-[#4285F4]/10 rounded-lg flex items-center justify-center text-xl">
                📹
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Cours via Google Meet</p>
                <p className="text-xs text-gray-500">Sessions en direct, interactives et enregistrées</p>
              </div>
              <div className="ml-auto w-3 h-3 bg-[#34A853] rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
