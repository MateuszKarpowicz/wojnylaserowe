/**
 * Modal - Komponent modala z obsługą wariantów
 *
 * Warianty:
 * - 'centered' (default) - wyśrodkowany modal z overlay
 * - 'fullscreen' - pełnoekranowy między header a footer
 * - 'drawer' - sidebar z prawej/lewej strony
 *
 * @param {boolean} isOpen - Czy modal jest otwarty
 * @param {Function} onClose - Funkcja zamykania modala
 * @param {string} variant - Typ modala: 'centered' | 'fullscreen' | 'drawer'
 * @param {string} position - Pozycja dla drawer: 'left' | 'right' | 'top' | 'bottom'
 * @param {string} width - Szerokość dla drawer (np. 'w-64', 'w-80')
 * @param {boolean} closeOnOverlayClick - Czy zamykać przy kliknięciu overlay
 * @param {string} className - Dodatkowe klasy CSS dla kontenera
 * @param {string} overlayClassName - Dodatkowe klasy CSS dla overlay
 * @param {string} ariaLabelledBy - ID elementu który opisuje modal
 * @param {React.ReactNode} children - Zawartość modala
 */

'use client';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
  isOpen,
  onClose,
  variant = 'centered',
  position = 'right',
  width = 'w-64',
  closeOnOverlayClick = true,
  className = '',
  overlayClassName = '',
  ariaLabelledBy,
  children,
}) {
  const modalRef = useRef(null);
  // Usunięto animację drawer - powodowała problemy z przesuwaniem strony
  // Drawer renderuje się natychmiast (jak w oryginalnym kodzie)

  // ESC handler i body scroll lock (centralnie dla wszystkich wariantów)
  // Uwaga: drawer NIE blokuje scroll body (oryginalny kod też nie blokował)
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Blokuj scroll body tylko dla centered i fullscreen, NIE dla drawer
      // Drawer nie blokuje scroll (jak w oryginalnym kodzie)
      if (variant !== 'drawer') {
        document.body.style.overflow = 'hidden';
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (variant !== 'drawer') {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, onClose, variant]);

  // Focus trap dla drawer i fullscreen (centered może mieć własny)
  useEffect(() => {
    if (!isOpen || !modalRef.current || variant === 'centered') return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, select, textarea'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function trapFocus(e) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    modal.addEventListener('keydown', trapFocus);
    firstElement?.focus();

    return () => modal.removeEventListener('keydown', trapFocus);
  }, [isOpen, variant]);

  if (!isOpen) return null;

  // Style dla overlay - różne dla każdego wariantu
  const getOverlayClasses = () => {
    const base = 'fixed z-overlay';

    if (variant === 'centered') {
      return `${base} inset-0 bg-black/90 flex items-center justify-center p-4 ${overlayClassName}`;
    }

    if (variant === 'fullscreen') {
      return `${base} left-0 right-0 bg-black/50 ${overlayClassName}`;
    }

    if (variant === 'drawer') {
      // Usunięto transition - prostsza implementacja jak w oryginalnym kodzie
      return `${base} inset-0 bg-black/50 ${overlayClassName}`;
    }

    return base;
  };

  // Style dla kontenera - różne dla każdego wariantu
  const getContainerClasses = () => {
    if (variant === 'centered') {
      return `relative max-w-4xl max-h-full z-modal ${className}`;
    }

    if (variant === 'fullscreen') {
      return `relative z-modal ${className}`;
    }

    if (variant === 'drawer') {
      const borderClass = position === 'right' ? 'border-l' : 'border-r';
      // Drawer - transparentne tło, dzieci mogą mieć własne tło (jak w fullscreen)
      // Usunięto bg-black/95 - dzieci mają własne tło (np. bg-surface)
      return `fixed ${position}-0 top-0 bottom-0 ${width} ${borderClass} border-neon-blue/20 shadow-xl z-modal ${className}`;
    }

    return className;
  };

  // Style inline dla fullscreen (top/bottom offset)
  const fullscreenStyle =
    variant === 'fullscreen'
      ? {
          top: '4.5rem', // h-header
          bottom: '0', // footer jest fixed bottom
        }
      : {};

  const overlayClasses = getOverlayClasses();
  const containerClasses = getContainerClasses();

  // Dla drawer - overlay i panel są rodzeństwami (jak oryginalny kod)
  // Używamy Portal żeby renderować drawer poza Header (naprawia problem z sticky header)
  if (variant === 'drawer') {
    const drawerContent = (
      <>
        {/* Overlay - oddzielny element */}
        <div
          className={overlayClasses}
          onClick={closeOnOverlayClick ? onClose : undefined}
          aria-hidden='true'
        />
        {/* Panel - oddzielny element */}
        <div
          ref={modalRef}
          className={containerClasses}
          role='dialog'
          aria-modal='true'
          aria-labelledby={ariaLabelledBy || 'modal-title'}
        >
          {children}
        </div>
      </>
    );

    // Render drawer przez Portal bezpośrednio w body (poza Header)
    if (typeof window !== 'undefined') {
      return createPortal(drawerContent, document.body);
    }
    return drawerContent;
  }

  // Dla centered i fullscreen - overlay jako wrapper (oryginalna struktura Modal.js)
  return (
    <div
      className={overlayClasses}
      onClick={closeOnOverlayClick ? onClose : undefined}
      role='dialog'
      aria-modal='true'
      aria-labelledby={ariaLabelledBy || 'modal-title'}
      style={fullscreenStyle}
    >
      {/* Kontener */}
      <div
        ref={modalRef}
        className={containerClasses}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
