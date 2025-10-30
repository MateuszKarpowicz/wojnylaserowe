'use client';

import { useEffect } from 'react';
import { logger } from '@/lib/logger';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service (wyciszone w produkcji)
    logger.error('Global error:', error);
  }, [error]);

  return (
    <div className="error-container">
      <div className="error-content">
        <h2>Ups! Coś poszło nie tak</h2>
        <p>
          Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę lub skontaktuj się z nami,
          jeśli problem będzie się powtarzał.
        </p>
        <div className="error-actions">
          <button
            onClick={() => reset()}
            className="retry-button"
          >
            Spróbuj ponownie
          </button>
          <a href="/" className="home-link">
            Wróć na stronę główną
          </a>
        </div>
      </div>
    </div>
  );
}
