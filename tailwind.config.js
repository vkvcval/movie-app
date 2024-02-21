/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#16247f",
        secondary: "#ccd435",
        neutral: "#253694",
        ["primary-dark"]: "#0b1240",
        ["primary-light"]: "#1f32ad",
      },
    },
    fontFamily: {
      kanit: ["var(--font-kanit)"],
      rowdies: ["var(--font-rowdies)"],
      inter: ["var(--font-inter)"],
    },
    fontSize: {
      s: "12px",
      m: "14px",
      l: "16px",
      xl: "20px",
      xxl: "24px",
    },
    dropShadow: {
      glow: [
        "0 0px 20px rgba(255,255, 255, 0.35)",
        "0 0px 65px rgba(255, 255,255, 0.2)",
      ],
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
