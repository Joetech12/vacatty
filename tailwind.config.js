/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#000",
      // primary: "#E8B20E",
      grey: "#8F8e8d",
      ...colors,
    },
    fontFamily: {
      outfit: ["outfit", "system-ui"],
      outfitMedium: ["outfitMedium", "system-ui"],
      outfitBold: ["outfitBold", "system-ui"],
    },
  },
  plugins: [],
};
