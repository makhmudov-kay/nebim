/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'open': ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      'oswald': ['Oswald', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'bottom': '0 0 11px 2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

