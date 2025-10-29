import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';

function IconLink({ href, label, icon: Icon, ariaLabel }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel || label}
      className='text-text-light hover:text-neon-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 rounded p-2'
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <Icon className='text-2xl' />
      <span className='sr-only'>{label}</span>
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='border-t border-neon-blue/20 mt-10 bg-black/95 shadow-glow'
      role='contentinfo'
    >
      <div className='container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4'>
        <p className='text-sm text-text-light opacity-70'>
          © {currentYear} Wojny Laserowe. Wszelkie prawa zastrzeżone.
        </p>

        <div className='flex items-center gap-4'>
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
            href='tel:+48XXXXXXXXX'
            label='Zadzwoń'
            icon={FaPhone}
            ariaLabel='Zadzwoń do nas'
          />
        </div>
      </div>
    </footer>
  );
}
