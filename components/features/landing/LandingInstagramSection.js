import { Section } from '@/components/primitives';
import { InstagramEmbed } from '@/components/features/content';

/**
 * LandingInstagramSection - Sekcja Instagram dla landing page
 */
export default function LandingInstagramSection({ title = 'Śledź nas na Instagramie' }) {
  return (
    <Section bg='surface' title={title} containerProps={{ maxWidth: 'md' }}>
      <InstagramEmbed />
    </Section>
  );
}
