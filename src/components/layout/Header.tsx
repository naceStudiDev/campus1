'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import DCDLogo from '@/components/ui/DCDLogo'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Formations', href: '/formations' },
  { label: 'Bibliothèque', href: '/bibliotheque' },
  { label: 'Forum', href: '/forum' },
  { label: 'Comment ça marche', href: '/comment-ca-marche' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-200/60'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <DCDLogo size="md" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#2563EB]'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-[#2563EB]"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/inscription"
              className="px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              S&apos;inscrire
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-black/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${menuOpen ? 'rotate-45 w-5' : 'w-5'}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${menuOpen ? '-rotate-45 w-5' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-200/60 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                      isActive
                        ? 'bg-[#2563EB]/8 text-[#2563EB] font-semibold'
                        : 'text-gray-600 hover:bg-black/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2 mt-2 border-t border-gray-100">
                <Link
                  href="/inscription"
                  className="block w-full text-center px-4 py-3 rounded-xl text-white font-semibold text-sm bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors"
                >
                  S&apos;inscrire gratuitement
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
