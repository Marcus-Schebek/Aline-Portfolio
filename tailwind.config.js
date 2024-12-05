/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        softBlack: '#080409',
        softPurple: '#492153',
        softWhite: '#eae8e3',
        darkGreen: '#1a2527',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
