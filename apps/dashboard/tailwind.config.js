const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,layouts,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(100px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(20px, -70px) scale(0.6)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      colors: {
        primary: {
          light: '#6d7f8a',
          superlight: '#acb6bc',
          dark: '#21323e',
          superdark: '#131d23',
          original: '#2f4858',
        },
        secondary: {
          light: '#aacfe4',
          superlight: '#cfe4ef',
          dark: '#5e8397',
          superdark: '#364b56',
          original: '#86bbd8',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};