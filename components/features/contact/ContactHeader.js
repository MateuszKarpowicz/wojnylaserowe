import { HeaderWithSocial } from '@/components/features/content';

/**
 * Nagłówek strony kontakt z ikonkami social
 * @param {string} title - Tytuł strony
 * @param {string} subtitle - Podtytuł strony
 */
export default function ContactHeader({ title, subtitle }) {
  return <HeaderWithSocial title={title} subtitle={subtitle} />;
}
