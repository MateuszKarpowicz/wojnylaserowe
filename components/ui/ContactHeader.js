import SocialMediaIcons from '@/components/ui/SocialMediaIcons';
import { Section, SectionHeader } from '@/components/primitives';

/**
 * Nagłówek strony kontakt z ikonkami social
 * @param {string} title - Tytuł strony
 * @param {string} subtitle - Podtytuł strony
 */
export default function ContactHeader({ title, subtitle }) {
  return (
    <Section bg='surface'>
      <SectionHeader title={title} subtitle={subtitle} variant='dark' align='center' />
          {/* Ikony social media */}
          <div className='flex justify-center'>
            <SocialMediaIcons size='text-2xl' className='gap-8' />
          </div>
    </Section>
  );
}
