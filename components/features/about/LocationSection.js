import { Section } from '@/components/primitives';
import { ImageTextGrid, TextContentBlock } from '@/components/features/content';

/**
 * Sekcja lokalizacji z nagłówkiem i wrapperem
 * Sekcja jest teraz tylko kompozycją komponentów.
 * @param {Object} data - Dane lokalizacji z title, text, text2 i cta
 */
export default function LocationSection({ data }) {
  const { location } = data;

  return (
    <Section bg='dark' title={location.title}>
      <ImageTextGrid
        image={{
          src: '/images/hero/hero.webp',
          alt: 'Gabinet KULT',
          variant: 'purple',
          sizes: '(max-width: 768px) 100vw, 50vw',
        }}
        imagePosition='left'
      >
        <TextContentBlock
          content={[location.text, location.text2]}
          cta={location.cta}
          textVariant='light'
        />
      </ImageTextGrid>
    </Section>
  );
}
