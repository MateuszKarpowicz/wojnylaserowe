import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export default function SocialMediaIcons({
  size = 'text-3xl',
  className = '',
  showLabels = false,
}) {
  const icons = [
    {
      icon: FaFacebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/search/top?q=wojny%20laserowe',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/explore/search/keyword/?q=wojny%20laserowe',
    },
    {
      icon: FaPhone,
      label: 'Telefon',
      href: '#',
    },
  ];

  return (
    <div className={cn('flex items-center gap-6', className)}>
      {icons.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={cn(size, 'link-hover-neon')}
        >
          <Icon />
          {showLabels && <span className='sr-only'>{label}</span>}
        </a>
      ))}
    </div>
  );
}
