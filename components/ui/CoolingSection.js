import CardWithIcon from '@/components/ui/CardWithIcon';
import Image from 'next/image';

/**
 * Sekcja chłodzenia z nagłówkiem i wrapperem
 * @param {Object} data - Dane cooling z title, intro, subtitle, points, footer
 */
export default function CoolingSection({ data }) {
  const { cooling } = data;

  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        {/* Header nad zdjęciem */}
        <h2 className='section-title-dark'>{cooling.title}</h2>

        <div className='md:grid md:grid-cols-2 gap-8 items-center'>
          {/* Zdjęcie - na mobile pierwsze */}
          <div className='mb-8 md:mb-0 order-1'>
            <div className='relative w-full aspect-square max-w-md mx-auto md:max-w-full rounded-xl shadow-lg overflow-hidden border-2 border-neon-purple/30'>
              <Image
                src='/images/hero/hero.webp'
                alt='Chłodzenie skóry podczas zabiegu'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
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
            <div className='grid grid-cols-1 gap-4'>
              {cooling.points.map((point, index) => (
                <CardWithIcon
                  key={index}
                  text={point.text}
                  borderColor='blue'
                />
              ))}
            </div>
            <p className='text-secondary leading-relaxed'>{cooling.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
