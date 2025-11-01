import { HeaderSimple } from '@/components/features/content';

/**
 * Reużywalny nagłówek strony
 * @param {string} title - Tytuł strony
 * @param {string} subtitle - Podtytuł strony
 */
export default function PageHeader({ title, subtitle }) {
  return <HeaderSimple title={title} subtitle={subtitle} />;
}
