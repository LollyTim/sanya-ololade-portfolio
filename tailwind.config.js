/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textClr: "#090a11",
        bgClr: "#f4f6fb",
        primaryLight: "#1c2f63",
        secondaryLight: "#6c8ce4",
        accentClr: "#1647d0",
        textClrDark: "#eeeff6",
        bgClrDark: "#04060b",
        primaryDark: "#9cafe3",
        secondaryDark: "#1b3b93",
        accentClrDark: "#2f61e9",
      },
    },
  },
  plugins: [],
};
