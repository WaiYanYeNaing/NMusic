module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        red: '#f14c4c',
        skyblue: '#f3f9fe',
        orange: '#fc942d',
        black: '#17191a',
        lightblack: '#3b3d3f',
        lightgray: '#c2c7cb',
        gray: '#b9babd',
        orange: '#fd7055',
        yellow: '#fc942d',
        pink: '#fb9793',
      },
      fontSize: {
        sm: '.85rem',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
