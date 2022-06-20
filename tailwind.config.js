module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'infiniot-green': '#59A52C',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
