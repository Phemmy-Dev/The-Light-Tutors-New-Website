/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Existing breakpoints can be overridden or extended here
        'xs': '475px', // Custom breakpoint for extra small screens
        'sm': '640px', // Small devices (default Tailwind breakpoint)
        'md': '768px', // Medium devices (default Tailwind breakpoint)
        'lg': '1024px', // Large devices (default Tailwind breakpoint)
        'xl': '1280px', // Extra large devices (default Tailwind breakpoint)
        '2xl': '1536px', // 2X large devices (default Tailwind breakpoint)
      },
      colors: {
        'tltorange': '#fc8402',
        'tltgreen': '#0a3d48',
        'tltwhite': '#ffffff',
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

