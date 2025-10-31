import Image from 'next/image';
import { Section, Button } from '@/components/primitives';

/**
 * Sekcja lokalizacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane lokalizacji z title, text, text2 i cta
 */
export default function LocationSection({ data }) {
  const { location } = data;

  return (
    <Section bg='dark' title={location.title}>
      <div className='md:grid md:grid-cols-2 gap-8 items-center'>
        {/* Zdjęcie - na mobile pierwsze */}
        <div className='mb-8 md:mb-0 mt-4 md:mt-6'>
          <div className='relative w-full aspect-square max-w-md mx-auto md:max-w-full rounded-xl shadow-lg overflow-hidden border-2 border-neon-border-purple'>
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
        <div className='space-y-6'>
          <div className='space-y-4 text-text-light/90 leading-relaxed'>
            <p>{location.text}</p>
            <p>{location.text2}</p>
          </div>
          <Button as='a' href={location.cta.href} variant='ctaPurple' className='mt-6'>
            {location.cta.text}
          </Button>
        </div>
      </div>
    </Section>
  );
}
