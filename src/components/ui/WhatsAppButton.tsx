'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.a
      href="https://wa.me/213XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{ backgroundColor: '#25D366' }}
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.493.655 4.833 1.8 6.862L2 30l7.338-1.775A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.558 11.558 0 01-5.9-1.614l-.424-.252-4.354 1.053 1.083-4.24-.277-.437A11.574 11.574 0 014.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6zm6.338-8.675c-.347-.174-2.055-1.013-2.374-1.129-.319-.116-.551-.174-.784.174-.232.347-.9 1.129-1.103 1.361-.203.232-.405.26-.752.087-.347-.174-1.465-.54-2.79-1.72-1.031-.92-1.727-2.056-1.929-2.403-.203-.347-.022-.535.152-.708.156-.155.347-.405.52-.608.174-.203.232-.347.347-.579.116-.232.058-.434-.029-.608-.087-.174-.784-1.89-1.074-2.588-.283-.68-.57-.588-.784-.598l-.667-.011c-.232 0-.608.087-.927.434-.319.347-1.218 1.19-1.218 2.9s1.247 3.364 1.42 3.596c.174.232 2.454 3.748 5.946 5.256.831.358 1.48.572 1.986.733.834.265 1.594.228 2.195.138.67-.1 2.055-.84 2.346-1.652.29-.812.29-1.508.203-1.652-.086-.145-.318-.232-.666-.405z" />
      </svg>

      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: '#25D366' }}
      />
    </motion.a>
  )
}
