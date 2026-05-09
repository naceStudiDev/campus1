'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { faqItems } from '@/data/faq'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25 }}
      className="w-5 h-5 flex-shrink-0 text-gray-400"
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
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Questions fréquentes"
          subtitle="Tout ce que tu veux savoir avant de te lancer."
          accent="blue"
        />

        <div className="space-y-3">
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
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#4285F4]/30 bg-[#4285F4]/[0.03]'
                    : 'border-gray-100 bg-gray-50'
                }`}
              >
                {/* Trigger */}
                <button
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={itemId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Left accent bar */}
                    <div
                      className={`w-1 h-5 rounded-full flex-shrink-0 transition-colors duration-200 ${
                        isOpen ? 'bg-[#4285F4]' : 'bg-transparent'
                      }`}
                    />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronIcon open={isOpen} />
                </button>

                {/* Answer */}
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
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pl-[3.25rem] text-sm text-gray-600 leading-relaxed">
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
