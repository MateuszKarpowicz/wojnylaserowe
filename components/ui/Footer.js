import contactPageData from '@/content/texts/contact-page.json';
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';

function IconLink({ href, label, icon: Icon, ariaLabel }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel || label}
      className='text-text-light hover:text-neon-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 rounded p-2'
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <Icon className='text-3xl' />
      <span className='sr-only'>{label}</span>
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber =
    contactPageData.contactInfo?.phone?.number || '+48 123 456 789';
  const phoneHref = `tel:${phoneNumber.replace(/\s/g, '')}`;

  return (
    <footer
      className='fixed bottom-0 left-0 right-0 z-header border-t border-neon-blue/20 bg-header-footer shadow-glow'
      role='contentinfo'
    >
      <div className='container mx-auto px-4 py-0.5 flex flex-col items-center gap-0.5'>
        <div className='flex items-center gap-10'>
          <IconLink
            href='https://facebook.com'
            label='Facebook'
            icon={FaFacebook}
          />
          <IconLink
            href='https://instagram.com'
            label='Instagram'
            icon={FaInstagram}
          />
          <IconLink
            href={phoneHref}
            label='Zadzwoń'
            icon={FaPhone}
            ariaLabel='Zadzwoń do nas'
          />
        </div>

        <p className='text-[0.6rem] text-text-light opacity-70'>
          © {currentYear} Wojny Laserowe. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
