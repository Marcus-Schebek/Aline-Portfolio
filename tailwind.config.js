/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        softBlack: '#232323',
        softRed: '#d83636',
        softWhite: '#eae8e3',
        softGray: '#e1e1e1',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

