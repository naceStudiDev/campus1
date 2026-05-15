'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import DCDLogo from '@/components/ui/DCDLogo'

// ─── Inscriptions ────────────────────────────────────────────────────────────

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

// ─── Annonces ────────────────────────────────────────────────────────────────

type AnnonceType = 'formation' | 'webinaire' | 'offre' | 'evenement'

interface Annonce {
  id: string
  title: string
  description: string
  date: string
  type: AnnonceType
  badge: string | null
  is_urgent: boolean
  cta_label: string
  cta_url: string
  created_at: string
}

const typeLabels: Record<AnnonceType, string> = {
  formation: '🎓 Formation',
  webinaire: '🎥 Webinaire',
  offre: '🏷️ Offre',
  evenement: '⭐ Événement',
}

const emptyForm = {
  title: '',
  description: '',
  date: '',
  type: 'formation' as AnnonceType,
  badge: '',
  is_urgent: false,
  cta_label: '',
  cta_url: '',
}

// ─── Dashboard ───────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'inscriptions' | 'annonces'>('inscriptions')

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 md:pt-20">
      <header className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <DCDLogo size="sm" />
            <nav className="flex gap-1">
              {(['inscriptions', 'annonces'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors capitalize ${
                    activeTab === tab
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab === 'inscriptions' ? '👥 Inscriptions' : '📢 Annonces'}
                </button>
              ))}
            </nav>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-[#EA4335] transition-colors flex items-center gap-1.5"
          >
            Déconnexion →
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'inscriptions' ? <InscriptionsTab /> : <AnnoncesTab />}
      </main>
    </div>
  )
}

// ─── Onglet Inscriptions ─────────────────────────────────────────────────────

function InscriptionsTab() {
  const router = useRouter()
  const [inscriptions, setInscriptions] = useState<Inscription[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterFormation, setFilterFormation] = useState('tous')
  const [filterStatut, setFilterStatut] = useState('tous')

  const fetchData = useCallback(async () => {
    const res = await fetch('/api/inscriptions')
    if (res.status === 401) { router.push('/admin'); return }
    setInscriptions(await res.json())
    setLoading(false)
  }, [router])

  useEffect(() => { fetchData() }, [fetchData])

  const handleStatut = async (id: string, statut: string) => {
    await fetch(`/api/inscriptions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ statut }),
    })
    setInscriptions((prev) => prev.map((i) => i.id === id ? { ...i, statut: statut as Inscription['statut'] } : i))
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cet étudiant ?')) return
    await fetch(`/api/inscriptions/${id}`, { method: 'DELETE' })
    setInscriptions((prev) => prev.filter((i) => i.id !== id))
  }

  const exportCSV = () => {
    const headers = ['Prénom', 'Nom', 'Email', 'Téléphone', 'Formation', 'Statut', 'Message', 'Date']
    const rows = filtered.map((i) => [
      i.prenom, i.nom, i.email, i.telephone,
      formationLabels[i.formation] || i.formation,
      i.statut, i.message || '',
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
    thisWeek: inscriptions.filter((i) => (Date.now() - new Date(i.created_at).getTime()) < 7 * 864e5).length,
  }

  return (
    <>
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

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="🔍 Rechercher par nom, prénom ou email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#34A853] focus:ring-2 focus:ring-[#34A853]/20"
          />
          <select value={filterFormation} onChange={(e) => setFilterFormation(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#34A853] bg-white">
            <option value="tous">Toutes les formations</option>
            {Object.entries(formationLabels).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
          <select value={filterStatut} onChange={(e) => setFilterStatut(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#34A853] bg-white">
            <option value="tous">Tous les statuts</option>
            <option value="nouveau">Nouveau</option>
            <option value="contacté">Contacté</option>
            <option value="inscrit">Inscrit</option>
            <option value="annulé">Annulé</option>
          </select>
          <button onClick={exportCSV}
            className="px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2 whitespace-nowrap">
            ⬇️ Export CSV
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          {filtered.length} résultat{filtered.length > 1 ? 's' : ''} sur {inscriptions.length} inscription{inscriptions.length > 1 ? 's' : ''}
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="text-center py-20 text-gray-400"><div className="text-4xl mb-3">⏳</div><p>Chargement...</p></div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400"><div className="text-4xl mb-3">📭</div><p>Aucune inscription trouvée</p></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {['Étudiant', 'Contact', 'Formation', 'Statut', 'Date', 'Actions'].map((h) => (
                    <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-gray-900">{item.prenom} {item.nom}</p>
                      {item.message && (
                        <p className="text-xs text-gray-400 mt-0.5 max-w-[180px] truncate" title={item.message}>💬 {item.message}</p>
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
                      <select value={item.statut} onChange={(e) => handleStatut(item.id, e.target.value)}
                        className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border-0 outline-none cursor-pointer ${statutColors[item.statut]}`}>
                        <option value="nouveau">Nouveau</option>
                        <option value="contacté">Contacté</option>
                        <option value="inscrit">Inscrit</option>
                        <option value="annulé">Annulé</option>
                      </select>
                    </td>
                    <td className="px-5 py-4 text-gray-400 text-xs whitespace-nowrap">
                      {new Date(item.created_at).toLocaleDateString('fr-DZ', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-5 py-4">
                      <button onClick={() => handleDelete(item.id)}
                        className="text-gray-300 hover:text-[#EA4335] transition-colors text-lg" title="Supprimer">
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
    </>
  )
}

// ─── Onglet Annonces ─────────────────────────────────────────────────────────

function AnnoncesTab() {
  const [annonces, setAnnonces] = useState<Annonce[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const fetchAnnonces = useCallback(async () => {
    const res = await fetch('/api/annonces')
    setAnnonces(await res.json())
    setLoading(false)
  }, [])

  useEffect(() => { fetchAnnonces() }, [fetchAnnonces])

  const openCreate = () => {
    setForm(emptyForm)
    setEditingId(null)
    setError('')
    setShowForm(true)
  }

  const openEdit = (a: Annonce) => {
    setForm({
      title: a.title,
      description: a.description,
      date: a.date,
      type: a.type,
      badge: a.badge || '',
      is_urgent: a.is_urgent,
      cta_label: a.cta_label,
      cta_url: a.cta_url,
    })
    setEditingId(a.id)
    setError('')
    setShowForm(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    const url = editingId ? `/api/annonces/${editingId}` : '/api/annonces'
    const method = editingId ? 'PATCH' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.error || 'Erreur serveur')
      setSaving(false)
      return
    }

    await fetchAnnonces()
    setShowForm(false)
    setSaving(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cette annonce ?')) return
    await fetch(`/api/annonces/${id}`, { method: 'DELETE' })
    setAnnonces((prev) => prev.filter((a) => a.id !== id))
  }

  const inputClass = 'w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 bg-white placeholder:text-gray-400 outline-none focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/20 transition-colors'

  return (
    <>
      {/* Header onglet */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-black text-gray-900">Gestion des annonces</h2>
          <p className="text-sm text-gray-400 mt-0.5">{annonces.length} annonce{annonces.length > 1 ? 's' : ''} publiée{annonces.length > 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={openCreate}
          className="px-5 py-2.5 rounded-xl bg-[#4285F4] text-white text-sm font-semibold hover:bg-[#3367D6] transition-colors flex items-center gap-2"
        >
          + Nouvelle annonce
        </button>
      </div>

      {/* Formulaire création / édition */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-5 text-base">
            {editingId ? '✏️ Modifier l\'annonce' : '➕ Créer une annonce'}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1">Titre *</label>
              <input type="text" required value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="Titre de l'annonce"
                className={inputClass} />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1">Description *</label>
              <textarea required value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                rows={3} placeholder="Description de l'annonce"
                className={inputClass + ' resize-none'} />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Date *</label>
              <input type="date" required value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                className={inputClass} />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Type *</label>
              <select required value={form.type}
                onChange={(e) => setForm((f) => ({ ...f, type: e.target.value as AnnonceType }))}
                className={inputClass + ' bg-white'}>
                <option value="formation">🎓 Formation</option>
                <option value="webinaire">🎥 Webinaire</option>
                <option value="offre">🏷️ Offre</option>
                <option value="evenement">⭐ Événement</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Badge (optionnel)</label>
              <input type="text" value={form.badge}
                onChange={(e) => setForm((f) => ({ ...f, badge: e.target.value }))}
                placeholder="Badge (ex: Nouveau, -30%...)"
                className={inputClass} />
            </div>

            <div className="flex items-center gap-3 pt-5">
              <input type="checkbox" id="is_urgent" checked={form.is_urgent}
                onChange={(e) => setForm((f) => ({ ...f, is_urgent: e.target.checked }))}
                className="w-4 h-4 accent-[#4285F4]" />
              <label htmlFor="is_urgent" className="text-sm font-medium text-gray-700 cursor-pointer">
                ⚡ Marquer comme urgent
              </label>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Texte du bouton CTA *</label>
              <input type="text" required value={form.cta_label}
                onChange={(e) => setForm((f) => ({ ...f, cta_label: e.target.value }))}
                placeholder="Texte du bouton"
                className={inputClass} />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Lien CTA (Google Form) *</label>
              <input type="url" required value={form.cta_url}
                onChange={(e) => setForm((f) => ({ ...f, cta_url: e.target.value }))}
                placeholder="https://forms.gle/..."
                className={inputClass} />
            </div>

            {error && (
              <div className="md:col-span-2 text-[#EA4335] text-sm bg-[#EA4335]/10 px-3 py-2 rounded-lg">
                ❌ {error}
              </div>
            )}

            <div className="md:col-span-2 flex gap-3 pt-2">
              <button type="submit" disabled={saving}
                className="px-6 py-2.5 rounded-xl bg-[#34A853] text-white text-sm font-semibold hover:bg-[#2d8f47] transition-colors disabled:opacity-60">
                {saving ? 'Enregistrement...' : (editingId ? 'Mettre à jour' : 'Publier l\'annonce')}
              </button>
              <button type="button" onClick={() => setShowForm(false)}
                className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Liste des annonces */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="text-center py-20 text-gray-400"><div className="text-4xl mb-3">⏳</div><p>Chargement...</p></div>
        ) : annonces.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-4xl mb-3">📢</div>
            <p className="mb-4">Aucune annonce publiée</p>
            <button onClick={openCreate}
              className="px-5 py-2.5 rounded-xl bg-[#4285F4] text-white text-sm font-semibold hover:bg-[#3367D6] transition-colors">
              Créer la première annonce
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {['Titre', 'Type', 'Date', 'Badge', 'Lien CTA', 'Actions'].map((h) => (
                    <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {annonces.map((a) => {
                  const isPast = new Date(a.date) < new Date()
                  return (
                    <tr key={a.id} className={`hover:bg-gray-50 transition-colors ${isPast ? 'opacity-50' : ''}`}>
                      <td className="px-5 py-4">
                        <p className="font-semibold text-gray-900 max-w-[220px] truncate">{a.title}</p>
                        {a.is_urgent && <span className="text-xs text-orange-500 font-medium">⚡ Urgent</span>}
                        {isPast && <span className="text-xs text-gray-400 ml-1">· Terminé</span>}
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-gray-700">{typeLabels[a.type]}</span>
                      </td>
                      <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">
                        {new Date(a.date).toLocaleDateString('fr-DZ', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-5 py-4">
                        {a.badge ? (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">{a.badge}</span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <a href={a.cta_url} target="_blank" rel="noopener noreferrer"
                          className="text-[#4285F4] text-xs hover:underline max-w-[140px] truncate block">
                          {a.cta_url}
                        </a>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button onClick={() => openEdit(a)}
                            className="text-gray-400 hover:text-[#4285F4] transition-colors text-base" title="Modifier">
                            ✏️
                          </button>
                          <button onClick={() => handleDelete(a.id)}
                            className="text-gray-300 hover:text-[#EA4335] transition-colors text-base" title="Supprimer">
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
