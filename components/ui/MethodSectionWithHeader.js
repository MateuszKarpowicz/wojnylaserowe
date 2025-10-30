import CardWithIcon from '@/components/ui/CardWithIcon';
import SectionWrapper from '@/components/ui/SectionWrapper';

/**
 * Sekcja metody z nagłówkiem i wrapperem
 * @param {Object} data - Dane method z title, intro, subtitle, effects, footer
 */
export default function MethodSectionWithHeader({ data }) {
  const { method } = data;

  return (
    <SectionWrapper title={data.title} bgColor='bg-dark'>
      <div className='mb-8'>
        <p className='text-text-light/90 leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
          {method.intro}
        </p>
        <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
          {method.subtitle}
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          {method.effects.map((effect, index) => (
            <CardWithIcon key={index} text={effect.text} borderColor='purple' />
          ))}
        </div>
        <p className='text-text-light/80 leading-relaxed text-center max-w-3xl mx-auto'>
          {method.footer}
        </p>
      </div>
    </SectionWrapper>
  );
}
