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
        neonBlue: "#00E0FF",
        neonPurple: "#C084FC",
        textDark: "#111111",
        textLight: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      spacing: {
        section: "5rem",
        container: "1.5rem",
      },
    },
  },
  plugins: [],
}
