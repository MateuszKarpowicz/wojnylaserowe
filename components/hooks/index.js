/**
 * Eksport wszystkich custom hooks
 *
 * Hooks zawierają logikę biznesową i stan komponentów.
 * Pozwalają na ponowne wykorzystanie logiki między komponentami.
 */

// Hooks dla logiki biznesowej
export { useCsrfToken, useSecureFormSubmit } from './useCsrf';
export { useModal } from './useModal';
export { useColorVariant } from './useColorVariant';
export { useTextTruncation } from './useTextTruncation';
export { useProcessAnimations } from './useProcessAnimations';
export { useTestimonialsCarousel } from './useTestimonialsCarousel';
