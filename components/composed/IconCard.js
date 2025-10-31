/**
 * IconCard - Layout ikona + treść (bez zachowania)
 *
 * Karta z ikoną po lewej i treścią po prawej.
 * Domyślnie używa neutral variant - brandowe kolory dodaj explicite.
 *
 * @param {Object} props
 * @param {string|React.Component} props.icon - Ikona (string z react-icons lub komponent)
 * @param {React.ReactNode} [props.title] - Tytuł karty
 * @param {React.ReactNode} [props.children] - Treść karty (lub użyj text/description)
 * @param {string} [props.text] - Tekst/opis (używany gdy brak description)
 * @param {string} [props.description] - Alternatywny opis (ma priorytet nad text)
 * @param {string} [props.variant='neutral'] - Wariant Card
 * @param {'none'|'sm'|'md'|'lg'} [props.size='md'] - Rozmiar paddingu Card
 * @param {string} [props.className] - Dodatkowe klasy
 * @param {function} [props.getIcon] - Funkcja do resolwowania ikony (domyślnie używa getIcon z lib/icons)
 * @returns {JSX.Element}
 */
import { useMemo } from 'react';
import Card from '@/components/primitives/Card';
import { getIcon } from '@/lib/icons';
import { getCardTextClasses } from '@/lib/style-utils';
import { cn } from '@/lib/utils';

export default function IconCard({
  icon,
  title,
  text,
  description,
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
  getIcon: getIconFn = getIcon,
}) {
  // Memoize IconComponent - nie zmienia się chyba że icon się zmieni
  const IconComponent = useMemo(() => getIconFn(icon), [icon, getIconFn]);

  // Priorytet: description > text
  const contentText = description || text;

  // Dla wariantów brandowych używamy helpera, dla neutral użyjemy neutralnych kolorów
  const textClasses =
    variant === 'blue' || variant === 'purple'
      ? getCardTextClasses(variant)
      : {
          textClass: 'text-neutral-900',
          descriptionClass: 'text-neutral-700',
          iconClass: 'text-neutral-600',
        };

  const iconClasses = cn('text-3xl', textClasses.iconClass);

  // Jeśli przekazano children, renderuj je zamiast domyślnej struktury
  if (children) {
    return (
      <Card variant={variant} size={size} className={className}>
        {children}
      </Card>
    );
  }

  return (
    <Card variant={variant} size={size} className={className}>
      <div className="flex gap-4">
        {/* Ikona */}
        {IconComponent && (
          <div className="flex-shrink-0">
            <IconComponent className={iconClasses} aria-hidden="true" />
          </div>
        )}

        {/* Tekst */}
        <div className="flex-1">
          {title ? (
            <>
              <h3 className={cn('text-lg font-semibold', textClasses.textClass, 'mb-2')}>
                {title}
              </h3>
              {contentText && (
                <p className={cn('text-sm', textClasses.descriptionClass, 'leading-relaxed')}>
                  {contentText}
                </p>
              )}
            </>
          ) : (
            // Jeśli nie ma tytułu, wyróżnij treść jako pogrubioną linię tytułową
            contentText && (
              <p className={cn('text-base font-semibold', textClasses.textClass, 'leading-relaxed')}>
                {contentText}
              </p>
            )
          )}
        </div>
      </div>
    </Card>
  );
}
