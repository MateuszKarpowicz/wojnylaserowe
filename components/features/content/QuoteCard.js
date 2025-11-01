import { Card } from '@/components/primitives';

/**
 * QuoteCard - Karta z cytatem
 *
 * Standaryzowany komponent do wyświetlania cytatów w sekcjach.
 *
 * @param {string} quote - Tekst cytatu
 * @param {'blue'|'purple'|'dark'} variant - Wariant karty (domyślnie: 'blue')
 * @param {'light'|'dark'} textVariant - Wariant koloru tekstu (domyślnie: 'light')
 * @param {string} className - Dodatkowe klasy CSS
 */
export default function QuoteCard({
  quote,
  variant = 'blue',
  textVariant = 'light',
  className = ''
}) {
  if (!quote) return null;

  const textClass = textVariant === 'light' ? 'text-text-light' : 'text-text-dark';

  return (
    <Card variant={variant} className={className}>
      <p className={`${textClass} text-xl md:text-2xl leading-relaxed italic`}>
        {quote}
      </p>
    </Card>
  );
}
