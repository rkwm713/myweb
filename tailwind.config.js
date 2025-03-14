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
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        secondary: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        dark: {
          100: '#0f172a',
          200: '#1e293b',
          300: '#334155',
          900: '#020617',
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
