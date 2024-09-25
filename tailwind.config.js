/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tltorange': '#fc8402',
        'tltgreen': '#0a3d48',
        'tltwhite': '#ffffff',

      }
    },
  },
  plugins: [],
}

