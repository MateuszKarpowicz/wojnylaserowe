import { Card } from '@/components/primitives';

/**
 * ProcessSectionDefault - Komponent procesu dla stron szczegółowych (default)
 *
 * Wyświetla wszystkie kroki procesu wraz z sekcją aftercare (opieka po zabiegu).
 * Używa białych kart (variant='purple') z ciemnym tekstem na ciemnym tle sekcji.
 *
 * @param {Object} data - Dane procesu z polami: steps (Array) i aftercare (Object)
 * @param {Array} data.steps - Tablica kroków procesu z polami: title, text
 * @param {Object} data.aftercare - Obiekt z polami: intro, subtitle, points (Array)
 * @returns {JSX.Element} Sekcja z krokami procesu i aftercare
 */
export default function ProcessSectionDefault({ data }) {
  if (!data || !data.steps || !data.aftercare) {
    return null;
  }

  const { steps, aftercare } = data;

  return (
    <div className='space-y-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {steps.map((step, index) => (
          <Card key={index} variant='purple'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='text-3xl text-neon-purple font-display font-bold'>
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
          </Card>
        ))}
      </div>
      <div>
        <p className='text-text-light/90 leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
          {aftercare.intro}
        </p>
        <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
          {aftercare.subtitle}
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {aftercare.points.map((point, index) => (
            <Card key={index} variant='purple'>
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <div className='text-3xl'>
                    {point.icon}
                  </div>
                </div>
                <div className='flex-1'>
                  <p className='text-sm text-secondary leading-relaxed'>
                    {point.text}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
