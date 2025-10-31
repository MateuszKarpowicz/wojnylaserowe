/**
 * Nagłówek strony Efekty z przyciskiem CTA
 * @param {Object} data - Dane header z title, subtitle i cta
 */
import { Section, Button } from '@/components/primitives';

export default function EffectsHeader({ data }) {
  const { header, cta } = data;

  return (
    <Section bg='surface' title={header.title} subtitle={header.subtitle} align='center'>
      {/* LINK DO ETAPÓW */}
      <div className='text-center mb-8'>
        <Button as='a' href={cta.href} variant='cta-blue' fullWidth={false}>
          {cta.text}
        </Button>
      </div>
    </Section>
  );
}
