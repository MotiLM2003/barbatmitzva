module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ebf3fa',
          200: '#c2dbef',
          300: '#9ac3e5',
          400: '#71acda',
          500: '#4994d0',
          600: '#2f7ab6',
          700: '#255f8e',
          800: '#1a4465',
          900: '#10293d',
        },

        shades: {
          100: '#F9F9F9',
          200: '#EAEAEA',
          300: '#D5D4D4',
          400: '#6D6D78',
          500: '#172239',
          600: '#161616',
        },
      },
    },
  },
  plugins: [],
}
