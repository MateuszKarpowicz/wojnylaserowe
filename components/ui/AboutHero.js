import aboutPageData from '@/content/texts/about-page.json';

export default function AboutHero() {
  const { hero } = aboutPageData;

  return (
    <section className='section-wrap bg-surface pt-0 pb-10 md:pb-14'>
      {/* Nagłówek nad zdjęciem */}
      <h1 className='text-4xl md:text-5xl font-display font-bold text-text-dark mb-1 md:mb-2 text-center'>
        {hero.title}
      </h1>

      <div className='md:grid md:grid-cols-2 gap-8 items-center'>
        {/* Zdjęcie - na mobile pierwsze, na desktop po lewej */}
        <div className='mb-8 md:mb-0 order-1 md:order-1'>
          <div className='relative w-full aspect-square max-w-md mx-auto rounded-lg shadow-xl border-2 border-neon-blue/20 overflow-hidden'>
            {/* Placeholder zdjęcia - zamokowane */}
            <div className='absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-blue/20 flex items-center justify-center'>
              <div className='text-center p-8'>
                <p className='text-secondary text-sm mb-2'>Zdjęcie Piotra</p>
                <p className='text-muted text-xs'>(Placeholder)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tekst - na mobile drugie, na desktop po prawej */}
        <div className='order-2 md:order-2'>
          <p className='text-xl md:text-2xl text-secondary mb-6 font-semibold'>
            {hero.subtitle}
          </p>
          <div className='space-y-4 text-secondary leading-relaxed'>
            <p>{hero.intro}</p>
            <p>{hero.intro2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
