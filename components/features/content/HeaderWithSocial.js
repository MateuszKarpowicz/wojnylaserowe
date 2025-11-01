import { SocialMediaIcons } from '@/components/ui';
import { Section } from '@/components/primitives';

/**
 * HeaderWithSocial - Nagłówek strony z ikonkami social media
 *
 * Używa specjalnego stylu h1 (hero-title-offset) jak w hero sekcjach.
 *
 * @param {string} title - Tytuł strony
 * @param {string} [subtitle] - Podtytuł strony (może zawierać HTML)
 * @param {'surface'|'dark'} [bg] - Kolor tła (domyślnie: 'surface')
 */
export default function HeaderWithSocial({ title, subtitle, bg = 'surface' }) {
  return (
    <Section bg={bg}>
      <h1 className='font-display uppercase text-center leading-tight tracking-[0.08em] md:tracking-[0.12em] text-4xl md:text-5xl hero-title-offset whitespace-pre-line'>
        {title}
      </h1>
      {subtitle && (
        <p
          className='text-text-dark/80 max-w-prose mx-auto text-center mt-3'
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
      <div className='flex justify-center mt-4'>
        <SocialMediaIcons size='text-2xl' className='gap-8' />
      </div>
    </Section>
  );
}
