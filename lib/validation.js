/**
 * Form validation utilities
 */

/**
 * Validates email address
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number (Polish format)
 * @param {string} phone - Phone to validate
 * @returns {boolean} Is valid phone
 */
export function validatePhone(phone) {
  const phoneRegex = /^(\+48\s?)?(\d{3}\s?\d{3}\s?\d{3}|\d{9})$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Validates required field
 * @param {string} value - Value to validate
 * @returns {boolean} Is not empty
 */
export function validateRequired(value) {
  return value && value.trim().length > 0;
}

/**
 * Validates form data
 * @param {object} formData - Form data to validate
 * @param {object} rules - Validation rules
 * @returns {object} Validation result
 */
export function validateForm(formData, rules) {
  const errors = {};
  
  Object.entries(rules).forEach(([field, rule]) => {
    const value = formData[field];
    
    if (rule.required && !validateRequired(value)) {
      errors[field] = rule.requiredMessage || `${field} jest wymagane`;
    }
    
    if (rule.email && value && !validateEmail(value)) {
      errors[field] = rule.emailMessage || 'Nieprawidłowy format email';
    }
    
    if (rule.phone && value && !validatePhone(value)) {
      errors[field] = rule.phoneMessage || 'Nieprawidłowy format telefonu';
    }
    
    if (rule.minLength && value && value.length < rule.minLength) {
      errors[field] = rule.minLengthMessage || `Minimum ${rule.minLength} znaków`;
    }
    
    if (rule.maxLength && value && value.length > rule.maxLength) {
      errors[field] = rule.maxLengthMessage || `Maksimum ${rule.maxLength} znaków`;
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
