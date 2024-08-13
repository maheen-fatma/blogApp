/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // custom colors e0d8c2
        background: '#efe7da',
        headerFooter: "#e1daca",
        whiteBg: '#f6f5ec',
        buttons1: "#c1b6a4",
        buttons2: '#800000',
        fontText: '#000000',
      },
    },
  },
  plugins: [],
}