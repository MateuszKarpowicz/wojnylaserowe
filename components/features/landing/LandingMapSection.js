import { Section } from '@/components/primitives';
import { MapComponent } from '@/components/features/content';

/**
 * LandingMapSection - Sekcja mapy dla landing page
 *
 * @param {string} [studioName] - Nazwa studia
 * @param {Array<string>} [addressLines] - Adres jako tablica linii
 */
export default function LandingMapSection({ studioName, addressLines }) {
  return (
    <Section bg='dark' title='Jak do nas trafić'>
      <MapComponent studioName={studioName} addressLines={addressLines} />
    </Section>
  );
}
