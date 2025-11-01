import { Section, Button } from '@/components/primitives';

/**
 * HeaderWithCTA - Nagłówek strony z przyciskiem CTA
 *
 * @param {string} title - Tytuł strony
 * @param {string} [subtitle] - Podtytuł strony
 * @param {Object} cta - { href, text }
 * @param {'center'|'left'|'right'} [align] - Wyrównanie (domyślnie: 'center')
 * @param {'surface'|'dark'} [bg] - Kolor tła (domyślnie: 'surface')
 * @param {'cta-blue'|'cta-purple'} [buttonVariant] - Wariant przycisku (domyślnie: 'cta-blue')
 */
export default function HeaderWithCTA({
  title,
  subtitle,
  cta,
  align = 'center',
  bg = 'surface',
  buttonVariant = 'cta-blue',
}) {
  return (
    <Section bg={bg} title={title} subtitle={subtitle} align={align}>
      {cta && (
        <div className='text-center mb-8'>
          <Button as='a' href={cta.href} variant={buttonVariant} fullWidth={false}>
            {cta.text}
          </Button>
        </div>
      )}
    </Section>
  );
}
