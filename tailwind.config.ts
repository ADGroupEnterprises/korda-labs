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
          DEFAULT: '#06070E',
          50: '#090B14',
          100: '#0D0F1A',
          200: '#131520',
          300: '#1A1D2E',
          400: '#242740',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
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
