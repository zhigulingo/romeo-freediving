/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
