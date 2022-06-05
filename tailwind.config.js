module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,css,js,jsx,ts,tsx}',
    './public/**/*.{html,css,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#032541',
        secondary: '#01b4e4',
        tertiary: '#90cea1',
      },
    },
  },
  plugins: [],
};
