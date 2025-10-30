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

  // Pobierz linki z environment variables (fallback do domyślnych wartości)
  const facebookUrl =
    process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com';
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com';
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+48 123 456 789';
  const phoneHref = `tel:${phoneNumber.replace(/\s/g, '')}`;

  return (
    <footer
      className='fixed bottom-0 left-0 right-0 z-header border-t border-neon-blue/20 bg-header-footer shadow-glow'
      role='contentinfo'
    >
      <div className='container mx-auto px-2 py-1 flex items-center justify-center'>
        <div className='flex items-center gap-8'>
          <IconLink href={facebookUrl} label='Facebook' icon={FaFacebook} />
          <IconLink href={instagramUrl} label='Instagram' icon={FaInstagram} />
          <IconLink
            href={phoneHref}
            label='Zadzwoń'
            icon={FaPhone}
            ariaLabel='Zadzwoń do nas'
          />
        </div>
      </div>
    </footer>
  );
}
