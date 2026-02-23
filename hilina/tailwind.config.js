/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Orbitron', 'monospace'],
        'secondary': ['Rajdhani', 'sans-serif'],
      },
      colors: {
        cyber: {
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
          danger: '#ff0040',
          success: '#00ff40',
        }
      }
    },
  },
  plugins: [],
}
