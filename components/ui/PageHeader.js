/**
 * Reużywalny nagłówek strony
 * @param {string} title - Tytuł strony
 * @param {string} subtitle - Podtytuł strony
 */
import { Section } from '@/components/primitives';

export default function PageHeader({ title, subtitle }) {
  return (
    <Section bg='surface' title={title} subtitle={subtitle} align='center' />
  );
}
