/**
 * Card - Komponent karty z wariantami ramek neonowych
 *
 * Komponenty kart z automatycznymi stylami neonowymi (niebieskie dla jasnego tła, fioletowe dla ciemnego).
 * Obsługuje legacy aliases dla backward compatibility.
 *
 * @param {'blue'|'purple'|'borderBlue'|'borderPurple'|'aboutCard'|'approachCardDark'} variant - Wariant karty (domyślnie: 'blue')
 * @param {string} as - HTML element do renderowania (domyślnie: 'div')
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Zawartość karty
 * @param {object} ...props - Pozostałe props przekazywane do elementu
 * @returns {JSX.Element} Karta z odpowiednimi stylami neonowymi
 */
export default function Card({
  variant = 'blue',
  as = 'div',
  className = '',
  children,
  ...props
}) {
  const VARIANT_TO_CLASS = {
    blue: 'card-with-border-blue',
    purple: 'card-with-border-purple',
    // Legacy aliases for backward compatibility
    borderBlue: 'card-with-border-blue',
    borderPurple: 'card-with-border-purple',
    aboutCard: 'about-card',
    approachCardDark: 'approach-card-dark',
  };

  const variantClass = VARIANT_TO_CLASS[variant] || VARIANT_TO_CLASS.blue;
  const classes = [variantClass, className].filter(Boolean).join(' ');
  const As = as;

  return (
    <As className={classes} {...props}>
      {children}
    </As>
  );
}
