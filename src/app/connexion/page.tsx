'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MeshGradientBg from '@/components/ui/MeshGradientBg'
import { supabase } from '@/lib/supabase-browser'
import { Mail, ArrowRight, CheckCircle2, Loader2, Lock, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function ConnexionPage() {
  const [email, setEmail] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    // Sauvegarde la préférence AVANT l'envoi — lue par supabase-browser au callback
    localStorage.setItem('dcd_rm', rememberMe ? '1' : '0')

    setStatus('loading')
    setErrorMsg('')

    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setStatus('error')
      setErrorMsg(error.message)
    } else {
      setStatus('sent')
    }
  }

  return (
    <>
      <MeshGradientBg color1="#7C3AED" color2="#006233" className="min-h-screen flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full px-4 py-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-card border border-white/[0.08] rounded-3xl p-8 shadow-card-dark"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl mb-5">
                <Lock className="w-6 h-6 text-primary-light" />
              </div>
              <h1 className="font-heading text-2xl font-bold text-slate-100 mb-2">
                Accéder à mon espace
              </h1>
              <p className="text-sm text-slate-400 leading-relaxed">
                Saisis ton adresse email. On t'envoie un lien de connexion instantané — aucun mot de passe à retenir.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                /* ── État : lien envoyé ── */
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-16 h-16 bg-algerie/10 border border-algerie/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-algerie-light" />
                  </div>
                  <h2 className="font-heading text-lg font-bold text-slate-100 mb-2">Vérifie ta boîte mail</h2>
                  <p className="text-sm text-slate-400 mb-2">Un lien de connexion a été envoyé à</p>
                  <p className="text-sm font-semibold text-primary-light mb-4">{email}</p>

                  {rememberMe && (
                    <div className="flex items-center justify-center gap-2 text-xs text-algerie-light bg-algerie/10 border border-algerie/20 rounded-xl px-4 py-2.5 mb-4">
                      <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                      Tu resteras connecté(e) après ce premier lien.
                    </div>
                  )}

                  <p className="text-xs text-slate-600">
                    Le lien est valable 10 minutes. Pense à vérifier tes spams.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-xs text-slate-500 hover:text-slate-300 underline underline-offset-4 transition-colors"
                  >
                    Utiliser une autre adresse
                  </button>
                </motion.div>
              ) : (
                /* ── Formulaire ── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                      Adresse email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="ton.email@exemple.com"
                        required
                        className="w-full bg-dark-bg border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Case "Rester connecté" */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={e => setRememberMe(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                        rememberMe
                          ? 'bg-primary border-primary'
                          : 'bg-transparent border-white/[0.2] group-hover:border-white/[0.4]'
                      }`}>
                        {rememberMe && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
                        Rester connecté(e)
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {rememberMe
                          ? 'Tu n\'auras besoin de ce lien qu\'une seule fois sur cet appareil.'
                          : 'La session se fermera quand tu fermes le navigateur.'}
                      </p>
                    </div>
                  </label>

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2"
                    >
                      {errorMsg || 'Une erreur est survenue. Réessaie.'}
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading' || !email.trim()}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-glow-violet hover:shadow-glow-violet-lg group"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" />Envoi en cours…</>
                    ) : (
                      <>Recevoir le lien magique<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-600 pt-1">
                    Utilise l'adresse email avec laquelle tu t'es inscrit(e).
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <p className="text-center text-xs text-slate-600 mt-6">
            Pas encore inscrit ?{' '}
            <Link href="/inscription" className="text-primary-light hover:text-primary underline underline-offset-4 transition-colors">
              Voir les formations
            </Link>
          </p>
        </div>
      </MeshGradientBg>
    </>
  )
}
