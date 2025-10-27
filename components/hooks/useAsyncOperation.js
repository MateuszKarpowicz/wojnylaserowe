/**
 * useAsyncOperation - Hook do zarządzania operacjami asynchronicznymi
 * 
 * Eliminuje duplikację logiki async poprzez:
 * - Jednolitą obsługę stanów ładowania i błędów
 * - Konfigurowalne czasy ładowania i komunikaty błędów
 * - Automatyczne zarządzanie stanami isLoading i error
 * 
 * @param {Function} operation - Funkcja async do wykonania
 * @param {number} delay - Czas ładowania w ms (domyślnie: 1000)
 * @param {string} errorMessage - Komunikat błędu (domyślnie: "Wystąpił błąd")
 * @returns {Object} Obiekt z isLoading, error i funkcją execute
 */

'use client';
import { useState, useCallback } from 'react';
import { simulateAsyncOperation } from '@/utils/asyncSimulator';

export const useAsyncOperation = (operation, delay = 1000, errorMessage = 'Wystąpił błąd') => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Funkcja execute z useCallback dla optymalizacji
  const execute = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Użyj simulateAsyncOperation jeśli operation nie jest podana
      if (operation) {
        await operation();
      } else {
        await simulateAsyncOperation(delay);
      }
      setIsLoading(false);
    } catch (err) {
      console.error('Async operation error:', err);
      setError(errorMessage);
      setIsLoading(false);
    }
  }, [operation, delay, errorMessage]);
  
  return {
    isLoading,
    error,
    execute,
    setError
  };
};
