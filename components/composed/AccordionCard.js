/**
 * AccordionCard - Kompozycja Accordion + Card
 *
 * Rozsuwana karta z pełną obsługą ARIA i klawiatury.
 * Domyślnie używa neutral variant - brandowe kolory dodaj explicite.
 *
 * @param {Object} props
 * @param {string} props.id - Unikalny identyfikator
 * @param {boolean} props.isOpen - Czy jest otwarty
 * @param {function} props.onToggle - Callback toggle
 * @param {React.ReactNode} props.trigger - Zawartość przycisku (header)
 * @param {React.ReactNode} props.children - Zawartość panelu
 * @param {string} [props.cardVariant='neutral'] - Wariant Card
 * @param {'none'|'sm'|'md'|'lg'} [props.cardSize='md'] - Rozmiar paddingu Card
 * @param {boolean} [props.disabled] - Czy wyłączony
 * @param {string} [props.className] - Dodatkowe klasy
 * @returns {JSX.Element}
 */
'use client';

import { Accordion } from '@/components/headless';
import Card from '@/components/primitives/Card';
import { cn } from '@/lib/utils';

export default function AccordionCard({
  id,
  isOpen,
  onToggle,
  trigger,
  children,
  cardVariant = 'neutral',
  cardSize = 'md',
  disabled = false,
  className = '',
}) {
  return (
    <Accordion id={id} isOpen={isOpen} onToggle={onToggle} disabled={disabled}>
      {({ triggerProps, panelProps, isOpen: open }) => (
        <Card
          variant={cardVariant}
          size={cardSize}
          className={cn(
            'cursor-pointer focus-ring transition-all duration-300',
            className
          )}
          as="div"
          role="button"
          tabIndex={triggerProps.tabIndex}
          aria-expanded={triggerProps['aria-expanded']}
          aria-controls={triggerProps['aria-controls']}
          aria-disabled={triggerProps['aria-disabled']}
          onClick={triggerProps.onClick}
          onKeyDown={triggerProps.onKeyDown}
        >
          {/* Header z triggerem */}
          <div className="flex items-center justify-between w-full">
            {trigger}
          </div>

          {/* Panel rozwijany */}
          <div
            {...panelProps}
            className={cn(
              'overflow-hidden transition-[grid-template-rows,opacity] duration-300 grid mt-3',
              open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            )}
          >
            <div className="min-h-0">{children}</div>
          </div>
        </Card>
      )}
    </Accordion>
  );
}
