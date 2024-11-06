/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: '2rem'
    },
    extend: {
      fontFamily: {
        itim: ["Itim", "cursive"],
        marcellus: ["Marcellus", "serif"]
      },
      colors: {
        'color-one': '#a8329d'
      }
    },
  },
  plugins: [],
}

