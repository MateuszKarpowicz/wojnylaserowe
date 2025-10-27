/**
 * useCarousel - Hook do zarządzania logiką karuzeli
 * 
 * Eliminuje duplikację logiki karuzeli poprzez:
 * - Jednolitą logikę nawigacji (next, prev, goTo)
 * - Auto-scroll z konfigurowalnym interwałem
 * - Obsługę stanów ładowania i błędów
 * 
 * @param {Array} items - Tablica elementów karuzeli
 * @param {number} autoScrollInterval - Interwał auto-scroll w ms (domyślnie: 5000)
 * @param {boolean} isLoading - Czy karuzela jest w stanie ładowania
 * @param {string|null} error - Błąd karuzeli
 * @returns {Object} Obiekt z currentIndex i funkcjami nawigacji
 */

'use client';
import { useState, useEffect, useCallback } from 'react';

export const useCarousel = (items, autoScrollInterval = 5000, isLoading = false, error = null) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Funkcja next z useCallback dla optymalizacji
  const next = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);
  
  // Funkcja prev z useCallback dla optymalizacji
  const prev = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);
  
  // Funkcja goTo z useCallback dla optymalizacji
  const goTo = useCallback((index) => {
    setCurrentIndex(index);
  }, []);
  
  // Auto-scroll effect
  useEffect(() => {
    if (isLoading || error || !autoScrollInterval) return;
    
    const interval = setInterval(next, autoScrollInterval);
    return () => clearInterval(interval);
  }, [isLoading, error, autoScrollInterval, next]);
  
  return {
    currentIndex,
    next,
    prev,
    goTo
  };
};
