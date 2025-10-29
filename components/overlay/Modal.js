/**
 * Modal - Komponent modala z overlay i obsługą klawiatury
 *
 * Eliminuje duplikację logiki modala poprzez:
 * - Jednolitą strukturę overlay i kontenera
 * - Spójne style i animacje
 * - Elastyczne opcje konfiguracji
 * - Accessibility (aria, focus, keyboard)
 *
 * @param {boolean} isOpen - Czy modal jest otwarty
 * @param {Function} onClose - Funkcja zamykania modala
 * @param {string} className - Dodatkowe klasy CSS dla kontenera
 * @param {string} overlayClassName - Dodatkowe klasy CSS dla overlay
 * @param {React.ReactNode} children - Zawartość modala
 * @returns {JSX.Element} Modal z overlay i kontenerem
 */

'use client';
import { useEffect } from 'react';

export default function Modal({
  isOpen,
  onClose,
  className = '',
  overlayClassName = '',
  children,
}) {
  // Obsługa klawiatury (ESC)
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Blokuj scroll body gdy modal jest otwarty
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 ${overlayClassName}`}
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
    >
      <div
        className={`relative max-w-4xl max-h-full ${className}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
