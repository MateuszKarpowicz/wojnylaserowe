import { SocialMediaIcons } from '@/components/ui';
import { Section } from '@/components/primitives';

/**
 * Nagłówek strony kontakt z ikonkami social
 * @param {string} title - Tytuł strony
 * @param {string} subtitle - Podtytuł strony
 */
export default function ContactHeader({ title, subtitle }) {
  return (
    <Section bg='surface'>
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
