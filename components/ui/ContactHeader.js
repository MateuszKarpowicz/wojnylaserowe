import SocialMediaIcons from '@/components/ui/SocialMediaIcons';

/**
 * Nagłówek strony kontakt z ikonkami social
 * @param {string} title - Tytuł strony
 * @param {string} subtitle - Podtytuł strony
 */
export default function ContactHeader({ title, subtitle }) {
  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-4xl font-display font-bold text-text-dark mb-4'>
            {title}
          </h1>
          <p className='text-lg text-secondary mb-8'>{subtitle}</p>

          {/* Ikony social media */}
          <div className='flex justify-center'>
            <SocialMediaIcons size='text-2xl' className='gap-8' />
          </div>
        </div>
      </div>
    </section>
  );
}
