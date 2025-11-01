import { Section } from '@/components/primitives';

/**
 * HeaderSimple - Prosty nagłówek strony
 *
 * Używa Section z title/subtitle dla prostych nagłówków.
 *
 * @param {string} title - Tytuł strony
 * @param {string} [subtitle] - Podtytuł strony
 * @param {'center'|'left'|'right'} [align] - Wyrównanie (domyślnie: 'center')
 * @param {'surface'|'dark'} [bg] - Kolor tła (domyślnie: 'surface')
 */
export default function HeaderSimple({ title, subtitle, align = 'center', bg = 'surface' }) {
  return <Section bg={bg} title={title} subtitle={subtitle} align={align} />;
}
