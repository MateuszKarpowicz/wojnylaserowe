/**
 * Accessibility utilities
 */

/**
 * Generates ARIA attributes for form fields
 * @param {string} id - Field ID
 * @param {string} label - Field label
 * @param {boolean} required - Is field required
 * @param {string} error - Error message
 * @returns {object} ARIA attributes
 */
export function getFormFieldAria(id, label, required = false, error = null) {
  return {
    id,
    'aria-label': label,
    'aria-required': required,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${id}-error` : undefined,
  };
}

/**
 * Generates ARIA attributes for buttons
 * @param {string} label - Button label
 * @param {boolean} disabled - Is button disabled
 * @param {string} variant - Button variant
 * @returns {object} ARIA attributes
 */
export function getButtonAria(label, disabled = false, variant = 'primary') {
  return {
    'aria-label': label,
    'aria-disabled': disabled,
    'aria-pressed': variant === 'toggle' ? false : undefined,
  };
}

/**
 * Generates ARIA attributes for modals
 * @param {string} id - Modal ID
 * @param {string} title - Modal title
 * @param {boolean} isOpen - Is modal open
 * @returns {object} ARIA attributes
 */
export function getModalAria(id, title, isOpen = false) {
  return {
    id,
    'aria-labelledby': `${id}-title`,
    'aria-hidden': !isOpen,
    'aria-modal': isOpen,
    role: 'dialog',
  };
}

/**
 * Generates ARIA attributes for carousels
 * @param {string} id - Carousel ID
 * @param {number} currentIndex - Current item index
 * @param {number} totalItems - Total number of items
 * @returns {object} ARIA attributes
 */
export function getCarouselAria(id, currentIndex, totalItems) {
  return {
    'aria-label': 'Carousel',
    'aria-live': 'polite',
    'aria-atomic': true,
    'data-current': currentIndex,
    'data-total': totalItems,
  };
}
