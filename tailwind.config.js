/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "warna-dirflix": "#14DB00",
        "dirflix-hover": "#12B700",
      }
    },
  },
  plugins: [],
}

