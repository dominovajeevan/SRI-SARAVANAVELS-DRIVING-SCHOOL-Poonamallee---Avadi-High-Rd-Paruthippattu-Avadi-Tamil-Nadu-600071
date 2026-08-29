/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        celestial: {
          bg: "#FAF7F2",
          bgSec: "#F3EFE7",
          card: "#FFFFFF",
          cardHover: "#FAF6EF",
          border: "#E8DEC8",
          purple: "#4B2E5E",
          purpleLight: "#674080",
          violet: "#72548C",
          gold: "#C9A86A",
          goldHover: "#B89657",
          champagne: "#E7D4A8",
          charcoal: "#27232A",
          muted: "#665E6E",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(201, 168, 106, 0.35)',
        'glow-purple': '0 0 25px -5px rgba(75, 46, 94, 0.25)',
        'celestial-card': '0 10px 30px -10px rgba(75, 46, 94, 0.08)',
      }
    },
  },
  plugins: [],
}
