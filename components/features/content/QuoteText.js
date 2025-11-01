import { cn } from '@/lib/utils';

/**
 * QuoteText - Cytat jako zwykły tekst (bez Card)
 *
 * Używany w ApproachSection gdzie cytat jest częścią tekstu, nie kartą.
 *
 * @param {string} quote - Tekst cytatu
 * @param {'dark'|'light'} [variant] - Wariant koloru tekstu (domyślnie: 'dark')
 * @param {string} [className] - Dodatkowe klasy CSS
 */
export default function QuoteText({ quote, variant = 'dark', className = '' }) {
  const textColor = variant === 'light' ? 'text-text-light' : 'text-text-dark';

  return (
    <p
      className={cn(
        'text-xl md:text-2xl leading-relaxed italic text-center',
        textColor,
        className
      )}
    >
      {quote}
    </p>
  );
}
