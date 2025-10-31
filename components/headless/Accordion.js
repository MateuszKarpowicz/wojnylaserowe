/**
 * Accordion - Headless komponent accordion (tylko zachowanie, bez stylowania)
 *
 * Zapewnia logikę ARIA, obsługę klawiatury i stan otwarte/zamknięte.
 * Stylowanie pozostaje poza tym komponentem - używaj z Card lub własnymi stylami.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Czy accordion jest otwarty
 * @param {function} props.onToggle - Callback wywoływany przy toggle
 * @param {string} props.id - Unikalny identyfikator accordion (używany dla aria-controls/aria-labelledby)
 * @param {boolean} [props.disabled] - Czy accordion jest wyłączony
 * @param {React.ReactNode} props.children - Funkcja renderująca ({ triggerProps, panelProps, isOpen }) => JSX
 * @returns {JSX.Element}
 *
 * @example
 * <Accordion
 *   id="item-1"
 *   isOpen={open}
 *   onToggle={() => setOpen(!open)}
 * >
 *   {({ triggerProps, panelProps, isOpen }) => (
 *     <>
 *       <button {...triggerProps}>Tytuł</button>
 *       {isOpen && <div {...panelProps}>Treść</div>}
 *     </>
 *   )}
 * </Accordion>
 */
'use client';

import { useMemo } from 'react';

export default function Accordion({
  id,
  isOpen,
  onToggle,
  disabled = false,
  children,
}) {
  const triggerId = `accordion-trigger-${id}`;
  const panelId = `accordion-panel-${id}`;

  // Obsługa klawiatury
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  // Reduced motion support
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Props dla trigger button
  const triggerProps = {
    id: triggerId,
    type: 'button',
    role: 'button',
    'aria-expanded': isOpen,
    'aria-controls': panelId,
    'aria-disabled': disabled,
    disabled: disabled,
    onClick: disabled ? undefined : onToggle,
    onKeyDown: handleKeyDown,
    tabIndex: disabled ? -1 : 0,
  };

  // Props dla panel
  const panelProps = {
    id: panelId,
    role: 'region',
    'aria-labelledby': triggerId,
    'aria-hidden': !isOpen,
    'data-state': isOpen ? 'open' : 'closed',
  };

  return children({ triggerProps, panelProps, isOpen, prefersReducedMotion });
}
