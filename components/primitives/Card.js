/**
 * Card - Komponent karty z wariantami ramek neonowych
 *
 * Komponenty kart z automatycznymi stylami neonowymi (niebieskie dla jasnego tła, fioletowe dla ciemnego).
 *
 * @param {'blue'|'purple'} variant - Wariant karty (domyślnie: 'blue')
 * @param {string} as - HTML element do renderowania (domyślnie: 'div')
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Zawartość karty
 * @param {object} ...props - Pozostałe props przekazywane do elementu
 * @returns {JSX.Element} Karta z odpowiednimi stylami neonowymi
 */
import { cn } from '@/lib/utils';

export default function Card({
  variant = 'blue',
  as = 'div',
  className = '',
  children,
  ...props
}) {
  // Mapowanie wariantów na klasy Tailwind zamiast custom CSS classes
  const variantStyles = {
    blue: cn(
      'rounded-xl border-2 border-neon-blue/30 text-text-light p-6 relative overflow-hidden',
      'transition-all duration-300 transform',
      'shadow-card-blue hover:shadow-card-blue-hover',
      'bg-modal hover:border-neon-blue/60 hover:-translate-y-1'
    ),
    purple: cn(
      'rounded-xl border-2 border-neon-purple/30 p-6 relative overflow-hidden',
      'transition-all duration-300 transform',
      'shadow-card-purple hover:shadow-card-purple-hover',
      'bg-bg-surface hover:border-neon-purple/60 hover:-translate-y-1'
    ),
  };

  const variantClass = variantStyles[variant] || variantStyles.blue;
  const classes = cn(variantClass, className);
  const As = as;

  return (
    <As className={classes} {...props}>
      {children}
    </As>
  );
}
