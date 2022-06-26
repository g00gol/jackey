/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "white": "#F5F5F7",
      "dark-bluegray": "#2E3035"
    },
    extend: {},
  },
  plugins: [],
}
