import { Section } from '@/components/primitives';
import { MapComponent } from '@/components/features/content';

/**
 * ContactMapSection - Sekcja mapy dla strony kontakt
 *
 * @param {string} [studioName] - Nazwa studia
 * @param {string} [address] - Adres jako string
 * @param {Array<string>} [addressLines] - Adres jako tablica linii
 */
export default function ContactMapSection({ studioName, address, addressLines }) {
  return (
    <Section bg='dark' title='Jak do nas trafić'>
      <MapComponent studioName={studioName} address={address} addressLines={addressLines} />
    </Section>
  );
}
