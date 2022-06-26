/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "white": "#ffffff",
      "dark-bluegray": "#2E3035",
      "violet": "#E81CFF",
      "skyblue": "#40C9FF",
      "gray": {
        dark: "#606060"
      }
    },
    extend: {
      fontSize: {
        "4.5vw": "4.5vw",
        "5vw": "5vw",
      },
      margin: {
        "10vw": "10vw",
      },
    },
  },
  plugins: [],
}
