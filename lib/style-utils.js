/**
 * Style utilities - helpery do wyboru kolorów i warunkowych klas CSS
 *
 * Zapewnia spójne podejście do wyboru kolorów w całym projekcie.
 */

/**
 * Wybiera odpowiedni wariant koloru na podstawie kontekstu tła
 *
 * @param {'surface'|'dark'} bg - Kolor tła sekcji
 * @param {'text'|'border'|'shadow'} type - Typ elementu do kolorowania
 * @returns {string} Klasa CSS z odpowiednim kolorem
 *
 * @example
 * const textColor = getColorVariant('dark', 'text'); // 'text-text-light'
 * const borderColor = getColorVariant('surface', 'border'); // 'border-neon-blue'
 */
export function getColorVariant(bg, type = 'text') {
  const isDark = bg === 'dark';

  switch (type) {
    case 'text':
      return isDark ? 'text-text-light' : 'text-text-dark';

    case 'text-muted':
      return isDark ? 'text-text-light/80' : 'text-text-dark/80';

    case 'border':
      return isDark ? 'border-neon-purple' : 'border-neon-blue';

    case 'shadow':
      return isDark ? 'shadow-glow-purple' : 'shadow-glow';

    case 'icon':
      return isDark ? 'text-neon-purple' : 'text-neon-blue';

    default:
      return isDark ? 'text-text-light' : 'text-text-dark';
  }
}

/**
 * Wybiera odpowiedni wariant karty na podstawie tła sekcji
 *
 * @param {'surface'|'dark'} bg - Kolor tła sekcji
 * @returns {'blue'|'purple'} Wariant karty
 *
 * @example
 * const cardVariant = getCardVariant('dark'); // 'purple'
 */
export function getCardVariant(bg) {
  // Zasada: jasne tło → ciemna karta z niebieskim neonem (blue)
  // ciemne tło → biała karta z fioletowym neonem (purple)
  return bg === 'dark' ? 'purple' : 'blue';
}

/**
 * Wybiera odpowiedni wariant tekstu dla karty na podstawie wariantu karty
 *
 * @param {'blue'|'purple'} cardVariant - Wariant karty
 * @returns {Object} Obiekt z klasami CSS dla tekstu i opisu
 *
 * @example
 * const { textClass, descriptionClass } = getCardTextClasses('blue');
 */
export function getCardTextClasses(cardVariant) {
  return {
    textClass: cardVariant === 'blue' ? 'text-text-light' : 'text-text-dark',
    descriptionClass: cardVariant === 'blue' ? 'text-text-light/80' : 'text-secondary',
    iconClass: cardVariant === 'blue' ? 'text-neon-blue' : 'text-neon-purple',
  };
}
