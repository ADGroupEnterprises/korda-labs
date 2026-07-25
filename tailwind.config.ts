import type { Config } from 'tailwindcss'

// ZOE-434: five-colour brand system (Brand Strategy §6.1 / Collateral Guidance PAL-01..03).
// Paper, Linen, Copper, Mahogany, Ink — full opacity only; copper is the only strong accent.
// `accent` is kept as an alias of copper for existing class names.
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
          DEFAULT: '#FAFAF8',
          100: '#EDE8DF',
          200: '#EDE8DF',
        },
        linen: '#EDE8DF',
        copper: '#8A4E28',
        mahogany: '#5C3018',
        ink: {
          DEFAULT: '#37332E',
        },
        accent: {
          DEFAULT: '#8A4E28',
          dark: '#5C3018',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Lora', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Marketing hero scale (TYPE-01) — marketing-only sizes.
        hero: ['72px', { lineHeight: '80px', fontWeight: '500' }],
        'hero-sm': ['56px', { lineHeight: '64px', fontWeight: '500' }],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
