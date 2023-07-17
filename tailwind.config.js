/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: '#f2f4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        }
      },
      screens: {
        'widescreen': { 'row': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'row': '(max-aspect-ratio: 13/20)' },

      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },

          '100%': { transform: 'scaleY(1)' },

        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

