'use client';

/**
 * useTextTruncation - Hook do zarządzania ucinaniem tekstu na mobile
 *
 * Wydziela logikę biznesową związaną z ucinaniem tekstu
 * na urządzeniach mobilnych z komponentów prezentacyjnych.
 *
 * @param {string} fullText - Pełny tekst do wyświetlenia
 * @param {string} cutMarker - Marker po którym uciąć tekst na mobile (opcjonalny)
 * @returns {Object} Obiekt z tekstem do wyświetlenia i funkcją toggle
 *
 * @example
 * const { mobileText, restText, isExpanded, toggle } = useTextTruncation(
 *   hero.intro,
 *   'regeneracją skóry.'
 * );
 */
import { useState, useMemo } from 'react';

export function useTextTruncation(fullText, cutMarker = null) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { mobileText, restText } = useMemo(() => {
    if (!cutMarker || !fullText) {
      return {
        mobileText: fullText || '',
        restText: '',
      };
    }

    const cutIdx = fullText.indexOf(cutMarker);
    if (cutIdx === -1) {
      return {
        mobileText: fullText,
        restText: '',
      };
    }

    return {
      mobileText: fullText.slice(0, cutIdx + cutMarker.length),
      restText: fullText.slice(cutIdx + cutMarker.length).trimStart(),
    };
  }, [fullText, cutMarker]);

  const toggle = () => setIsExpanded(prev => !prev);

  return {
    mobileText,
    restText,
    isExpanded,
    toggle,
  };
}
