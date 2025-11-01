import { Button } from '@/components/primitives';

/**
 * CTAContent - Komponent CTA bez Section wrappera
 *
 * Wydzielony komponent przycisku CTA do użycia w różnych sekcjach.
 *
 * @param {string} text - Tekst przycisku
 * @param {string} href - Link do przekierowania
 * @param {'cta-blue'|'cta-purple'} [variant] - Wariant przycisku (domyślnie: 'cta-blue')
 */
export default function CTAContent({ text, href, variant = 'cta-blue' }) {
  return (
    <div className='text-center'>
      <Button as='a' href={href} variant={variant}>
        {text}
      </Button>
    </div>
  );
}
