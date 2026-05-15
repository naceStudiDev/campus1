'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface ContactData {
  nom: string
  email: string
  sujet: string
  message: string
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactData>()

  const onSubmit = async (data: ContactData) => {
    await new Promise((r) => setTimeout(r, 1000))
    console.log('Contact:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-black text-gray-900 mb-2">Message envoyé !</h3>
        <p className="text-gray-500">On te répondra dans les meilleurs délais.</p>
      </motion.div>
    )
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-gray-900 bg-white placeholder:text-gray-400 transition-colors outline-none focus:ring-2 ${
      hasError
        ? 'border-[#EA4335] focus:ring-[#EA4335]/30'
        : 'border-gray-200 focus:border-[#4285F4] focus:ring-[#4285F4]/20'
    }`

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom complet *</label>
        <input
          {...register('nom', { required: 'Nom requis' })}
          placeholder="Ton nom complet"
          className={inputClass(!!errors.nom)}
        />
        {errors.nom && <p className="text-[#EA4335] text-xs mt-1">{errors.nom.message}</p>}
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
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Sujet *</label>
        <select
          {...register('sujet', { required: 'Sujet requis' })}
          className={`${inputClass(!!errors.sujet)} bg-white`}
        >
          <option value="">-- Choisir un sujet --</option>
          <option value="inscription">Question sur l&apos;inscription</option>
          <option value="formation">Informations sur une formation</option>
          <option value="technique">Problème technique</option>
          <option value="autre">Autre</option>
        </select>
        {errors.sujet && <p className="text-[#EA4335] text-xs mt-1">{errors.sujet.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
        <textarea
          {...register('message', { required: 'Message requis', minLength: { value: 10, message: 'Message trop court (min 10 caractères)' } })}
          rows={5}
          placeholder="Écris ton message ici..."
          className={`${inputClass(!!errors.message)} resize-none`}
        />
        {errors.message && <p className="text-[#EA4335] text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#4285F4] hover:bg-[#3367d6] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-60 text-sm"
      >
        {isSubmitting ? 'Envoi...' : 'Envoyer le message →'}
      </button>
    </form>
  )
}
