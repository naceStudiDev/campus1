import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Digital Campus Dz — Cours de programmation en ligne, Algérie'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0D0821 0%, #0D1117 50%, #080B14 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
          }}
        />
        {/* Glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '999px',
            border: '1px solid rgba(124,58,237,0.35)',
            background: 'rgba(124,58,237,0.12)',
            marginBottom: '28px',
          }}
        >
          <span style={{ fontSize: '14px', color: '#a78bfa', fontWeight: 600, letterSpacing: '0.05em' }}>
            🇩🇿 École en ligne · Algérie
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#f1f5f9',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Digital Campus{' '}
          <span style={{ color: '#a78bfa' }}>Dz</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '720px',
            lineHeight: 1.5,
            marginBottom: '48px',
          }}
        >
          Cours de programmation, cybersécurité & algorithmique — en direct via Google Meet
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['🐍 Python', '🌐 Dev Web', '🔐 Cybersécurité', '📊 Data Science'].map((label) => (
            <div
              key={label}
              style={{
                padding: '8px 18px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: '#cbd5e1',
                fontSize: '16px',
                fontWeight: 500,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* URL bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '16px',
            color: 'rgba(148,163,184,0.5)',
            letterSpacing: '0.05em',
          }}
        >
          digitalcampus-dz.com
        </div>
      </div>
    ),
    { ...size }
  )
}
