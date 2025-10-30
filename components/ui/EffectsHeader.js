/**
 * Nagłówek strony Efekty z przyciskiem CTA
 * @param {Object} data - Dane header z title, subtitle i cta
 */
import { Section, SectionHeader, Button } from '@/components/primitives';

export default function EffectsHeader({ data }) {
  const { header, cta } = data;

  return (
    <Section bg='surface'>
      <SectionHeader title={header.title} subtitle={header.subtitle} variant='dark' align='center' />

        {/* LINK DO ETAPÓW */}
        <div className='text-center mb-8'>
        <Button as='a' href={cta.href} variant='ctaBlue' fullWidth={false}>
            {cta.text}
        </Button>
      </div>
    </Section>
  );
}
