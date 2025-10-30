/**
 * Reużywalny nagłówek strony
 * @param {string} title - Tytuł strony
 * @param {string} subtitle - Podtytuł strony
 */
import { Section, SectionHeader } from '@/components/primitives';

export default function PageHeader({ title, subtitle }) {
  return (
    <Section bg='surface'>
      <SectionHeader title={title} subtitle={subtitle} variant='dark' align='center' />
    </Section>
  );
}
