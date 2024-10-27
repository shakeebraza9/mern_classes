/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontSize:{
        "10xl":"20rem"
      },
      colors:{
        red:{
          '88':'#FFC0CB'
        },
        "pink":'#FFC0CB',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      borderColor:{
        "mygreen":"#00ff00"
      }
    },
  },
  plugins: [],
}

