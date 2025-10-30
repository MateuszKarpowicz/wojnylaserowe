import Image from 'next/image';
import Link from 'next/link';

/**
 * Sekcja lokalizacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane lokalizacji z title, text, text2 i cta
 */
export default function LocationSection({ data }) {
  const { location } = data;

  return (
    <section className='section-pad bg-bg-dark'>
      <div className='section-wrap'>
        {/* Header nad zdjęciem */}
        <h2 className='section-title-light'>{location.title}</h2>

        <div className='md:grid md:grid-cols-2 gap-8 items-center'>
          {/* Zdjęcie - na mobile pierwsze */}
          <div className='mb-8 md:mb-0 order-1'>
            <div className='relative w-full aspect-square max-w-md mx-auto md:max-w-full rounded-xl shadow-lg overflow-hidden border-2 border-neon-purple/30'>
              <Image
                src='/images/hero/hero.webp'
                alt='Gabinet KULT'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </div>

          {/* Tekst - na mobile drugie */}
          <div className='order-2 space-y-6'>
            <div className='space-y-4 text-text-light/90 leading-relaxed'>
              <p>{location.text}</p>
              <p>{location.text2}</p>
            </div>
            <Link href={location.cta.href} className='btn-cta-purple mt-6'>
              {location.cta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
