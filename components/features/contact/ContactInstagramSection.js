import { Section } from '@/components/primitives';
import { InstagramEmbed } from '@/components/features/content';

/**
 * ContactInstagramSection - Sekcja Instagram dla strony kontakt
 */
export default function ContactInstagramSection({ title = 'Śledź nas na Instagramie' }) {
  return (
    <Section bg='surface' title={title} containerProps={{ maxWidth: 'md' }}>
      <InstagramEmbed />
    </Section>
  );
}
