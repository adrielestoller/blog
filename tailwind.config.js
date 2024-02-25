/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins',
        serif: 'Merriweather'
      }
    },
  },
  plugins: [],
}

