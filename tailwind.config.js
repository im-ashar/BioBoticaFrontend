/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainCol: "#0047ab",
        bioBotica: "#AE0E32",
        secText: "#D2D2D2",
        //headText: "#36454F",
        headText: "#2E266D",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      mono: ["ui-monospace", "monospace"],
    },
  },
  plugins: [require("daisyui")],
};
