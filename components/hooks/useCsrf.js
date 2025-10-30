// Custom hook for CSRF token management
'use client';
import { useCallback, useEffect, useState } from 'react';
import { logger } from '@/lib/logger';

export function useCsrfToken() {
  const [csrfToken, setCsrfToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch CSRF token from API
  const fetchCsrfToken = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
      }

      const data = await response.json();

      if (data.success) {
        setCsrfToken(data.csrfToken);
      } else {
        throw new Error(data.message || 'Failed to get CSRF token');
      }
    } catch (err) {
      logger.error('CSRF token fetch error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Auto-fetch token on mount
  useEffect(() => {
    fetchCsrfToken();
  }, [fetchCsrfToken]);

  // Refresh token
  const refreshToken = useCallback(() => {
    return fetchCsrfToken();
  }, [fetchCsrfToken]);

  return {
    csrfToken,
    isLoading,
    error,
    refreshToken,
  };
}

// Hook for form submission with CSRF protection
export function useSecureFormSubmit() {
  const { csrfToken, refreshToken } = useCsrfToken();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const submitForm = useCallback(
    async (formData, endpoint = '/api/contact') => {
      if (!csrfToken) {
        setSubmitError('CSRF token not available');
        return { success: false, error: 'CSRF token not available' };
      }

      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Form submission failed');
        }

        if (!result.success) {
          throw new Error(result.message || 'Form submission failed');
        }

        // Refresh CSRF token after successful submission
        await refreshToken();

        return { success: true, data: result.data };
      } catch (err) {
        logger.error('Form submission error:', err);
        setSubmitError(err.message);
        return { success: false, error: err.message };
      } finally {
        setIsSubmitting(false);
      }
    },
    [csrfToken, refreshToken]
  );

  return {
    submitForm,
    isSubmitting,
    submitError,
    csrfToken,
  };
}
