'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import DCDLogo from '@/components/ui/DCDLogo'

interface Inscription {
  id: string
  created_at: string
  prenom: string
  nom: string
  email: string
  telephone: string
  formation: string
  message: string | null
  statut: 'nouveau' | 'contacté' | 'inscrit' | 'annulé'
}

const statutColors: Record<string, string> = {
  nouveau: 'bg-[#4285F4]/10 text-[#4285F4]',
  contacté: 'bg-[#FBBC05]/15 text-[#d97706]',
  inscrit: 'bg-[#34A853]/10 text-[#34A853]',
  annulé: 'bg-[#EA4335]/10 text-[#EA4335]',
}

const formationLabels: Record<string, string> = {
  python: '🐍 Python',
  'dev-web': '🌐 Dev Web',
  django: '⚙️ Django',
  'data-science': '📊 Data Science',
  sql: '🗄️ SQL',
  flutter: '📱 Flutter',
}

export default function AdminDashboard() {
  const [inscriptions, setInscriptions] = useState<Inscription[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterFormation, setFilterFormation] = useState('tous')
  const [filterStatut, setFilterStatut] = useState('tous')
  const router = useRouter()

  const fetchData = useCallback(async () => {
    const res = await fetch('/api/inscriptions')
    if (res.status === 401) {
      router.push('/admin')
      return
    }
    const data = await res.json()
    setInscriptions(data)
    setLoading(false)
  }, [router])

  useEffect(() => { fetchData() }, [fetchData])

  const handleStatut = async (id: string, statut: string) => {
    await fetch(`/api/inscriptions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ statut }),
    })
    setInscriptions((prev) =>
      prev.map((i) => (i.id === id ? { ...i, statut: statut as Inscription['statut'] } : i))
    )
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cet étudiant ?')) return
    await fetch(`/api/inscriptions/${id}`, { method: 'DELETE' })
    setInscriptions((prev) => prev.filter((i) => i.id !== id))
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  const exportCSV = () => {
    const headers = ['Prénom', 'Nom', 'Email', 'Téléphone', 'Formation', 'Statut', 'Message', 'Date']
    const rows = filtered.map((i) => [
      i.prenom, i.nom, i.email, i.telephone,
      formationLabels[i.formation] || i.formation,
      i.statut,
      i.message || '',
      new Date(i.created_at).toLocaleDateString('fr-DZ'),
    ])
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${v}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `inscriptions_dcd_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const filtered = inscriptions.filter((i) => {
    const matchSearch = `${i.prenom} ${i.nom} ${i.email}`.toLowerCase().includes(search.toLowerCase())
    const matchFormation = filterFormation === 'tous' || i.formation === filterFormation
    const matchStatut = filterStatut === 'tous' || i.statut === filterStatut
    return matchSearch && matchFormation && matchStatut
  })

  const stats = {
    total: inscriptions.length,
    nouveau: inscriptions.filter((i) => i.statut === 'nouveau').length,
    inscrit: inscriptions.filter((i) => i.statut === 'inscrit').length,
    thisWeek: inscriptions.filter((i) => {
      const d = new Date(i.created_at)
      const now = new Date()
      return (now.getTime() - d.getTime()) < 7 * 24 * 60 * 60 * 1000
    }).length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <DCDLogo size="sm" />
            <span className="text-sm font-semibold text-gray-500 border-l border-gray-200 pl-4">
              Dashboard Admin
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-[#EA4335] transition-colors flex items-center gap-1.5"
          >
            <span>Déconnexion</span>
            <span>→</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total inscrits', value: stats.total, color: '#4285F4', icon: '👥' },
            { label: 'Nouveaux', value: stats.nouveau, color: '#FBBC05', icon: '🆕' },
            { label: 'Confirmés', value: stats.inscrit, color: '#34A853', icon: '✅' },
            { label: 'Cette semaine', value: stats.thisWeek, color: '#EA4335', icon: '📅' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{s.icon}</span>
                <span className="text-xs text-gray-400 font-medium">{s.label}</span>
              </div>
              <p className="text-4xl font-black" style={{ color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="🔍 Rechercher par nom, prénom ou email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#34A853] focus:ring-2 focus:ring-[#34A853]/20"
            />
            <select
              value={filterFormation}
              onChange={(e) => setFilterFormation(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#34A853] bg-white"
            >
              <option value="tous">Toutes les formations</option>
              {Object.entries(formationLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
            <select
              value={filterStatut}
              onChange={(e) => setFilterStatut(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#34A853] bg-white"
            >
              <option value="tous">Tous les statuts</option>
              <option value="nouveau">Nouveau</option>
              <option value="contacté">Contacté</option>
              <option value="inscrit">Inscrit</option>
              <option value="annulé">Annulé</option>
            </select>
            <button
              onClick={exportCSV}
              className="px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              ⬇️ Export CSV
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            {filtered.length} résultat{filtered.length > 1 ? 's' : ''} sur {inscriptions.length} inscription{inscriptions.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-4xl mb-3">⏳</div>
              <p>Chargement des inscriptions...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-4xl mb-3">📭</div>
              <p>Aucune inscription trouvée</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    {['Étudiant', 'Contact', 'Formation', 'Statut', 'Date', 'Actions'].map((h) => (
                      <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-gray-900">{item.prenom} {item.nom}</p>
                        {item.message && (
                          <p className="text-xs text-gray-400 mt-0.5 max-w-[180px] truncate" title={item.message}>
                            💬 {item.message}
                          </p>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-gray-700">{item.email}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{item.telephone}</p>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-gray-700">{formationLabels[item.formation] || item.formation}</span>
                      </td>
                      <td className="px-5 py-4">
                        <select
                          value={item.statut}
                          onChange={(e) => handleStatut(item.id, e.target.value)}
                          className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border-0 outline-none cursor-pointer ${statutColors[item.statut]}`}
                        >
                          <option value="nouveau">Nouveau</option>
                          <option value="contacté">Contacté</option>
                          <option value="inscrit">Inscrit</option>
                          <option value="annulé">Annulé</option>
                        </select>
                      </td>
                      <td className="px-5 py-4 text-gray-400 text-xs whitespace-nowrap">
                        {new Date(item.created_at).toLocaleDateString('fr-DZ', {
                          day: '2-digit', month: 'short', year: 'numeric'
                        })}
                      </td>
                      <td className="px-5 py-4">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-gray-300 hover:text-[#EA4335] transition-colors text-lg"
                          title="Supprimer"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
