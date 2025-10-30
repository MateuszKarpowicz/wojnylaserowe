import CardWithIcon from '@/components/ui/CardWithIcon';
import { Section, SectionHeader, Container } from '@/components/primitives';

/**
 * Sekcja kwalifikacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane kwalifikacji z title i items
 */
export default function QualificationsSection({ data }) {
  return (
    <Section bg='dark'>
      <Container>
        <SectionHeader title={data.title} variant='light' />
        <div className='sections-grid-auto'>
          {data.items.map((item, index) => (
            <CardWithIcon
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              borderColor='purple'
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
