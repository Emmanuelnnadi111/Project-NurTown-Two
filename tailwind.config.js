/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans - serif"],
    },
    letterSpacing: {
      extraWide: "0.5rem",
    },
    extend: {
      colors: {
        offWhite: "#333333;",
        Grey: "#BDBDBD",
        Gray1: " #333333",
        offBlack: "#000000",
        formBg: "#F3F3F3",
        bgFooter: "#2C2C2C",
        colorCopy: "#C8C8C880",
        btnBg: " #F2F2F2",
        sectionBg: "#FBFBFB",
      },
    },
  },
  plugins: [],
};
