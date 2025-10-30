import CardWithIcon from '@/components/ui/CardWithIcon';
import SectionWrapper from '@/components/ui/SectionWrapper';

/**
 * Sekcja procesu z nagłówkiem i wrapperem
 * @param {Object} data - Dane process z title, steps, aftercare
 */
export default function ProcessSectionWithHeader({ data }) {
  const { process } = data;

  return (
    <SectionWrapper title={data.title} bgColor='bg-dark'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        {process.steps.map((step, index) => (
          <CardWithIcon key={index} borderColor='purple'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='qualification-icon text-neon-purple'>
                  {index + 1}
                </div>
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-text-dark mb-2'>
                  {step.title}
                </h3>
                <p className='text-sm text-secondary leading-relaxed'>
                  {step.text}
                </p>
              </div>
            </div>
          </CardWithIcon>
        ))}
      </div>
      <div className='mb-8'>
        <p className='text-text-light/90 leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
          {process.aftercare.intro}
        </p>
        <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
          {process.aftercare.subtitle}
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {process.aftercare.points.map((point, index) => (
            <CardWithIcon key={index} borderColor='purple'>
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <div className='qualification-icon text-neon-purple'>
                    {point.icon}
                  </div>
                </div>
                <div className='flex-1'>
                  <p className='text-sm text-secondary leading-relaxed'>
                    {point.text}
                  </p>
                </div>
              </div>
            </CardWithIcon>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
