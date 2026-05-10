import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark design system
        dark: {
          bg: '#080B14',
          card: '#0D1117',
          muted: '#1C2035',
          border: 'rgba(255,255,255,0.07)',
        },
        primary: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#5B21B6',
          glow: 'rgba(124,58,237,0.15)',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#B45309',
        },
        // kept for formation cards
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          green: '#34A853',
          yellow: '#FBBC05',
        },
        // Vert Algérie — couleur identitaire, pages communauté (bibliothèque + forum)
        algerie: {
          DEFAULT: '#006233',
          light:   '#00A854',
          dark:    '#004D28',
          glow:    'rgba(0,98,51,0.2)',
        },
        // kept for backward compat (some pages use brand.*)
        brand: {
          blue: '#7C3AED',
          'blue-dark': '#5B21B6',
          green: '#059669',
          'green-dark': '#047857',
          red: '#DC2626',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'bento-float': 'bentoFloat 6s ease-in-out infinite',
        'bento-pulse': 'bentoPulse 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bentoFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        bentoPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.85' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-violet': '0 0 30px rgba(124,58,237,0.25)',
        'glow-violet-lg': '0 0 60px rgba(124,58,237,0.3)',
        'glow-amber': '0 0 30px rgba(245,158,11,0.2)',
        'glow-algerie': '0 0 20px rgba(0,98,51,0.25), 0 0 60px rgba(0,98,51,0.12)',
        'glow-algerie-lg': '0 0 40px rgba(0,98,51,0.35), 0 0 100px rgba(0,98,51,0.18)',
        'card-dark': '0 1px 40px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
export default config
