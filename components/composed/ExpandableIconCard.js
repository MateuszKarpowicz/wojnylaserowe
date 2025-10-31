/**
 * ExpandableIconCard - Kompozycja Accordion + IconCard
 *
 * Rozsuwana karta z ikoną po lewej i treścią po prawej.
 * Idealna dla QualificationsSection i podobnych sekcji.
 * Domyślnie używa neutral variant - brandowe kolory dodaj explicite.
 *
 * @param {Object} props
 * @param {string} props.id - Unikalny identyfikator
 * @param {boolean} props.isOpen - Czy jest otwarty
 * @param {function} props.onToggle - Callback toggle
 * @param {string|React.Component} props.icon - Ikona (string z react-icons lub komponent)
 * @param {React.ReactNode} props.title - Tytuł karty
 * @param {React.ReactNode} props.children - Zawartość panelu rozwijanego
 * @param {string} [props.cardVariant='neutral'] - Wariant Card
 * @param {'none'|'sm'|'md'|'lg'} [props.cardSizeClosed='sm'] - Rozmiar paddingu gdy zamknięte
 * @param {'none'|'sm'|'md'|'lg'} [props.cardSizeOpen='md'] - Rozmiar paddingu gdy otwarte
 * @param {boolean} [props.disabled] - Czy wyłączony
 * @param {string} [props.className] - Dodatkowe klasy
 * @param {React.ReactNode} [props.chevron] - Custom chevron (domyślnie: ▾)
 * @param {function} [props.getIcon] - Funkcja do resolwowania ikony
 * @returns {JSX.Element}
 */
'use client';

import { useMemo } from 'react';
import { Accordion } from '@/components/headless';
import Card from '@/components/primitives/Card';
import { getIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

export default function ExpandableIconCard({
  id,
  isOpen,
  onToggle,
  icon,
  title,
  children,
  cardVariant = 'neutral',
  cardSizeClosed = 'sm',
  cardSizeOpen = 'md',
  disabled = false,
  className = '',
  chevron = '▾',
  getIcon: getIconFn = getIcon,
}) {
  // Memoize IconComponent - nie zmienia się chyba że icon się zmieni
  const IconComponent = useMemo(() => getIconFn(icon), [icon, getIconFn]);

  // Klasy dla ikony (zmieniają się w zależności od stanu i wariantu)
  const iconClasses = useMemo(
    () =>
      cn(
        'text-4xl md:text-5xl transition-all duration-300',
        isOpen
          ? cardVariant === 'purple'
            ? 'text-neon-purple drop-shadow-glow-purple-strong'
            : cardVariant === 'blue'
            ? 'text-neon-blue drop-shadow-glow-blue-medium'
            : 'text-neutral-700'
          : cardVariant === 'purple'
          ? 'text-neon-purple/60 drop-shadow-glow-purple-weak'
          : cardVariant === 'blue'
          ? 'text-neon-blue/70 drop-shadow-glow-blue-weak'
          : 'text-neutral-500'
      ),
    [isOpen, cardVariant]
  );

  // Klasy dla chevron
  const chevronClasses = useMemo(
    () =>
      cn(
        'inline-block transition-transform duration-300 text-2xl md:text-3xl',
        cardVariant === 'purple'
          ? 'text-neon-purple'
          : cardVariant === 'blue'
          ? 'text-neon-blue'
          : 'text-neutral-600',
        isOpen ? 'rotate-180' : 'rotate-0'
      ),
    [isOpen, cardVariant]
  );

  // Border i shadow w zależności od stanu i wariantu - memoized
  const cardClasses = useMemo(() => {
    const base = cn(
      'cursor-pointer focus-ring transition-[box-shadow,transform,border-color,padding] duration-300',
      className
    );

    if (isOpen) {
      if (cardVariant === 'purple') {
        return cn(
          base,
          'border-neon-border-purple-very-strong shadow-glow-purple-expanded scale-[1.01]'
        );
      } else if (cardVariant === 'blue') {
        return cn(
          base,
          'border-neon-border-blue-strong shadow-glow-blue-expanded scale-[1.01]'
        );
      }
      return cn(base, 'border-neutral-900/25 shadow-lg');
    }

    // Zamknięte - dla wszystkich wariantów to samo (można uprościć)
    return cn(base, 'shadow-md hover:shadow-lg');
  }, [isOpen, cardVariant, className]);

  return (
    <Accordion id={id} isOpen={isOpen} onToggle={onToggle} disabled={disabled}>
      {({ triggerProps, panelProps, isOpen: open }) => (
        <div className="grid grid-cols-[3.25rem_1fr] md:grid-cols-[3.75rem_1fr] items-stretch gap-3 md:gap-4">
          {/* IKONA POZA KARTĄ */}
          {IconComponent && (
            <div className="flex items-center justify-center">
              <IconComponent className={iconClasses} aria-hidden="true" />
            </div>
          )}

          {/* KARTA */}
          <Card
            variant={cardVariant}
            size={open ? cardSizeOpen : cardSizeClosed}
            className={cardClasses}
            as="div"
            role="button"
            tabIndex={triggerProps.tabIndex}
            aria-expanded={triggerProps['aria-expanded']}
            aria-controls={triggerProps['aria-controls']}
            aria-disabled={triggerProps['aria-disabled']}
            onClick={triggerProps.onClick}
            onKeyDown={triggerProps.onKeyDown}
          >
            {/* Header: tytuł + chevron */}
            <div className="flex items-center justify-between">
              <h3
                className={cn(
                  'text-xl md:text-2xl mb-0',
                  cardVariant === 'blue'
                    ? 'text-text-light'
                    : cardVariant === 'purple'
                    ? 'text-text-dark'
                    : 'text-neutral-900'
                )}
              >
                {title}
              </h3>
              <span className={chevronClasses} aria-hidden="true">
                {chevron}
              </span>
            </div>

            {/* Panel rozwijany */}
            <div
              {...panelProps}
              className={cn(
                'overflow-hidden transition-[grid-template-rows,opacity] duration-300 grid mt-3',
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="min-h-0 rounded-md bg-surface p-4">
                <p
                  className={cn(
                    'leading-relaxed text-base md:text-lg',
                    cardVariant === 'blue'
                      ? 'text-text-light/80'
                      : cardVariant === 'purple'
                      ? 'text-text-dark/80'
                      : 'text-neutral-700'
                  )}
                >
                  {children}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </Accordion>
  );
}
