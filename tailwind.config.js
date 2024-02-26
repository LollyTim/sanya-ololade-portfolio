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
      keyframes: {
        animeteStroke: {
          "0%": {
            fill: "transparent",
            stroke: "#1647d0",
            strokeWidth: "1",
            strokeDashoffset: "25%",
            strokeDasharray: "0 32%",
          },
          "50%": {
            fill: "transparent",
            stroke: "#1647d0",
            strokeWidth: "1",
          },
          "80%, 100%": {
            fill: "#FFF",
            stroke: "transparent",
            strokeWidth: "0",
            strokeDashoffset: "-25%",
            strokeDasharray: "32% 0",
          },
        },
        animeteStrokeDark: {
          "0%": {
            fill: "transparent",
            stroke: "#1647d0",
            strokeWidth: "1",
            strokeDashoffset: "25%",
            strokeDasharray: "0 32%",
          },
          "50%": {
            fill: "transparent",
            stroke: "#1647d0",
            strokeWidth: "1",
          },
          "80%, 100%": {
            fill: "#04060b",
            stroke: "transparent",
            strokeWidth: "0",
            strokeDashoffset: "-25%",
            strokeDasharray: "32% 0",
          },
        },
      },
      animation: {
        lineUpDark: " 4s infinite alternate animeteStroke", // Customize animation properties here
        lineUp: " 4s infinite alternate animeteStrokeDark", // Customize animation properties here
      },
      backgroundImage: {
        darkgbg: "var(--gradirnt-dark)",
        lightgbg: "var(--gradirnt-light)",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
