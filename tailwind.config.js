/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0B4F3C',
          deep: '#07392C',
          dark: '#042A20'
        },
        ivory: '#F8F5EF',
        gold: {
          DEFAULT: '#C9A227',
          light: '#E6CE7A',
          soft: '#D9B94A'
        }
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        bengali: ['"Noto Serif Bengali"', 'serif']
      }
    }
  },
  plugins: []
};
