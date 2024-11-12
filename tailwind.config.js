/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        'header-img': "url('/src/images/header.jpg')",
        'person': "url('/src/images/person2.png')",
        'img1': "url('/src/images/img1.png')",
        'img2': "url('/src/images/img2.png')",
        'img3': "url('/src/images/img3.png')",
        'img4': "url('/src/images/img4.png')",
      },
      colors: {
        'header-bg-color': 'rgba(120, 53, 15, 0.30)',
        'button-color': 'rgba(120, 53, 15)',
        'footer-color': 'rgba(12,24,30)',
      },
      fontFamily: {
        PlayfairDisplay: ['Playfair Display', 'serif'],
        Overpass: ['Overpass', 'sans-serif']
      },
      height: {
        custom: '750px',
        custom1: '500px',
        header: '680px'
      }
    },
  },
  plugins: [],
}

