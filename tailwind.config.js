const _ = require('lodash');
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ["./public/*.html"],
  darkMode: 'class', // class or media
  theme: {
    extend: {
      colors: {
        prototurk: '#32455a',
        twitter: '#34abf3'
      },
      spacing: {
        '15': '3.75rem' 
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme, e }) {
      const calcUtilities = _.map(theme('spacing'), (value, key) => {
        return {
          [`.${e(`calc-h-full-${key}`)}`]: {
            height: `calc(100% - ${value})`
          },
          [`.${e(`calc-w-full-${key}`)}`]: {
            height: `calc(100% - ${value})`
          }
        }
      })

      addUtilities(calcUtilities, {
        variants: ['responsive', 'hover']
      })
    })
  ],
}
