/**
 * useColorVariant - Hook do automatycznego wyboru kolorów na podstawie kontekstu
 *
 * Automatycznie wybiera odpowiednie kolory dla tekstu, ramek i cieni
 * na podstawie koloru tła sekcji.
 *
 * @param {'surface'|'dark'} bg - Kolor tła sekcji (domyślnie: 'surface')
 * @returns {Object} Obiekt z klasami CSS dla różnych elementów
 *
 * @example
 * const { text, textMuted, border, shadow, icon } = useColorVariant('dark');
 * <p className={text}>Tekst</p>
 */
import { useMemo } from 'react';
import { getColorVariant, getCardVariant, getCardTextClasses } from '@/lib/style-utils';

export function useColorVariant(bg = 'surface') {
  return useMemo(() => {
    const cardVariant = getCardVariant(bg);
    const cardTextClasses = getCardTextClasses(cardVariant);

    return {
      // Podstawowe kolory tekstu
      text: getColorVariant(bg, 'text'),
      textMuted: getColorVariant(bg, 'text-muted'),

      // Kolory dla kart
      cardVariant,
      ...cardTextClasses,

      // Kolory ramek i cieni
      border: getColorVariant(bg, 'border'),
      shadow: getColorVariant(bg, 'shadow'),

      // Kolor ikon
      icon: getColorVariant(bg, 'icon'),
    };
  }, [bg]);
}
