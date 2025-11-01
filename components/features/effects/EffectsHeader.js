import { HeaderWithCTA } from '@/components/features/content';

/**
 * Nagłówek strony Efekty z przyciskiem CTA
 * @param {Object} data - Dane header z title, subtitle i cta
 */
export default function EffectsHeader({ data }) {
  const { header, cta } = data;

  return (
    <HeaderWithCTA
      title={header.title}
      subtitle={header.subtitle}
      cta={cta}
    />
  );
}
