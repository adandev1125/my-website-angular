/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
    './src/app/*.{html,css,js}',
    './src/app/**/*.{html,css,js}',
    './src/app/**/**/*.{html,css,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "Inter"
      },
      colors: {
        lightAccent: '#434BD9',
        lightSecondary: '#ff804f',
        lightButton: '#21293b',
        lightTextColor: '#21293b',
        darkTextColor: 'white'
      },
    },
  },
  plugins: [
    require('@anuragroy/tailwindcss-animate')
  ],
}

