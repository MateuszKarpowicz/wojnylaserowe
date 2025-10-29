import removalPageData from '@/content/texts/removal-page.json';

export default function CoolingSection() {
  const { cooling } = removalPageData;

  return (
    <div className='section-wrap'>
      {/* Header nad zdjęciem */}
      <h2 className='text-3xl md:text-4xl font-display font-bold mb-12 text-center text-text-dark'>
        {cooling.title}
      </h2>

      <div className='md:grid md:grid-cols-2 gap-8 items-center'>
        {/* Zdjęcie - na mobile pierwsze */}
        <div className='mb-8 md:mb-0 order-1'>
          <div className='relative w-full aspect-square max-w-md mx-auto md:max-w-full rounded-xl shadow-lg overflow-hidden border-2 border-neon-purple/30'>
            {/* Placeholder zdjęcia - zamokowane */}
            <div className='absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-neon-blue/10 to-neon-purple/20 flex items-center justify-center'>
              <div className='text-center p-8'>
                <p className='text-secondary text-sm mb-2'>
                  Zdjęcie chłodziarki do skóry
                </p>
                <p className='text-muted text-xs'>(Placeholder)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tekst - na mobile drugie */}
        <div className='order-2 space-y-6'>
          <p className='text-secondary leading-relaxed text-lg'>
            {cooling.intro}
          </p>
          <p className='text-secondary font-semibold text-lg'>
            {cooling.subtitle}
          </p>
          <ul className='space-y-3 text-secondary leading-relaxed'>
            {cooling.points.map((point, index) => (
              <li key={index} className='flex gap-3'>
                <span className='text-neon-purple flex-shrink-0'>•</span>
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
          <p className='text-secondary leading-relaxed'>{cooling.footer}</p>
        </div>
      </div>
    </div>
  );
}
