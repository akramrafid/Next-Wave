/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nw: {
          blue: "#0E9ED9",
          black: "#262626",
          grey: "#CCCCCC",
          light: "#F7F7F7",
          white: "#FFFFFF",
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      }
    },
  },
  plugins: [],
}
