/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "theme": "#8800f5",
        "gray": "#bab9b9",
        "l-gray": "#f4f3f3"
      }
    },
  },
  plugins: [],
}
