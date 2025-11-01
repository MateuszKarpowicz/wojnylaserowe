import { Section } from '@/components/primitives';
import { CTAContent } from '@/components/features/content';

/**
 * RemovalCTASection - Sekcja CTA dla strony usuwania tatuażu
 */
export default function RemovalCTASection({ title, text, href, button, variant = 'blue', bg = 'surface' }) {
  const buttonVariant = variant === 'purple' ? 'cta-purple' : 'cta-blue';

  return (
    <Section bg={bg} title={title} subtitle={text} align='center'>
      <CTAContent text={button} href={href} variant={buttonVariant} />
    </Section>
  );
}
