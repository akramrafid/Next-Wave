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
          navy: "#091345",
          blueTint: "#E8F6FC",
          black: "#262626",
          grey: "#CCCCCC",
          light: "#F7F7F7",
          white: "#F7F7F7",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins, 'Poppins')", "Poppins", "sans-serif"],
        sans: ["var(--font-manrope, 'Manrope')", "Manrope", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
