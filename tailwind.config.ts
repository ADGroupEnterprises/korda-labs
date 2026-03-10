import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#C4973A',
          light: '#D4A94E',
          dark: '#A07828',
          glow: '#C4973A33',
        },
        brand: {
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
          'blue-dark': '#1D4ED8',
          'blue-glow': '#3B82F633',
          green: '#10B981',
          'green-light': '#34D399',
          'green-dark': '#059669',
          'green-glow': '#10B98133',
        },
        dark: {
          DEFAULT: '#0e0d0b',
          50: '#121109',
          100: '#141210',
          200: '#1a1815',
          300: '#222019',
          400: '#2c2a22',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'radial-blue': 'radial-gradient(circle, #3B82F622 0%, transparent 70%)',
        'radial-green': 'radial-gradient(circle, #10B98122 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

export default config
