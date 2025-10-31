import { Section, Button } from '@/components/primitives';

/**
 * Reużywalny komponent CTA
 * @param {string} title - Tytuł sekcji
 * @param {string} text - Opis tekst
 * @param {string} href - Link do przekierowania
 * @param {string} button - Tekst przycisku
 * @param {'blue'|'purple'} variant - Wariant koloru przycisku
 * @param {'surface'|'dark'} bgColor - Kolor tła sekcji
 */
export default function CTASection({
  title,
  text,
  href,
  button,
  variant = 'blue',
  bgColor = 'surface',
}) {
  const isDark = bgColor === 'dark';
  const headerVariant = isDark ? 'light' : 'dark';
  const buttonVariant = variant === 'purple' ? 'ctaPurple' : 'ctaBlue';

  return (
    <Section bg={bgColor} title={title} subtitle={text} align='center'>
      <div className='text-center'>
        <Button as='a' href={href} variant={buttonVariant}>
          {button}
        </Button>
      </div>
    </Section>
  );
}
