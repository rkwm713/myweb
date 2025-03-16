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
          400: '#FFD700',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#996515',
        },
        secondary: {
          400: '#E6E8FA',
          500: '#C0C0C0',
          600: '#A9A9A9',
        },
        dark: {
          100: '#121212',
          200: '#1A1A1A',
          300: '#2A2A2A',
          900: '#000000',
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #2A2A2A 1px, transparent 1px), linear-gradient(to bottom, #2A2A2A 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
