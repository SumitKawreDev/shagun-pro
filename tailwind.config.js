/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
      },
      colors: {
        shagun: {
          orange: "#FF6B35",
          red: "#E3090D",
          cream: "#FCF1ED",
        },
      },
    },
  },
  plugins: [],
};