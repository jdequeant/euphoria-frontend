const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  important: true,
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        code: {
          green: 'var(--color-code-green)',
          yellow: 'var(--color-code-yellow)',
          purple: 'var(--color-code-purple)',
          red: 'var(--color-code-red)',
          blue: 'var(--color-code-blue)',
          white: 'var(--color-code-white)',
        }
      },
      textColor: {
        cardTitle: '#35373b'
      },
      'backgroundColor': {
        header: '#dae1ea',
      },
      'borderColor': {
        'success-600': '#32905e',
      },
      fontSize: {
        'baseplus': '1.05rem',
      },
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '6px': '6px',
        '7': '1.75rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '64': '16rem',
        '80': '20rem',
        '128': '32rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      height: {
        '14': '3.5rem',
      },
      inset: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      borderWidth: {
        '6': '6px',
      },
      maxWidth: theme => {
        return {
          'screen-sm': theme('screens.sm'),
          'screen-xl': theme('screens.xl'),
        }
      },
      maxHeight: {
        'xs': '20rem',
        'sm': '30rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      boxShadow: {
        'md-light': '0 0 12px 8px rgb(255,255,255)',
        'xs-light': '0 1px 1px 0 rgba(0, 0, 0, .05)',
        'sm-clear': '0 .025rem 0 rgba(0,0,0,.075)',
        'inner-clear': 'inset 1px -1px 0px 0px rgba(0, 0, 0, .075)'
      },
      zIndex: {
        '90': '90',
        '100': '100',
      },
    }
  },
  variants: {
    backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  }
}
