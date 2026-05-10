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
      className="w-4 h-4 flex-shrink-0 text-gray-400"
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
                    ? 'border-[#2563EB]/25 bg-white shadow-sm'
                    : 'border-gray-100 bg-[#F4F3EF] hover:border-gray-200'
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
                        isOpen ? 'bg-[#2563EB]' : 'bg-gray-200'
                      }`}
                    />
                    <span className="font-medium text-gray-900 text-sm leading-snug">
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
                      <p className="px-5 pb-5 pl-11 text-sm text-gray-500 leading-relaxed">
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
