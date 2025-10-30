import CardWithIcon from '@/components/ui/CardWithIcon';
import { Section, SectionHeader, Card, Container } from '@/components/primitives';

/**
 * Sekcja podejścia z nagłówkiem i wrapperem
 * @param {Object} data - Dane podejścia z title, quote i points
 */
export default function ApproachSection({ data }) {
  const { approach } = data;

  return (
    <Section bg='surface'>
      <Container>
        <SectionHeader title={data.title} variant='dark' />
        <div className='space-y-12'>
          {/* Wyróżniony cytat */}
          <Card variant='borderBlue'>
            <p className='text-xl md:text-2xl leading-relaxed italic text-text-light'>
              {approach.quote}
            </p>
          </Card>

          {/* 3 cards z punktami */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {approach.points.map((point, index) => (
              <CardWithIcon
                key={index}
                icon={point.icon}
                title={point.title}
                text={point.text}
                borderColor='blue'
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
