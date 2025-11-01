import { Section } from '@/components/primitives';
import { PointsGrid } from '@/components/features/content';

/**
 * ScarinkWhyChooseSection - Sekcja "Dlaczego warto" dla strony ScarINK
 */
export default function ScarinkWhyChooseSection({
  points = [],
  cardVariant = 'blue',
  title,
  bg = 'surface',
  subtitle,
  align = 'center',
}) {
  if (!points || points.length === 0) return null;

  return (
    <Section bg={bg} title={title} subtitle={subtitle} align={align}>
      <PointsGrid points={points} variant={cardVariant} columns={3} />
    </Section>
  );
}
