/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#060606",
        light: "#E6E5DD",
        main: "#004bfc",
      },
      fontFamily: {
        Branch: ["Branch", "sans-serif"],
        Pigarnos: ["Pigarnos", "sans-serif"],
        Absans: ["Absans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
