import {
  FaCalendarCheck,
  FaCertificate,
  FaCheckCircle,
  FaFlask,
  FaGraduationCap,
  FaHandshake,
} from 'react-icons/fa';

// Mapowanie nazw ikon z stringów na komponenty (zgodnie ze wzorcem QualificationCard)
const iconMap = {
  FaCertificate: FaCertificate,
  FaGraduationCap: FaGraduationCap,
  FaFlask: FaFlask,
  FaCalendarCheck: FaCalendarCheck,
  FaHandshake: FaHandshake,
};

/**
 * Uniwersalny komponent karty z ikonką
 * @param {string|React.Component} icon - Nazwa ikony z react-icons/fa (string) lub komponent ikony
 * @param {string} [title] - Opcjonalny tytuł karty
 * @param {string} [text] - Tekst/opis karty (używany gdy brak description)
 * @param {string} [description] - Alternatywny opis karty (ma priorytet nad text)
 * @param {'blue'|'purple'} borderColor - Kolor ramki: 'blue' dla ciemnego tła, 'purple' dla jasnego tła
 * @param {React.ReactNode} children - Custom content (opcjonalne, jeśli przekazane, ignoruje icon/title/text)
 */
export default function CardWithIcon({
  icon,
  title,
  text,
  description,
  borderColor = 'blue',
  children,
}) {
  // Resolwuj ikonę: jeśli string, użyj iconMap; jeśli komponent, użyj go; w przeciwnym razie domyślny
  let IconComponent = FaCheckCircle;
  if (icon) {
    if (typeof icon === 'string' && iconMap[icon]) {
      IconComponent = iconMap[icon];
    } else if (typeof icon !== 'string') {
      IconComponent = icon;
    }
  }

  // Priorytet: description > text
  const contentText = description || text;

  const borderClass =
    borderColor === 'purple' ? 'card-border-purple' : 'card-border-blue';
  const iconColorClass =
    borderColor === 'purple' ? 'text-neon-purple' : 'text-neon-blue';

  // Kolor tekstu zależy od tła karty:
  // card-border-blue = ciemna karta → jasny tekst
  // card-border-purple = biała karta → ciemny tekst
  const textClass =
    borderColor === 'blue' ? 'text-text-light' : 'text-text-dark';
  const descriptionClass =
    borderColor === 'blue' ? 'text-text-light/80' : 'text-secondary';

  // Jeśli przekazano children, renderuj je zamiast domyślnej struktury
  if (children) {
    return <div className={borderClass}>{children}</div>;
  }

  return (
    <div className={borderClass}>
      <div className='flex gap-4'>
        {/* Ikona */}
        <div className='flex-shrink-0'>
          <IconComponent className={`qualification-icon ${iconColorClass}`} />
        </div>

        {/* Tekst */}
        <div className='flex-1'>
          {title && (
            <h3 className={`text-lg font-semibold ${textClass} mb-2`}>
              {title}
            </h3>
          )}
          {contentText && (
            <p className={`text-sm ${descriptionClass} leading-relaxed`}>
              {contentText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
