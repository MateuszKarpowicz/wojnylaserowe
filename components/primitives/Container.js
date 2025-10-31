/**
 * Container - Komponent kontenera z ograniczoną szerokością
 *
 * Centralizuje zawartość i ogranicza maksymalną szerokość na różnych breakpointach.
 * Używa standardowych Tailwind container utilities z dodatkowymi opcjami maxWidth.
 *
 * @param {'div'|string} as - HTML element do renderowania (domyślnie: 'div')
 * @param {'md'|'lg'|'xl'|'2xl'|'full'} maxWidth - Maksymalna szerokość kontenera (domyślnie: 'xl')
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Zawartość kontenera
 * @param {object} ...props - Pozostałe props przekazywane do elementu
 * @returns {JSX.Element} Kontener z ograniczoną szerokością i paddingiem
 */
import { cn } from '@/lib/utils';

export default function Container({ as = 'div', maxWidth = 'xl', className = '', children, ...props }) {
  const As = as;
  const MAX_TO_CLASS = {
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-none',
  };
  const maxClass = MAX_TO_CLASS[maxWidth] || MAX_TO_CLASS.xl;
  const classes = cn('container mx-auto px-4', maxClass, className);

  return (
    <As className={classes} {...props}>
      {children}
    </As>
  );
}
