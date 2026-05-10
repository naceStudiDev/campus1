'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqItems } from '@/data/faq'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25 }}
      className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${open ? 'text-primary-light' : 'text-slate-500'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id="faq" className="py-24 bg-dark-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">FAQ</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-100 leading-tight">
            Questions{' '}
            <span className="italic gradient-text-violet">fréquentes</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">Tout ce que tu veux savoir avant de te lancer.</p>
        </motion.div>

        <div className="space-y-2">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            const itemId = `faq-answer-${i}`
            const triggerId = `faq-trigger-${i}`

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-primary/25 bg-[#0D1017]'
                    : 'border-white/[0.06] bg-dark-card hover:border-white/[0.1]'
                }`}
              >
                <button
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={itemId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-0.5 h-4 rounded-full flex-shrink-0 transition-colors duration-200 ${
                        isOpen ? 'bg-primary-light' : 'bg-white/[0.1]'
                      }`}
                    />
                    <span className={`font-medium text-sm leading-snug transition-colors duration-200 ${isOpen ? 'text-slate-100' : 'text-slate-300'}`}>
                      {item.question}
                    </span>
                  </div>
                  <ChevronIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={itemId}
                      role="region"
                      aria-labelledby={triggerId}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-11 text-sm text-slate-400 leading-relaxed">
                        {item.reponse}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
