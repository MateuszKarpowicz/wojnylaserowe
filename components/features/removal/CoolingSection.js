import { Section } from '@/components/primitives';
import { ImageTextGrid, TextContentBlock } from '@/components/features/content';

/**
 * Sekcja chłodzenia z nagłówkiem i wrapperem
 * Sekcja jest teraz tylko kompozycją komponentów.
 * @param {Object} data - Dane cooling z title, intro, subtitle, points, footer
 */
export default function CoolingSection({ data }) {
  const { cooling } = data;

  return (
    <Section bg='surface' title={cooling.title}>
      <ImageTextGrid
        image={{
          src: '/images/hero/hero.webp',
          alt: 'Chłodzenie skóry podczas zabiegu',
          variant: 'purple',
          sizes: '(max-width: 768px) 100vw, 50vw',
        }}
        imagePosition='left'
      >
        <TextContentBlock
          intro={cooling.intro}
          subtitle={cooling.subtitle}
          points={cooling.points}
          footer={cooling.footer}
          pointsVariant='blue'
          textVariant='dark'
        />
      </ImageTextGrid>
    </Section>
  );
}
