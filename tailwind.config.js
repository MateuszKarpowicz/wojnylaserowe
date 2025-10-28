/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "var(--color-light-bg)",
        darkBg: "var(--color-dark-bg)",
        neonBlue: "var(--color-neon-blue)",
        neonPurple: "var(--color-neon-purple)",
        textDark: "var(--color-text-dark)",
        textLight: "var(--color-text-light)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      spacing: {
        section: "var(--spacing-section)",
        container: "var(--spacing-container)",
      },
    },
  },
  plugins: [],
}
