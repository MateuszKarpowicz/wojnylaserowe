import { clsx } from 'clsx';

/**
 * Utility function do łączenia klas CSS
 * Wrapper na clsx dla spójności w całym projekcie
 *
 * @param {...any} inputs - Klasy CSS do połączenia (stringi, obiekty, tablice)
 * @returns {string} Połączone klasy CSS
 *
 * @example
 * cn('base-class', { 'active-class': isActive }, 'another-class')
 * cn(['class1', 'class2'], conditional && 'class3')
 */
export function cn(...inputs) {
  return clsx(inputs);
}
