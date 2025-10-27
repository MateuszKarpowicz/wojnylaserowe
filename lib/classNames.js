/**
 * Utility functions for class names and styling
 */

/**
 * Combines class names into a single string
 * @param {...(string|object)} classes - Class names or objects with boolean values
 * @returns {string} Combined class names
 */
export function classNames(...classes) {
  return classes
    .filter(Boolean)
    .map(cls => {
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ');
}

/**
 * Generates responsive class names
 * @param {string} base - Base class name
 * @param {object} responsive - Responsive variants
 * @returns {string} Responsive class names
 */
export function responsiveClass(base, responsive = {}) {
  const classes = [base];
  
  Object.entries(responsive).forEach(([breakpoint, variant]) => {
    if (variant) {
      classes.push(`${breakpoint}:${variant}`);
    }
  });
  
  return classes.join(' ');
}

/**
 * Generates conditional class names
 * @param {string} base - Base class name
 * @param {object} conditions - Conditional variants
 * @returns {string} Conditional class names
 */
export function conditionalClass(base, conditions = {}) {
  const classes = [base];
  
  Object.entries(conditions).forEach(([condition, variant]) => {
    if (condition && variant) {
      classes.push(variant);
    }
  });
  
  return classes.join(' ');
}
