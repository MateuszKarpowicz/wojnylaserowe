import CardWithIcon from '@/components/ui/CardWithIcon';
import SectionWrapper from '@/components/ui/SectionWrapper';

/**
 * Sekcja "Dla kogo" z nagłówkiem i wrapperem
 * @param {Object} data - Dane target z title, quote, points, footer
 */
export default function TargetSectionWithHeader({ data }) {
  const { target } = data;

  return (
    <SectionWrapper title={data.title} bgColor='surface'>
      <div className='space-y-12'>
        <div className='card-border-blue'>
          <p className='text-xl md:text-2xl leading-relaxed italic text-text-light'>
            {target.quote}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {target.points.map((point, index) => (
            <CardWithIcon key={index} text={point.text} borderColor='blue' />
          ))}
        </div>
        <p className='text-secondary leading-relaxed text-center max-w-3xl mx-auto'>
          {target.footer}
        </p>
      </div>
    </SectionWrapper>
  );
}
