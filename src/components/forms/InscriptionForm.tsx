'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { formations } from '@/data/formations'

interface FormData {
  prenom: string
  nom: string
  email: string
  telephone: string
  formation: string
  message?: string
}

export default function InscriptionForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setServerError('')
    const res = await fetch('/api/inscriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setSubmitted(true)
    } else {
      const err = await res.json()
      setServerError(err.error || 'Une erreur est survenue, réessaie.')
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-2xl font-black text-gray-900 mb-3">Inscription envoyée !</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Merci ! Notre équipe va te contacter dans les 24h avec les détails de ta première session Google Meet.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#34A853]/10 text-[#34A853] rounded-full text-sm font-semibold">
          <span className="w-2 h-2 bg-[#34A853] rounded-full animate-pulse" />
          Inscription enregistrée avec succès
        </div>
      </motion.div>
    )
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-gray-900 bg-white placeholder:text-gray-400 transition-colors outline-none focus:ring-2 ${
      hasError
        ? 'border-[#EA4335] focus:ring-[#EA4335]/30'
        : 'border-gray-200 focus:border-[#34A853] focus:ring-[#34A853]/20'
    }`

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Prénom *</label>
          <input
            {...register('prenom', { required: 'Prénom requis' })}
            placeholder="ex : Amine"
            className={inputClass(!!errors.prenom)}
          />
          {errors.prenom && <p className="text-[#EA4335] text-xs mt-1">{errors.prenom.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom *</label>
          <input
            {...register('nom', { required: 'Nom requis' })}
            placeholder="ex : Boudiaf"
            className={inputClass(!!errors.nom)}
          />
          {errors.nom && <p className="text-[#EA4335] text-xs mt-1">{errors.nom.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
        <input
          {...register('email', {
            required: 'Email requis',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' },
          })}
          type="email"
          placeholder="exemple@email.com"
          className={inputClass(!!errors.email)}
        />
        {errors.email && <p className="text-[#EA4335] text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Téléphone *</label>
        <input
          {...register('telephone', {
            required: 'Téléphone requis',
            pattern: { value: /^[0-9+\s()-]{9,15}$/, message: 'Numéro invalide' },
          })}
          type="tel"
          placeholder="05 XX XX XX XX"
          className={inputClass(!!errors.telephone)}
        />
        {errors.telephone && <p className="text-[#EA4335] text-xs mt-1">{errors.telephone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Formation choisie *</label>
        <select
          {...register('formation', { required: 'Veuillez choisir une formation' })}
          className={`${inputClass(!!errors.formation)} bg-white`}
        >
          <option value="">-- Sélectionner une formation --</option>
          {formations.map((f) => (
            <option key={f.id} value={f.id}>
              {f.icon} {f.title} ({f.level} — {f.duration})
            </option>
          ))}
        </select>
        {errors.formation && <p className="text-[#EA4335] text-xs mt-1">{errors.formation.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message (optionnel)</label>
        <textarea
          {...register('message')}
          rows={3}
          placeholder="Des questions ? Dis-nous en plus sur ton niveau actuel..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-colors outline-none focus:border-[#34A853] focus:ring-2 focus:ring-[#34A853]/20 resize-none"
        />
      </div>

      {serverError && (
        <p className="text-[#EA4335] text-sm bg-[#EA4335]/10 px-4 py-3 rounded-xl">
          ❌ {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed text-sm"
        style={{ background: 'linear-gradient(135deg, #34A853 0%, #2d8f47 100%)' }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Envoi en cours...
          </span>
        ) : (
          'Envoyer mon inscription →'
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        🔒 Tes données sont confidentielles et ne seront jamais partagées.
      </p>
    </form>
  )
}
