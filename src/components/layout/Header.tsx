'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import DCDLogo from '@/components/ui/DCDLogo'
import { supabase } from '@/lib/supabase-browser'
import { User } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Formations', href: '/formations' },
  { label: 'Bibliothèque', href: '/bibliotheque' },
  { label: 'Forum', href: '/forum' },
  { label: 'Annonces', href: '/annonces' },
  { label: 'Comment ça marche', href: '/comment-ca-marche' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hasSession, setHasSession] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setHasSession(!!data.session))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setHasSession(!!session)
    })
    return () => subscription.unsubscribe()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.5)]'
          : 'bg-dark-bg/60 backdrop-blur-md'
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
                      ? 'text-primary-light'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-primary-light"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {hasSession ? (
              <Link
                href="/mon-espace"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-algerie hover:bg-algerie-dark transition-all duration-200 shadow-glow-algerie"
              >
                <User className="w-4 h-4" />
                Mon espace
              </Link>
            ) : (
              <>
                <Link
                  href="/connexion"
                  className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-white/[0.05] rounded-xl transition-all duration-200"
                >
                  <User className="w-3.5 h-3.5" />
                  Connexion
                </Link>
                <Link
                  href="/inscription"
                  className="relative px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-glow-violet hover:shadow-glow-violet-lg group"
                >
                  <span className="relative z-10">S&apos;inscrire</span>
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-white/[0.05] transition-colors"
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
            className="lg:hidden bg-dark-card border-t border-white/[0.06] shadow-lg overflow-hidden"
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
                        ? 'bg-primary/10 text-primary-light font-semibold'
                        : 'text-slate-400 hover:bg-white/[0.05] hover:text-slate-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2 mt-2 border-t border-white/[0.06] flex flex-col gap-2">
                {hasSession ? (
                  <Link
                    href="/mon-espace"
                    className="flex items-center justify-center gap-2 w-full text-center px-4 py-3 rounded-xl text-white font-semibold text-sm bg-algerie hover:bg-algerie-dark transition-colors"
                  >
                    <User className="w-4 h-4" />
                    Mon espace
                  </Link>
                ) : (
                  <Link
                    href="/connexion"
                    className="flex items-center justify-center gap-2 w-full text-center px-4 py-3 rounded-xl text-slate-300 font-medium text-sm border border-white/[0.08] hover:bg-white/[0.05] transition-colors"
                  >
                    <User className="w-4 h-4" />
                    Connexion
                  </Link>
                )}
                <Link
                  href="/inscription"
                  className="block w-full text-center px-4 py-3 rounded-xl text-white font-semibold text-sm bg-primary hover:bg-primary-dark transition-colors"
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
