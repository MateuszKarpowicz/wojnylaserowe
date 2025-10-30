import { useState } from 'react';

/**
 * Hook do zarządzania stanem formularza w OfferSlider
 * Ekstrakcja logiki z komponentu dla lepszej separacji concerns
 *
 * @returns {Object} - { selectedOption, error, selectOption, goBack, reset }
 */
export function useOfferForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);

  const selectOption = optionId => {
    setSelectedOption(optionId);
    setError(null);
  };

  const goBack = () => {
    setSelectedOption(null);
    setError(null);
  };

  const reset = () => {
    setSelectedOption(null);
    setError(null);
  };

  const setFormError = errorMessage => {
    setError(errorMessage);
  };

  return {
    selectedOption,
    error,
    selectOption,
    goBack,
    reset,
    setError: setFormError,
  };
}
