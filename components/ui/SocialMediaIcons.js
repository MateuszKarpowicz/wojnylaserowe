import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';

export default function SocialMediaIcons({ 
  size = "text-3xl", 
  className = "",
  showLabels = false 
}) {
  const icons = [
    { 
      icon: FaFacebook, 
      label: "Facebook", 
      href: "#" 
    },
    { 
      icon: FaInstagram, 
      label: "Instagram", 
      href: "#" 
    },
    { 
      icon: FaPhone, 
      label: "Telefon", 
      href: "#" 
    }
  ];

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {icons.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={`${size} link-hover-neon`}
        >
          <Icon />
          {showLabels && <span className="sr-only">{label}</span>}
        </a>
      ))}
    </div>
  );
}