/**
 * Card - Neutralna skóra karty jako domyślna
 *
 * Komponent prezentacyjny (bez logiki stanu/ARIA).
 * Domyślnie neutralny wygląd: białe tło, czarna subtelna obwódka, ciemny tekst.
 * Warianty brandowe dostępne explicite przez props.
 *
 * @param {string|React.Component} as - HTML element do renderowania (domyślnie: 'div')
 * @param {'neutral'|'surface'|'inverted'|'blue'|'purple'} variant - Wariant karty (domyślnie: 'neutral')
 * @param {'none'|'sm'|'md'|'lg'} size - Rozmiar paddingu (domyślnie: 'md')
 * @param {'none'|'weak'|'medium'|'strong'} elevation - Poziom cienia (domyślnie: 'weak')
 * @param {boolean} hoverable - Czy karta ma efekt hover (domyślnie: false)
 * @param {'none'|'subtle'|'bold'} border - Styl obwódki (domyślnie: 'subtle')
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Zawartość karty
 * @param {object} ...rest - Pozostałe props przekazywane do elementu
 * @returns {JSX.Element} Karta z odpowiednimi stylami
 */
import { cn } from '@/lib/utils';

export default function Card({
  as: As = 'div',
  variant = 'neutral',
  size = 'md',
  elevation = 'weak',
  hoverable = false,
  border = 'subtle',
  className = '',
  children,
  ...rest
}) {
  // Mapy klas dla wariantów
  const variantClasses = {
    neutral: 'bg-white text-neutral-900',
    surface: 'bg-bg-surface text-text-dark',
    inverted: 'bg-neutral-900 text-white',
    // Warianty brandowe (używane explicite gdy potrzebne)
    blue: cn(
      'border-2 border-neon-blue/30 text-text-light',
      'bg-modal', // bg-black/90
      'shadow-card-blue'
    ),
    purple: cn(
      'border-2 border-neon-purple/30',
      'bg-bg-surface',
      'shadow-card-purple'
    ),
  };

  const sizeClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  const elevationClasses = {
    none: '',
    weak: 'shadow-sm',
    medium: 'shadow-md',
    strong: 'shadow-lg',
  };

  // Dla wariantów brandowych elevation jest kontrolowany przez shadow-card-*
  // Neutral używa standardowych shadow-sm/md/lg
  const getElevationClass = () => {
    if (variant === 'blue' || variant === 'purple') {
      return ''; // Shadow jest już w variantClasses
    }
    return elevationClasses[elevation];
  };

  const borderClasses = {
    none: 'border-0',
    subtle: 'border border-neutral-900/10',
    bold: 'border-2 border-neutral-900/25',
  };

  // Dla wariantów brandowych border jest w variantClasses
  const getBorderClass = () => {
    if (variant === 'blue' || variant === 'purple') {
      return ''; // Border jest już w variantClasses
    }
    return borderClasses[border];
  };

  const hoverClass = hoverable
    ? 'transition-all duration-300 hover:shadow-lg cursor-pointer'
    : '';

  const variantClass = variantClasses[variant] || variantClasses.neutral;
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const elevationClass = getElevationClass();
  const borderClass = getBorderClass();

  return (
    <As
      className={cn(
        'rounded-xl relative overflow-hidden transition-all duration-300',
        variantClass,
        sizeClass,
        elevationClass,
        borderClass,
        hoverClass,
        className
      )}
      {...rest}
    >
      {children}
    </As>
  );
}
