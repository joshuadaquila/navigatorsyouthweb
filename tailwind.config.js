/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex : {
        '5p' : '5%',
        '90p' : '90%',
      }
    },
  },
  plugins: [],
}