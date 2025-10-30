import aboutPageData from '@/content/texts/about-page.json';
import Image from 'next/image';

export default function AboutHero() {
  const { hero } = aboutPageData;

  return (
    <section className='bg-surface pt-0 pb-10 md:pb-14'>
      <div className='section-wrap'>
        {/* Nagłówek nad zdjęciem */}
        <h1 className='text-hero text-text-dark mb-12 text-center hero-title-offset'>
          {hero.title}
        </h1>

        <div className='md:grid md:grid-cols-2 gap-8 items-center'>
          {/* Zdjęcie - na mobile pierwsze, na desktop po lewej */}
          <div className='mb-8 md:mb-0 order-1 md:order-1'>
            <div className='relative w-full aspect-square max-w-md mx-auto rounded-lg shadow-xl border-2 border-neon-blue/20 overflow-hidden'>
              <Image
                src='/images/hero/hero.webp'
                alt='O nas - Wojny Laserowe'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority
              />
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
      </div>
    </section>
  );
}
