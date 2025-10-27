/**
 * Symuluje async operation z opcjonalnym opóźnieniem
 * @param {number} delay - opóźnienie w milisekundach (domyślnie 1000ms)
 * @param {any} mockData - dane do zwrócenia (opcjonalne)
 * @returns {Promise<any>}
 */
export const simulateAsyncOperation = (delay = 1000, mockData = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, delay);
  });
};

/**
 * Symuluje async operation z możliwością błędu
 * @param {number} delay - opóźnienie w milisekundach
 * @param {number} errorChance - szansa na błąd (0-1, domyślnie 0)
 * @param {any} mockData - dane do zwrócenia przy sukcesie
 * @param {string} errorMessage - komunikat błędu
 * @returns {Promise<any>}
 */
export const simulateAsyncOperationWithError = (
  delay = 1000, 
  errorChance = 0, 
  mockData = null, 
  errorMessage = "Wystąpił błąd podczas operacji"
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < errorChance) {
        reject(new Error(errorMessage));
      } else {
        resolve(mockData);
      }
    }, delay);
  });
};
