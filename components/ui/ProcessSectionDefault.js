"use client";
import scarinkPageData from '@/content/texts/scarink-page.json';
import { Card } from '@/components/primitives';

/**
 * ProcessSectionDefault - Komponent procesu dla stron szczegółowych (default)
 *
 * Wyświetla wszystkie kroki procesu wraz z sekcją aftercare (opieka po zabiegu).
 * Używa białych kart (variant='purple') z ciemnym tekstem na ciemnym tle sekcji.
 *
 * @returns {JSX.Element} Sekcja z krokami procesu i aftercare
 */
export default function ProcessSectionDefault() {
  const { process } = scarinkPageData;

  return (
    <div className='space-y-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {process.steps.map((step, index) => (
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
          {process.aftercare.intro}
        </p>
        <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
          {process.aftercare.subtitle}
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {process.aftercare.points.map((point, index) => (
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
