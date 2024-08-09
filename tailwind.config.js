/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // custom colors
        background: '#e0d8c2',
        whiteBg: '#fcfbfa',
        buttons1: "#f8d8c2",
        buttons2: '#d7a97f',
        fontText: '#000000',
      },
    },
  },
  plugins: [],
}