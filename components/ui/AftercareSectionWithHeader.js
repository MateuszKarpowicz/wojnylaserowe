import CardWithIcon from '@/components/ui/CardWithIcon';

/**
 * Sekcja pielęgnacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane aftercare z title, intro, subtitle, points, footer
 */
export default function AftercareSectionWithHeader({ data }) {
  const { aftercare } = data;

  return (
    <section className='section-pad bg-bg-dark'>
      <div className='section-wrap'>
        <h2 className='text-3xl md:text-4xl font-display font-bold mb-12 text-center text-text-light'>
          {data.title}
        </h2>
        <div className='mb-8'>
          <p className='text-text-light/90 leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
            {aftercare.intro}
          </p>
          <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
            {aftercare.subtitle}
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            {aftercare.points.map((point, index) => (
              <CardWithIcon
                key={index}
                text={point.text}
                borderColor='purple'
              />
            ))}
          </div>
          <p className='text-text-light/80 leading-relaxed text-center max-w-3xl mx-auto mb-8'>
            {aftercare.footer}
          </p>
        </div>

        {/* Zdjęcie */}
        <div className='flex justify-center'>
          <div className='relative w-full aspect-square max-w-md mx-auto rounded-xl shadow-lg overflow-hidden border-2 border-neon-purple/30'>
            {/* Placeholder zdjęcia - zamokowane */}
            <div className='absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-neon-blue/10 to-neon-purple/20 flex items-center justify-center'>
              <div className='text-center p-8'>
                <p className='text-text-light text-sm mb-2'>
                  Zdjęcie pielęgnacji po zabiegu
                </p>
                <p className='text-text-light/60 text-xs'>(Placeholder)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
