/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f4',
          100: '#dceee4',
          200: '#bae0c8',
          300: '#8acca5',
          400: '#59b37d',
          500: '#3a9d63',
          600: '#0a5c36',
          700: '#064a2b',
          800: '#083d24',
          900: '#06341f',
          950: '#021d11',
        },
        beige: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f5f0e8',
          300: '#ece4d4',
          400: '#e0d3bc',
          500: '#d4c4a8',
          600: '#c9a94e',
          700: '#b8943a',
          800: '#96782f',
          900: '#7b6229',
        },
        gold: {
          50: '#fdfaed',
          100: '#f9f0c8',
          200: '#f3e08d',
          300: '#edcc52',
          400: '#c9a94e',
          500: '#b8943a',
          600: '#96782f',
          700: '#7b6229',
          800: '#675026',
          900: '#584424',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
