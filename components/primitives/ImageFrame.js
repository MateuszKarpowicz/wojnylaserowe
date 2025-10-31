/**
 * ImageFrame - Komponent ramki dla zdjęć z wariantami stylów
 *
 * Ramka dla zdjęć z różnymi wariantami (plain, neon blue, neon purple)
 * i opcjami aspect ratio. Obsługuje legacy aliases dla backward compatibility.
 *
 * @param {'plain'|'blue'|'purple'|'neonBlue'|'neonPurple'} variant - Wariant ramki (domyślnie: 'plain')
 * @param {'square'|'16:9'} aspect - Proporcje obrazu (domyślnie: 'square')
 * @param {string} sizeClass - Klasa CSS dla szerokości (np. 'max-w-md')
 * @param {string} className - Dodatkowe klasy CSS
 * @param {boolean} rounded - Czy ramka ma zaokrąglone rogi (domyślnie: true)
 * @param {React.ReactNode} children - Zawartość ramki (zwykle Image component)
 * @param {object} ...props - Pozostałe props przekazywane do elementu
 * @returns {JSX.Element} Ramka z odpowiednimi stylami i aspect ratio
 */
import { cn } from '@/lib/utils';

export default function ImageFrame({
  variant = 'plain',
  aspect = 'square',
  sizeClass = '',
  className = '',
  rounded = true,
  children,
  ...props
}) {
  const OUTER_BY_VARIANT = {
    plain: 'bg-surface shadow-sm overflow-hidden',
    blue:
      'shadow-xl border-2 border-neon-border-blue-medium shadow-glow overflow-hidden',
    purple:
      'shadow-xl border-2 border-neon-border-purple-active shadow-glow-purple-medium overflow-hidden',
    // Legacy aliases for backward compatibility
    neonBlue:
      'shadow-xl border-2 border-neon-border-blue-medium shadow-glow overflow-hidden',
    neonPurple:
      'shadow-xl border-2 border-neon-border-purple-active shadow-glow-purple-medium overflow-hidden',
  };

  const ASPECT_CLASS = aspect === '16:9' ? 'aspect-[16/9]' : 'aspect-square';

  const outer = cn(
    'relative w-full',
    sizeClass,
    OUTER_BY_VARIANT[variant] || OUTER_BY_VARIANT.plain,
    rounded ? 'rounded-lg' : 'rounded-none',
    className,
  );

  return (
    <div className={outer} {...props}>
      <div className={cn('relative', ASPECT_CLASS)}>{children}</div>
    </div>
  );
}
