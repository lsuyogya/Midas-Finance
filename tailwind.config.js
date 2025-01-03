/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        biryani: ['Biryani', 'sans-serif'],
        unna: ['Unna', 'serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      primary: '#f1e7a3',
      secondary: '#9b51b4',
      customGray: '#323032',
      darkerGray: '#666666',
      light: '#f7f4f0',
      formGray: '#92918f',
    },
  },
  safelist: [
    'fixed',
    'top-0',
    'translate-y-0',
    '-translate-y-full',
    'shadow-md',
  ],
  plugins: [require('tailwindcss-motion')],
};
