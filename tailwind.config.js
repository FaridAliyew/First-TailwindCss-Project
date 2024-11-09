/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      backgroundImage: {
        'header-img': "url('/src/images/header.jpg')"
      },
      colors:{
        'header-bg-color':'rgba(120, 53, 15, 0.30)',
        'button-color':'rgba(120, 53, 15)'
      }
    },
  },
  plugins: [],
}

