/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // custom colors e1daca
        background: '#efe7da',
        darkBg: "#d0c5b5 ",
        whiteBg: '#f6f5ec',
        buttons1: '#c1b6a4',
        customMaroon: '#8b0000',
        fontText: '#000000',
      },
      fontFamily: {
        balige: ['BALIGE', 'sans-serif'],
        devorana: ['DEVORANA', 'sans-serif'],
        dolce: ['DOLCE', 'sans-serif'],
        dolceBold: ['DOLCEB','sans-serif']
      },
    },
  },
  plugins: [],
}