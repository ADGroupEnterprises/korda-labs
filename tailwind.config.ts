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
        paper: {
          DEFAULT: '#FAFAF8',
          100: '#EDE8DF',
          200: '#EDE8DF',
        },
        ink: {
          DEFAULT: '#37332E',
        },
        accent: {
          DEFAULT: '#8A4E28',
          dark: '#5C3018',
          glow: '#8A4E2833',
        },
        brand: {
          green: '#8A4E28',
          'green-dark': '#5C3018',
          'green-glow': '#8A4E2833',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Lora', 'Georgia', 'serif'],
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
        'radial-green': 'radial-gradient(circle, #8A4E2822 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

export default config
