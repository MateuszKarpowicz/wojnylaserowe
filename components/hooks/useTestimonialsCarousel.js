'use client';

import { useEffect, useMemo, useState } from 'react';

/**
 * useTestimonialsCarousel - Hook do zarządzania logiką karuzeli opinii
 *
 * Wydziela całą logikę stanu i animacji z TestimonialsCarousel.
 *
 * @param {Array} items - Tablica opinii klientów
 * @param {number} intervalMs - Interwał zmiany opinii w milisekundach (domyślnie: 6000)
 * @returns {Object} { current, index, flash, decay, entered, setIndex }
 */
export function useTestimonialsCarousel(items = [], intervalMs = 6000) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
  const total = safeItems.length;
  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const [decay, setDecay] = useState(false);
  const [entered, setEntered] = useState(false);

  // reduced motion – ogranicz auto-rotację
  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Automatyczna rotacja karuzeli
  useEffect(() => {
    if (prefersReduced || total <= 1) return;
    const id = setInterval(() => setIndex(i => (i + 1) % total), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, total, prefersReduced]);

  // Rozbłysk neonu przy każdej zmianie opinii - zoptymalizowany cleanup
  useEffect(() => {
    if (total <= 0) return;

    let rafId = null;
    let timeoutId = null;
    let decayTimeoutId = null;

    setFlash(true);
    setEntered(false);
    setDecay(false);

    rafId = requestAnimationFrame(() => {
      setEntered(true);
      // po krótkiej chwili przejdź z mocnego rozbłysku do wygaszania
      decayTimeoutId = setTimeout(() => setDecay(true), 100);
    });

    timeoutId = setTimeout(() => setFlash(false), 3000);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
      if (decayTimeoutId) clearTimeout(decayTimeoutId);
    };
  }, [index, total]);

  const current = total > 0 ? safeItems[index] : null;

  return {
    current,
    index,
    flash,
    decay,
    entered,
    total,
    setIndex,
  };
}
