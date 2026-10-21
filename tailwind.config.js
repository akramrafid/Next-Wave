/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
