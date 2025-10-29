import CardWithIcon from '@/components/ui/CardWithIcon';

/**
 * Sekcja "Jak działa"
 * @param {Object} howItWorks - Dane z intro, subtitle, points, footer
 */
export default function HowItWorksSection({ howItWorks }) {
  return (
    <>
      <div className='mb-8'>
        <p className='text-text-light/90 leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
          {howItWorks.intro}
        </p>
        <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
          {howItWorks.subtitle}
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          {howItWorks.points.map((point, index) => (
            <CardWithIcon key={index} text={point.text} borderColor='purple' />
          ))}
        </div>
        <p className='text-text-light/80 leading-relaxed text-center max-w-3xl mx-auto'>
          {howItWorks.footer}
        </p>
      </div>

      {/* Zdjęcie */}
      <div className='flex justify-center'>
        <div className='relative w-full aspect-square max-w-md mx-auto rounded-xl shadow-lg overflow-hidden border-2 border-neon-blue/30'>
          {/* Placeholder zdjęcia - zamokowane */}
          <div className='absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-blue/20 flex items-center justify-center'>
            <div className='text-center p-8'>
              <p className='text-text-light text-sm mb-2'>
                Zdjęcie lasera pikosekundowego
              </p>
              <p className='text-text-light/60 text-xs'>(Placeholder)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
