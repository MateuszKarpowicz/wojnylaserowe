import { cn } from '@/lib/utils';
import { getIcon } from '@/lib/icons';
import { Card } from '@/components/primitives';

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
  // Resolwuj ikonę używając shared helpera
  const IconComponent = getIcon(icon);

  // Priorytet: description > text
  const contentText = description || text;

  const borderVariant = borderColor === 'purple' ? 'purple' : 'blue';
  const iconColorClass =
    borderColor === 'purple' ? 'text-neon-purple' : 'text-neon-blue';

  // Kolor tekstu zależy od tła karty:
  // card-border-blue = ciemna karta → jasny tekst
  // card-border-purple = biała karta → ciemny tekst
  const textClass =
    borderColor === 'blue' ? 'text-text-light' : 'text-text-dark';
  const descriptionClass =
    borderColor === 'blue' ? 'text-text-light/80' : 'text-secondary';

  // Helper do budowania klas
  const iconClasses = cn('text-3xl', iconColorClass);

  // Jeśli przekazano children, renderuj je zamiast domyślnej struktury
  if (children) {
    return <Card variant={borderVariant}>{children}</Card>;
  }

  return (
    <Card variant={borderVariant}>
      <div className='flex gap-4'>
        {/* Ikona */}
        <div className='flex-shrink-0'>
          <IconComponent className={iconClasses} />
        </div>

        {/* Tekst */}
        <div className='flex-1'>
          {title ? (
            <>
              <h3 className={cn('text-lg font-semibold', textClass, 'mb-2')}>
                {title}
              </h3>
              {contentText && (
                <p className={cn('text-sm', descriptionClass, 'leading-relaxed')}>
                  {contentText}
                </p>
              )}
            </>
          ) : (
            // Jeśli nie ma tytułu, wyróżnij treść jako pogrubioną linię tytułową
            contentText && (
              <p className={cn('text-base font-semibold', textClass, 'leading-relaxed')}>
                {contentText}
              </p>
            )
          )}
        </div>
      </div>
    </Card>
  );
}
