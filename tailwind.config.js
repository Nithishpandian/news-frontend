/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'homePage': '5fr 10fr 5fr',
        'responsive': '6fr 10fr',
      },
    },
    fontFamily: {
      lilita: ['Lilita One', "monospace"],
      pangolin: ['Pangolin', 'cursive'],
    },
  },
  plugins: [],
}
