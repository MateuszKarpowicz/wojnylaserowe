/**
 * useModal - Hook do zarządzania stanem modali
 * 
 * Eliminuje duplikację logiki modali poprzez:
 * - Jednolitą obsługę stanu otwarty/zamknięty
 * - Automatyczne zarządzanie focus i scroll
 * - Accessibility features
 * 
 * @param {boolean} initialOpen - Początkowy stan modala
 * @returns {Object} Obiekt z isOpen, open, close, toggle
 */

'use client';
import { useState, useEffect, useCallback } from 'react';

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

  // Obsługa klawiatury (ESC)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        close();
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
  }, [isOpen, close]);

  return {
    isOpen,
    open,
    close,
    toggle
  };
};
