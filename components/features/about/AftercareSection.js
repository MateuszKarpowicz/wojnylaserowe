import CardWithIcon from '@/components/ui/CardWithIcon';
import Image from 'next/image';

/**
 * Sekcja pielęgnacji
 * @param {Object} aftercare - Dane z intro, subtitle, points, footer
 */
export default function AftercareSection({ aftercare }) {
  return (
    <div className='space-y-8'>
      <div>
        <p className='text-text-light/90 leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
          {aftercare.intro}
        </p>
        <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
          {aftercare.subtitle}
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          {aftercare.points.map((point, index) => (
            <CardWithIcon key={index} text={point.text} borderColor='purple' />
          ))}
        </div>
        <p className='text-text-light/80 leading-relaxed text-center max-w-3xl mx-auto'>
          {aftercare.footer}
        </p>
      </div>

      {/* Zdjęcie */}
      <div className='flex justify-center'>
        <div className='relative w-full aspect-square max-w-md mx-auto rounded-xl shadow-lg overflow-hidden border-2 border-neon-border-purple'>
          <Image
            src='/images/hero/hero.webp'
            alt='Pielęgnacja po zabiegu'
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </div>
    </div>
  );
}
