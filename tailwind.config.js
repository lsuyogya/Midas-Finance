/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

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
      primaryDarker: '#a08c4d',
      secondary: '#9b51b4',
      customGray: '#323032',
      darkerGray: '#666666',
      light: '#f7f4f0',
      formGray: '#92918f',
      footerGold: '#e4dacd',
      footerTxtColor: '#4A4A4A',
    },
  },
  safelist: [
    'fixed',
    'top-0',
    'translate-y-0',
    '-translate-y-full',
    'shadow-md',
  ],
  plugins: [
    require('tailwindcss-motion'),
    plugin(function ({ addBase, theme }) {
      const colors = theme('colors');
      const colorVars = Object.keys(colors).reduce((vars, color) => {
        if (typeof colors[color] === 'string') {
          vars[`--tw-color-${color}`] = colors[color];
        } else {
          Object.entries(colors[color]).forEach(([shade, value]) => {
            vars[`--tw-color-${color}-${shade}`] = value;
          });
        }
        return vars;
      }, {});

      addBase({
        ':root': colorVars,
      });
    }),
  ],
};
