module.exports = {
  theme: {
    animations: { // defaults to {}; the following are examples
      'float': {
        from: {},
        to: {
          transform: 'scale(1.05)',
        },
      },
    },
    animationTimingFunction: { // defaults to these values
      'default': 'ease-out',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    animationDelay: { // defaults to these values
      'default': '0s',
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s',
    },
    animationIterationCount: { // defaults to these values
      'default': 'once',
      'once': '1',
    },
    animationDirection: { // defaults to these values
      'default': 'normal',
      'normal': 'normal',
      'reverse': 'reverse',
      'alternate': 'alternate',
      'alternate-reverse': 'alternate-reverse',
    },
    animationDuration: { // defaults to these values
      'default': '250ms',
      '0s': '0s',
      '250ms': '250ms',
      '500ms': '500ms',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s',
    },
    animationFillMode: { // defaults to these values
      'default': 'both',
      'none': 'none',
      'forwards': 'forwards',
      'backwards': 'backwards',
      'both': 'both',
    },
    rotate: {
      "1":  "1deg",
      "-1": "-1deg",
    },
    scale: { // defaults to {}
    '90': '0.9',
    '100': '1',
    '105': '1.05',
    },
  },
  variants: {
    scale: ['responsive', 'hover'],
    animations: ['responsive', 'hover'],
    boxShadow: ['responsive', 'hover'],
    borderRadius: ['responsive', 'active', 'focus'],
    borderStyle: ['responsive', 'active', 'focus'],
    borderColor: ['responsive', 'active', 'focus'],
    textColor: ['responsive', 'visited'],
  },
  plugins: [
    require('tailwindcss-transforms')({
      '3d': true, // defaults to false
    }),
    require('tailwindcss-animations')(),
  ],
}
