/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#3d52b6",
        secondary: "#b69f3d",
      },
    },
    fontFamily: {
      sans: ["Roboto", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
