import { Card, Button } from '@/components/primitives';

/**
 * MapComponent - Komponent mapy bez Section wrappera
 *
 * Wydzielony komponent mapy do użycia w różnych sekcjach.
 * Zawiera nagłówek studia, adres, iframe z mapą i przycisk "PROWADŹ".
 *
 * @param {string} [studioName] - Nazwa studia (domyślnie: 'STUDIO KULT')
 * @param {string} [address] - Adres jako string (alternatywa dla addressLines)
 * @param {Array<string>} [addressLines] - Adres jako tablica linii
 * @param {string} [embedUrl] - URL do osadzenia mapy (env: NEXT_PUBLIC_MAPS_EMBED_URL)
 * @param {string} [mapsLink] - Link do Google Maps (env: NEXT_PUBLIC_MAPS_LINK)
 */
export default function MapComponent({
  studioName = 'STUDIO KULT',
  address = process.env.NEXT_PUBLIC_ADDRESS || 'ul. …, 30-000 Kraków',
  addressLines,
  embedUrl = process.env.NEXT_PUBLIC_MAPS_EMBED_URL,
  mapsLink = process.env.NEXT_PUBLIC_MAPS_LINK,
}) {
  return (
    <>
      {/* Nagłówek studia i adres nad mapą */}
      <header className='mb-4 text-center'>
        <h3 className='text-xl md:text-2xl font-bold text-text-light font-display tracking-wide'>
          {studioName}
        </h3>
        {Array.isArray(addressLines) && addressLines.length > 0 ? (
          <address className='text-text-light/80 mt-1 not-italic'>
            {addressLines.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </address>
        ) : (
          <address className='text-text-light/80 mt-1 not-italic'>{address}</address>
        )}
      </header>

      <Card variant='purple' size='none' className='overflow-hidden'>
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

      <Button
        as='a'
        href={mapsLink || '#'}
        target='_blank'
        rel='noopener noreferrer'
        variant='cta-purple'
        size='md'
        className='mt-4 block mx-auto'
      >
        PROWADŹ
      </Button>
    </>
  );
}
