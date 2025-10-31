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
        error: {
          light: '#F8D7DA', // bg-error-light
          DEFAULT: '#E74C3C', // text-error
          border: '#F5C6CB', // border-error
        },
        success: {
          light: '#D4EDDA', // bg-success-light
          DEFAULT: '#27AE60', // text-success
          border: '#C3E6CB', // border-success
        },

        // Tła z przezroczystością (zamiast bg-black/*)
        // Uwaga: bez prefiksu bg- bo Tailwind dodaje go automatycznie
        overlay: 'rgba(0, 0, 0, 0.5)', // bg-black/50
        'overlay-dark': 'rgba(0, 0, 0, 0.9)', // bg-black/90
        'header-footer': 'rgba(0, 0, 0, 0.95)', // bg-black/95
        modal: 'rgba(0, 0, 0, 0.9)', // bg-black/90 (dla modali)
        'button-dark': 'rgba(0, 0, 0, 0.5)', // bg-black/50
        'button-dark-hover': 'rgba(0, 0, 0, 0.7)', // bg-black/70
        // Aliasy border neon (dla spójności użycia)
        'neon-border-blue': 'rgba(0, 153, 204, 0.2)',
        'neon-border-blue-strong': 'rgba(0, 153, 204, 0.6)',
        'neon-border-blue-medium': 'rgba(0, 153, 204, 0.3)',
        'neon-border-blue-active': 'rgba(0, 153, 204, 0.5)',
        'neon-border-blue-very-strong': 'rgba(0, 153, 204, 0.8)',
        'neon-border-purple': 'rgba(192, 132, 252, 0.2)',
        'neon-border-purple-strong': 'rgba(192, 132, 252, 0.6)',
        'neon-border-purple-medium': 'rgba(192, 132, 252, 0.3)',
        'neon-border-purple-active': 'rgba(192, 132, 252, 0.4)',
        'neon-border-purple-very-strong': 'rgba(192, 132, 252, 0.7)',
      },
      fontFamily: {
        sans: ['var(--font-yantramanav)', 'ui-sans-serif', 'system-ui'],
        display: [
          'var(--font-bebas)',
          'var(--font-orbitron)',
          'var(--font-yantramanav)',
          'ui-sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 153, 204, 0.35)',
        'glow-purple': '0 0 24px rgba(192, 132, 252, 0.35)',
        'glow-strong': '0 0 30px rgba(0, 153, 204, 0.5)',
        // Extended shadow utilities for cards and components
        'glow-blue-expanded': '0 0 44px rgba(0, 153, 204, 0.55), 0 12px 22px rgba(0, 0, 0, 0.18)',
        'glow-purple-expanded': '0 0 60px rgba(192, 132, 252, 0.75), 0 16px 28px rgba(0, 0, 0, 0.28)',
        'glow-purple-medium': '0 0 22px rgba(192, 132, 252, 0.28)',
        'focus-purple': '0 0 0 2px rgba(192, 132, 252, 0.2)',
        'file-button': '0 0 12px rgba(0, 153, 204, 0.45)',
        // Blue glow variants (migrated from globals.css)
        'glow-blue-weak': '0 0 6px rgba(0, 153, 204, 0.15)',
        'glow-blue-medium': '0 0 20px rgba(0, 153, 204, 0.25)',
        'glow-blue-strong': '0 0 28px rgba(0, 153, 204, 0.45)',
        'glow-blue-very-strong': '0 0 40px rgba(0, 153, 204, 0.75), 0 0 12px rgba(0, 153, 204, 0.6)',
        'glow-blue-decay': '0 0 24px rgba(0, 153, 204, 0.35), 0 0 8px rgba(0, 153, 204, 0.25)',
        // Card shadows (migrated from globals.css card-with-border-* classes)
        'card-blue': '0 0 20px rgba(0, 153, 204, 0.15), 0 4px 6px rgba(0, 0, 0, 0.3)',
        'card-blue-hover': '0 0 30px rgba(0, 153, 204, 0.3), 0 8px 12px rgba(0, 0, 0, 0.4)',
        'card-purple': '0 0 20px rgba(192, 132, 252, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-purple-hover': '0 0 30px rgba(192, 132, 252, 0.3), 0 8px 12px rgba(0, 0, 0, 0.15)',
      },
      dropShadow: {
        // Extended drop-shadow utilities for text and icons
        'glow-purple-strong': '0 0 14px rgba(192, 132, 252, 0.60)',
        'glow-purple-weak': '0 0 4px rgba(192, 132, 252, 0.25)',
        'glow-blue-medium': '0 0 10px rgba(0, 153, 204, 0.35)',
        // Blue drop-shadow variants (migrated from globals.css)
        'glow-blue-weak': '0 0 8px rgba(0, 153, 204, 0.35)',
        'glow-blue-strong': '0 0 16px rgba(0, 153, 204, 0.7)',
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
