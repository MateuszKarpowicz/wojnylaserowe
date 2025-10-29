/**
 * useModal - Hook do zarządzania stanem modali
 *
 * Eliminuje duplikację logiki modali poprzez:
 * - Jednolitą obsługę stanu otwarty/zamknięty
 *
 * Uwaga: ESC handler i body scroll lock są obsługiwane w Modal.js
 *
 * @param {boolean} initialOpen - Początkowy stan modala
 * @returns {Object} Obiekt z isOpen, open, close, toggle
 */

'use client';
import { useCallback, useState } from 'react';

export const useModal = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // ESC i body scroll lock są obsługiwane w Modal.js
  // useModal tylko zarządza stanem

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
