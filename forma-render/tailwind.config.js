/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Barlow', 'sans-serif'],
        cond: ['"Barlow Condensed"', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0A0907',
          2: '#111009',
          3: '#181510',
        },
        cream: {
          DEFAULT: '#F2EAD8',
          2: '#C8BFA8',
        },
        gold: {
          DEFAULT: '#C19A52',
          2: '#8A6B34',
          dim: 'rgba(193,154,82,0.1)',
        },
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
        'widest-4': '0.35em',
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-medium': 'spin 28s linear infinite reverse',
        'spin-fast': 'spin 18s linear infinite',
        'geo-spin': 'geoSpin 40s linear infinite',
        'pulse-scroll': 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        geoSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(0.6)' },
          '50%': { opacity: '1', transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}
