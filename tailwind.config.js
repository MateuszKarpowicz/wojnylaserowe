/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#F9F9F9",
        darkBg: "#0D0D0D",
        neonBlue: "#0099CC",
        neonPurple: "#C084FC",
        textDark: "#111111",
        textLight: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
        yantramanav: ["Yantramanav", "sans-serif"],
      },
      spacing: {
        section: "var(--spacing-section)",
        container: "var(--spacing-container)",
      },
    },
  },
  plugins: [],
}
