import { FaCheckCircle } from 'react-icons/fa';

/**
 * Uniwersalny komponent karty z ikonką
 * @param {string|React.Component} icon - Nazwa ikony z react-icons/fa lub komponent ikony
 * @param {string} [title] - Opcjonalny tytuł karty
 * @param {string} text - Tekst/opis karty
 * @param {'blue'|'purple'} borderColor - Kolor ramki: 'blue' dla jasnego tła, 'purple' dla ciemnego tła
 */
export default function CardWithIcon({
  icon,
  title,
  text,
  borderColor = 'blue',
}) {
  // Domyślna ikona to checkmark
  let IconComponent = FaCheckCircle;

  // Jeśli icon jest stringiem, próbuj użyć jako ikony z react-icons
  if (typeof icon === 'string') {
    try {
      // Dynamiczny import ikony - wymaga listy dostępnych ikon
      // Na razie używamy domyślnej ikony
      IconComponent = FaCheckCircle;
    } catch {
      IconComponent = FaCheckCircle;
    }
  } else if (icon) {
    IconComponent = icon;
  }

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
          <p className={`text-sm ${descriptionClass} leading-relaxed`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
