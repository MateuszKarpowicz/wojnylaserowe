import { Section, Button } from '@/components/primitives';

/**
 * Reużywalny komponent CTA
 * @param {string} title - Tytuł sekcji
 * @param {string} text - Opis tekst
 * @param {string} href - Link do przekierowania
 * @param {string} button - Tekst przycisku
 * @param {'blue'|'purple'} variant - Wariant koloru przycisku
 * @param {'surface'|'dark'} bg - Kolor tła sekcji
 */
export default function CTASection({
  title,
  text,
  href,
  button,
  variant = 'blue',
  bg = 'surface',
}) {
  const isDark = bg === 'dark';
  const headerVariant = isDark ? 'light' : 'dark';
  const buttonVariant = variant === 'purple' ? 'cta-purple' : 'cta-blue';

  return (
    <Section bg={bg} title={title} subtitle={text} align='center'>
      <div className='text-center'>
        <Button as='a' href={href} variant={buttonVariant}>
          {button}
        </Button>
      </div>
    </Section>
  );
}
