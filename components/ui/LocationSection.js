import aboutPageData from '@/content/texts/about-page.json';
import Link from 'next/link';

export default function LocationSection() {
  const { location } = aboutPageData;

  return (
    <div className='md:grid md:grid-cols-2 gap-8 items-center'>
      {/* Zdjęcie - na mobile pierwsze */}
      <div className='mb-8 md:mb-0 order-1'>
        <div className='relative w-full aspect-square max-w-md mx-auto md:max-w-full rounded-lg shadow-lg overflow-hidden'>
          {/* Placeholder zdjęcia - zamokowane */}
          <div className='absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-neon-blue/10 to-neon-purple/20 flex items-center justify-center'>
            <div className='text-center p-8'>
              <p className='text-secondary text-sm mb-2'>
                Zdjęcie gabinetu KULT
              </p>
              <p className='text-muted text-xs'>(Placeholder)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tekst - na mobile drugie */}
      <div className='order-2 space-y-6'>
        <h2 className='text-3xl md:text-4xl font-display text-text-dark'>
          {location.title}
        </h2>
        <div className='space-y-4 text-secondary leading-relaxed'>
          <p>{location.text}</p>
          <p>{location.text2}</p>
        </div>
        <Link
          href={location.cta.href}
          className='btn-primary inline-block mt-6'
        >
          {location.cta.text}
        </Link>
      </div>
    </div>
  );
}
