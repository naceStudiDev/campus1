'use client'

import { useState, useEffect, useRef } from 'react'
import { Timer, TrendingUp } from 'lucide-react'

interface SessionTimerProps {
  userId: string
}

function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) return `${h}h ${m.toString().padStart(2, '0')}min`
  if (m > 0) return `${m}min ${s.toString().padStart(2, '0')}s`
  return `${s}s`
}

function formatClock(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

export default function SessionTimer({ userId }: SessionTimerProps) {
  const storageKey = `dcd_time_${userId}`
  const [sessionSec, setSessionSec] = useState(0)
  const [totalSec, setTotalSec] = useState(0)
  const savedRef = useRef(0)

  // Charge le total sauvegardé
  useEffect(() => {
    const saved = parseInt(localStorage.getItem(storageKey) ?? '0', 10)
    setTotalSec(saved)
    savedRef.current = saved
  }, [storageKey])

  // Tick chaque seconde
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionSec(s => s + 1)
      setTotalSec(t => t + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Sauvegarde le total toutes les 10 secondes
  useEffect(() => {
    if (sessionSec > 0 && sessionSec % 10 === 0) {
      localStorage.setItem(storageKey, totalSec.toString())
    }
  }, [sessionSec, totalSec, storageKey])

  // Sauvegarde à la fermeture de la page
  useEffect(() => {
    const save = () => localStorage.setItem(storageKey, totalSec.toString())
    window.addEventListener('beforeunload', save)
    return () => window.removeEventListener('beforeunload', save)
  }, [totalSec, storageKey])

  // Calcul du niveau d'engagement
  const level =
    totalSec < 300  ? { label: 'Débutant',      color: 'text-slate-400',     bar: 'bg-slate-600',    pct: Math.min((totalSec / 300) * 25, 25) } :
    totalSec < 1800 ? { label: 'Actif',         color: 'text-blue-400',      bar: 'bg-blue-500',     pct: 25 + Math.min(((totalSec - 300) / 1500) * 25, 25) } :
    totalSec < 7200 ? { label: 'Engagé',        color: 'text-primary-light', bar: 'bg-primary',      pct: 50 + Math.min(((totalSec - 1800) / 5400) * 25, 25) } :
                      { label: 'Très assidu',   color: 'text-algerie-light', bar: 'bg-algerie',      pct: Math.min(75 + ((totalSec - 7200) / 7200) * 25, 100) }

  return (
    <div className="bg-dark-card border border-white/[0.07] rounded-2xl p-5 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Suivi de progression</p>

      {/* Deux compteurs */}
      <div className="grid grid-cols-2 gap-3">
        {/* Session courante */}
        <div className="bg-dark-bg rounded-xl p-3 border border-white/[0.05]">
          <div className="flex items-center gap-1.5 mb-1">
            <Timer className="w-3 h-3 text-primary-light" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Session</span>
          </div>
          <p className="font-mono text-lg font-bold text-slate-100 tabular-nums">
            {formatClock(sessionSec)}
          </p>
          <p className="text-[10px] text-slate-600 mt-0.5">cette visite</p>
        </div>

        {/* Total cumulé */}
        <div className="bg-dark-bg rounded-xl p-3 border border-white/[0.05]">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3 h-3 text-algerie-light" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Total</span>
          </div>
          <p className="font-heading text-lg font-bold text-slate-100">
            {formatDuration(totalSec)}
          </p>
          <p className="text-[10px] text-slate-600 mt-0.5">temps cumulé</p>
        </div>
      </div>

      {/* Barre de niveau */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-500">Niveau d'engagement</span>
          <span className={`text-xs font-bold ${level.color}`}>{level.label}</span>
        </div>
        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${level.bar} transition-all duration-1000`}
            style={{ width: `${level.pct}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          {['Débutant', 'Actif', 'Engagé', 'Assidu'].map(l => (
            <span key={l} className="text-[9px] text-slate-700">{l}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
