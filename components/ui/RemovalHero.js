import Image from 'next/image';
import { Section } from '@/components/primitives';

/**
 * RemovalHero - Komponent hero dla strony usuwania tatuażu
 *
 * @param {Object} hero - Dane hero z polami: title, subtitle, intro, intro2, intro3, intro4, intro5
 * @returns {JSX.Element} Sekcja hero
 */
export default function RemovalHero({ hero }) {
  if (!hero) {
    return null;
  }

  return (
    <Section bg='surface' className='border-b border-border-border'>
      {/* Nagłówek nad zdjęciem – ujednolicony jak na LP */}
      <h1 className='font-display uppercase text-center leading-tight tracking-[0.08em] md:tracking-[0.12em] text-4xl md:text-5xl hero-title-offset whitespace-pre-line'>
        {hero.title}
      </h1>

      <div className='md:grid md:grid-cols-2 gap-6 items-center'>
        {/* Zdjęcie - na mobile pierwsze, na desktop po lewej */}
        <div className='mb-8 md:mb-0 mt-4 md:mt-6'>
          <div className='relative w-full aspect-square max-w-md mx-auto rounded-lg shadow-xl border-2 border-neon-border-blue overflow-hidden'>
            <Image
              src='/images/hero/hero.webp'
              alt='Laserowe usuwanie tatuażu'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </div>
        </div>

        {/* Tekst - na mobile drugie, na desktop po prawej */}
        <div>
          <p className='text-xl md:text-2xl text-secondary mb-6 font-semibold'>
            {hero.subtitle}
          </p>
          <div className='space-y-4 text-secondary leading-relaxed'>
            <p>{hero.intro}</p>
            <p>{hero.intro2}</p>
            <p>{hero.intro3}</p>
            <p>{hero.intro4}</p>
            <p>{hero.intro5}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
