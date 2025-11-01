"use client";

import { useEffect, useState } from 'react';

/**
 * useProcessAnimations - Hook z logiką animacji dla ProcessSection
 *
 * Obsługuje animacje dla landing variant ProcessSection:
 * - entered: czy sekcja weszła (fade in)
 * - activeIndex: indeks aktualnie aktywnej karty
 *
 * @param {boolean} isLanding - Czy to wariant landing
 * @param {number} stepsCount - Liczba kroków do wyświetlenia
 * @returns {{entered: boolean, activeIndex: number | null}}
 */
export function useProcessAnimations(isLanding, stepsCount) {
  const [entered, setEntered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Animacja wejścia sekcji
  useEffect(() => {
    if (isLanding) {
      const r = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(r);
    }
  }, [isLanding]);

  // Animacja aktywnych kart (karuzela)
  useEffect(() => {
    if (!isLanding || stepsCount <= 0) return;

    let timeoutIds = [];
    let currentIndex = 0;

    const scheduleCard = () => {
      // Zaświeć aktualną kartę
      setActiveIndex(currentIndex);

      // Po 1 sekundzie zgaś kartę
      const turnOffTimeout = setTimeout(() => {
        setActiveIndex(null);

        // Określ kiedy zaświecić następną kartę:
        // Po kartach 1 i 2: natychmiast zaświeć następną (opóźnienie 0ms)
        // Po karcie 3: 2 sekundy przerwy przed kartą 1
        const delayBeforeNext = currentIndex === stepsCount - 1 ? 2000 : 0;

        const turnOnTimeout = setTimeout(() => {
          // Przejdź do następnej karty (lub wróć do 0 po ostatniej)
          currentIndex = (currentIndex + 1) % stepsCount;
          scheduleCard();
        }, delayBeforeNext);

        timeoutIds.push(turnOnTimeout);
      }, 1000);

      timeoutIds.push(turnOffTimeout);
    };

    // Start animacji od karty 1 (index 0)
    scheduleCard();

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [isLanding, stepsCount]);

  return { entered, activeIndex };
}
