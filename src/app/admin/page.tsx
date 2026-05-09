'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DCDLogo from '@/components/ui/DCDLogo'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/admin/dashboard')
    } else {
      setError('Mot de passe incorrect')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <DCDLogo size="lg" />
          </div>
          <h1 className="text-2xl font-black text-gray-900">Espace Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Accès réservé à l&apos;équipe D.C.D</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mot de passe admin
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#34A853] focus:ring-2 focus:ring-[#34A853]/20 transition-colors"
              required
            />
          </div>

          {error && (
            <p className="text-[#EA4335] text-sm mb-4 bg-[#EA4335]/10 px-3 py-2 rounded-lg">
              ❌ {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-bold text-sm transition-all hover:shadow-lg disabled:opacity-60"
            style={{ background: 'linear-gradient(135deg, #34A853 0%, #2d8f47 100%)' }}
          >
            {loading ? 'Connexion...' : 'Se connecter →'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Digital Campus Dz — Admin v1.0
        </p>
      </div>
    </div>
  )
}
