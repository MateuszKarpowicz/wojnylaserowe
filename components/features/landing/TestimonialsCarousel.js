'use client';

import { Section } from '@/components/primitives';
import { ExternalRating, TestimonialCard } from '@/components/features/testimonials';
import { useTestimonialsCarousel } from '@/components/hooks';

/**
 * TestimonialsCarousel - Karuzela opinii klientów
 *
 * Wyświetla opinie klientów w karuzeli z automatyczną zmianą i efektem glow.
 * Sekcja jest teraz tylko kompozycją komponentów.
 *
 * @param {string} title - Tytuł sekcji (domyślnie: 'Opinie klientów')
 * @param {Array} items - Tablica opinii klientów
 * @param {number} intervalMs - Interwał zmiany opinii w milisekundach (domyślnie: 6000)
 * @param {Object} external - Obiekt z oceną zewnętrzną (rating, reviewsCount, url, source)
 * @returns {JSX.Element} Sekcja z karuzelą opinii
 */
export default function TestimonialsCarousel({
  title = 'Opinie klientów',
  items = [],
  intervalMs = 6000,
  external,
}) {
  const { current, flash, decay, entered } = useTestimonialsCarousel(items, intervalMs);

  return (
    <Section bg='surface' title={title}>
      <ExternalRating external={external} />
      <TestimonialCard item={current} flash={flash} decay={decay} entered={entered} />
    </Section>
  );
}
