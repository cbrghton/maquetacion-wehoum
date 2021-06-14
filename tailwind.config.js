const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
      colors: {
          amatista: '#f49d3f',
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: colors.white,
          gray: colors.coolGray,
          red: colors.red,
          yellow: colors.amber,
          green: colors.emerald,
          blue: colors.blue,
          indigo: colors.indigo,
          purple: colors.violet,
          pink: colors.pink
      },
      'sm': {'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
      extend: {
          backgroundImage: theme => ({
              'header': "url('src/assets/images/hreroimage.png')",
              'header-mobile': "url('src/assets/images/hreroimage-2.png')"
          })
      }
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
