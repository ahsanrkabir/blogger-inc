/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#67e8f9",
          200: "#22d3ee",
          300: "#06b6d4",
        },
        secondary: {
          100: "#16181D"
        }
      }
    },
  },
  plugins: [],
};