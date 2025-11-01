import { Card } from '@/components/primitives';

/**
 * ProcessAftercare - Sekcja aftercare dla ProcessSection
 *
 * Renderuje sekcję aftercare z intro, subtitle i gridem punktów z ikonami.
 *
 * @param {Object} aftercare - Obiekt aftercare z polami: intro, subtitle, points
 * @param {Array} aftercare.points - Tablica punktów z polami: icon, text
 * @param {'blue'|'purple'} cardVariant - Wariant kart (domyślnie: 'purple')
 */
export default function ProcessAftercare({ aftercare, cardVariant = 'purple' }) {
  if (!aftercare) return null;

  return (
    <div>
      <p className='text-text-light/90 leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
        {aftercare.intro}
      </p>
      <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
        {aftercare.subtitle}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {aftercare.points.map((point, index) => (
          <Card key={index} variant={cardVariant}>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='text-3xl'>{point.icon}</div>
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
  );
}
