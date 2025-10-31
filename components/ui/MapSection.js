import { Section, Card, Button } from '@/components/primitives';

export default function MapSection({
  title = 'Jak do nas trafić',
  embedUrl = process.env.NEXT_PUBLIC_MAPS_EMBED_URL,
  mapsLink = process.env.NEXT_PUBLIC_MAPS_LINK,
  studioName = 'STUDIO KULT',
  address = process.env.NEXT_PUBLIC_ADDRESS || 'ul. …, 30-000 Kraków',
  addressLines,
}) {
  return (
    <Section bg='dark' title={title}>
      {/* Nagłówek studia i adres nad mapą */}
        <div className='mb-4 text-center'>
          <h3 className='text-xl md:text-2xl font-bold text-text-light font-display tracking-wide'>{studioName}</h3>
          {Array.isArray(addressLines) && addressLines.length > 0 ? (
            <div className='text-text-light/80 mt-1'>
              {addressLines.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
          ) : (
            <p className='text-text-light/80 mt-1'>{address}</p>
          )}
        </div>

        <Card variant='purple' className='p-0 overflow-hidden'>
          {embedUrl ? (
            <iframe
              title='Mapa dojazdu'
              src={embedUrl}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='w-full h-[360px] md:h-[440px] border-0'
            />
          ) : (
            <div
              className='w-full h-[360px] md:h-[440px] bg-[url("/images/hero/hero.webp")] bg-cover bg-center'
              aria-label='Mapa — podgląd'
            />
          )}
        </Card>
        <div className='mt-4 flex justify-center'>
          <Button
            as='a'
            href={mapsLink || '#'}
            target='_blank'
            rel='noopener noreferrer'
            variant='ctaPurple'
            size='md'
          >
            PROWADŹ
          </Button>
        </div>
    </Section>
  );
}
