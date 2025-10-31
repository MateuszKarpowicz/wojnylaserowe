/**
 * Card - Komponent karty z wariantami ramek neonowych
 *
 * Komponenty kart z automatycznymi stylami neonowymi (niebieskie dla jasnego tła, fioletowe dla ciemnego).
 * Hover efekty są domyślnie wyłączone - można je dodać przez className jeśli potrzeba.
 *
 * @param {'blue'|'purple'} variant - Wariant karty (domyślnie: 'blue')
 * @param {string} as - HTML element do renderowania (domyślnie: 'div')
 * @param {string} className - Dodatkowe klasy CSS (można dodać hover efekty jeśli potrzeba)
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
  // Hover efekty są domyślnie wyłączone - można je dodać przez className jeśli potrzeba
  const variantStyles = {
    blue: cn(
      'rounded-xl border-2 border-neon-blue/30 text-text-light p-6 relative overflow-hidden',
      'transition-all duration-300',
      'shadow-card-blue',
      'bg-modal'
    ),
    purple: cn(
      'rounded-xl border-2 border-neon-purple/30 p-6 relative overflow-hidden',
      'transition-all duration-300',
      'shadow-card-purple',
      'bg-bg-surface'
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
