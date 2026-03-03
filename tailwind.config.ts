import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Unseen brand - steel blue-teal, clinical, premium
        midnight: {
          DEFAULT: '#0e1920',
          50: '#f0f4f6',     // cool white
          100: '#d5dee4',    // light blue-gray
          200: '#94a8b5',    // muted blue-gray
          300: '#627a8a',    // medium blue-gray
          400: '#3d5565',    // dark blue-gray
          500: '#283c48',    // card bg
          600: '#1d2d37',    // surface
          700: '#18252f',
          800: '#131e27',
          900: '#0e1920',    // deepest
          950: '#0a1318',
        },
        accent: {
          DEFAULT: '#c87080',  // warm rose-coral (from logo gradient)
          light: '#d8909c',
          dark: '#b05568',
          50: '#fdf2f4',
          100: '#f8dde2',
          200: '#f0bcc4',
          300: '#e498a4',
          400: '#d47888',
          500: '#c87080',
          600: '#aa5868',
        },
        brand: {
          DEFAULT: '#5cc0cb',  // bright teal-blue
          50: '#eef9fb',
          100: '#d5f0f4',
          200: '#aee2ea',
          300: '#7ccdd9',
          400: '#5cc0cb',
          500: '#3d9cae',
          600: '#347f90',
          700: '#2b6575',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(92,192,203,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(92,192,203,0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
