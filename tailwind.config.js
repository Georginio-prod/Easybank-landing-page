/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gris: '#979797',
        bgc: '#FAFAFA',
        cl:'#9597A5',
        lin: '#33D35E',
        lin2: '#2AB6D9',
        col:'#2D314D',
        gris2: '#F4F5F7'
      }
    },
  },
  plugins: [],
}

