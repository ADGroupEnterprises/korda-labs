import type { Config } from 'tailwindcss'

// Harbor palette (brand architecture v2.0) — drawn from Zoe the otter and the Keel mark.
// Sailcloth ground, deep-navy ink, coat-blue accent, sky + mist surfaces,
// copper/brass kept as the small warm accent (Korda compass, Keel wordmark, Zoe's fur).
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FBF9F4', // Sailcloth — page ground (Zoe's cap)
          100: '#F3F7FC',     // raised surface
          200: '#E7F0FA',
        },
        mist: '#E7F0FA',      // cards, hairlines
        sky: {
          DEFAULT: '#A7D7FF', // Zoe's sky
          soft: '#DCEEFF',
        },
        accent: {
          DEFAULT: '#3D64AE', // Coat blue — the one strong accent
          dark: '#27405A',
        },
        navy: '#27405A',      // Keel hull
        ink: {
          DEFAULT: '#0F2942', // Deep water — text
          soft: '#49617B',
        },
        copper: '#9A6646',    // Keel wordmark / fur — warm accent, small doses
        brass: '#E0A96D',     // cap badge
        blush: '#F2B8AE',
        sand: '#FBEBDC',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Bricolage Grotesque', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        hero: ['72px', { lineHeight: '76px', fontWeight: '700' }],
        'hero-sm': ['56px', { lineHeight: '60px', fontWeight: '700' }],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        bob: 'bob 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
