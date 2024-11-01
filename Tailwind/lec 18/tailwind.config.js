/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    colors:{
        blue: {
            100:'#1fb6ff',
            200:'#1fb6ff',
            390:'#1fb6ff',
            600:'#1fb6ff',
        },
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    extend: {
        screens: {
            'shakeeb': {'min': '640px', 'max': '767px'},
        },
    },
    },

  plugins: [],
}

