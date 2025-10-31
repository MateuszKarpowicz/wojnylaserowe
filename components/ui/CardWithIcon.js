/**
 * CardWithIcon - Uniwersalny komponent karty z ikonką
 *
 * DEPRECATED: Użyj `IconCard` z `@/components/composed` zamiast tego komponentu.
 * Ten komponent pozostaje dla backward compatibility.
 *
 * @param {string|React.Component} icon - Nazwa ikony z react-icons/fa (string) lub komponent ikony
 * @param {string} [title] - Opcjonalny tytuł karty
 * @param {string} [text] - Tekst/opis karty (używany gdy brak description)
 * @param {string} [description] - Alternatywny opis karty (ma priorytet nad text)
 * @param {'blue'|'purple'|'neutral'} variant - Wariant karty (domyślnie: 'blue')
 * @param {React.ReactNode} children - Custom content (opcjonalne, jeśli przekazane, ignoruje icon/title/text)
 */
import { IconCard } from '@/components/composed';

export default function CardWithIcon({
  icon,
  title,
  text,
  description,
  variant = 'blue',
  children,
}) {
  // Mapowanie starych wariantów na nowe
  const mappedVariant = variant === 'blue' || variant === 'purple' ? variant : 'neutral';

  return (
    <IconCard
      icon={icon}
      title={title}
      text={text}
      description={description}
      variant={mappedVariant}
    >
      {children}
    </IconCard>
  );
}
