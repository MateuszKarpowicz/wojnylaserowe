/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neon (brand)
        'neon-blue': '#0099CC',
        'neon-purple': '#C084FC',

        // Tła
        'bg-dark': '#0D0D0D',
        'bg-light': '#F9F9F9',

        // Tekst
        'text-dark': '#0A0A0A',
        'text-light': '#FAFAFA',

        // Semantyczne (zamiast gray-*)
        // Zaktualizowane dla WCAG AA compliance (min 4.5:1 dla normal text, 3:1 dla large)
        'text-secondary': '#555555', // poprzednio #666666 - poprawiony kontrast dla AA (4.5:1 na bg-surface)
        'text-muted': '#707070', // poprzednio #999999 - poprawiony kontrast dla AA (4.5:1 na bg-surface)
        'bg-surface': '#FFFFFF', // dla bg-white
        'bg-surface-light': '#F5F5F5', // dla bg-gray-50
        'border-border': '#E5E5E5', // dla border-gray-300
        'border-border-light': '#F3F3F3', // dla border-gray-200
        'border-dark-input': '#4A4A4A', // border dla input-dark (ciemne tło)
        'bg-input-dark': '#1A1A1A', // tło dla input-dark (ciemne tło)

        // Status
        error: '#E74C3C',
        success: '#27AE60',

        // Tła z przezroczystością (zamiast bg-black/*)
        // Uwaga: bez prefiksu bg- bo Tailwind dodaje go automatycznie
        overlay: 'rgba(0, 0, 0, 0.5)', // bg-black/50
        'overlay-dark': 'rgba(0, 0, 0, 0.9)', // bg-black/90
        'header-footer': 'rgba(0, 0, 0, 0.95)', // bg-black/95
        modal: 'rgba(0, 0, 0, 0.9)', // bg-black/90 (dla modali)
        'button-dark': 'rgba(0, 0, 0, 0.5)', // bg-black/50
        'button-dark-hover': 'rgba(0, 0, 0, 0.7)', // bg-black/70
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui'],
        display: [
          'var(--font-orbitron)',
          'var(--font-poppins)',
          'ui-sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 153, 204, 0.35)',
        'glow-purple': '0 0 24px rgba(192, 132, 252, 0.35)',
        'glow-strong': '0 0 30px rgba(0, 153, 204, 0.5)',
      },
      height: {
        header: '4.5rem', // 72px - stała wysokość headera
      },
      zIndex: {
        header: 90,
        overlay: 60,
        modal: 70,
        popover: 80,
        tooltip: 90,
        button: 100, // przyciski zawsze nad wszystkim
      },
    },
  },
  plugins: [],
};
