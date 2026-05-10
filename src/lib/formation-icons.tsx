import { Code2, Globe, GitBranch, Database, Shield, Cpu, Layers, Network, TrendingUp, LucideIcon } from 'lucide-react'

interface FormationIconConfig {
  Icon: LucideIcon
  gradient: string
  glow: string
}

export const FORMATION_ICONS: Record<string, FormationIconConfig> = {
  'python': {
    Icon: Code2,
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'rgba(59,130,246,0.3)',
  },
  'dev-web': {
    Icon: Globe,
    gradient: 'from-orange-500 to-red-400',
    glow: 'rgba(234,67,53,0.3)',
  },
  'algo-1': {
    Icon: GitBranch,
    gradient: 'from-emerald-500 to-teal-400',
    glow: 'rgba(16,185,129,0.3)',
  },
  'sql': {
    Icon: Database,
    gradient: 'from-blue-500 to-indigo-400',
    glow: 'rgba(99,102,241,0.3)',
  },
  'cybersecurite': {
    Icon: Shield,
    gradient: 'from-amber-500 to-orange-400',
    glow: 'rgba(245,158,11,0.3)',
  },
  'c-language': {
    Icon: Cpu,
    gradient: 'from-slate-400 to-slate-300',
    glow: 'rgba(148,163,184,0.3)',
  },
  'architecture-machine': {
    Icon: Layers,
    gradient: 'from-violet-500 to-purple-400',
    glow: 'rgba(124,58,237,0.3)',
  },
  'algo-2': {
    Icon: Network,
    gradient: 'from-emerald-500 to-green-400',
    glow: 'rgba(52,211,153,0.3)',
  },
  'marketing-digital': {
    Icon: TrendingUp,
    gradient: 'from-pink-500 to-rose-400',
    glow: 'rgba(236,72,153,0.3)',
  },
}

export function getFormationIcon(id: string): FormationIconConfig {
  return FORMATION_ICONS[id] ?? {
    Icon: Code2,
    gradient: 'from-violet-500 to-purple-400',
    glow: 'rgba(124,58,237,0.3)',
  }
}
