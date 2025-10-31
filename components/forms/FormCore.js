/**
 * FormCore - Komponent bazowy dla wszystkich formularzy
 *
 * Eliminuje duplikację logiki formularza poprzez:
 * - Jednolitą obsługę stanów (loading, error, success)
 * - Spójne style pól formularza
 * - Elastyczne opcje konfiguracji
 * - Accessibility (aria, focus, validation)
 *
 * @param {Object} initialData - Początkowe dane formularza
 * @param {Function} onSubmit - Funkcja wysyłania formularza
 * @param {Function} onValidation - Funkcja walidacji (opcjonalna)
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Pola formularza
 * @returns {JSX.Element} Formularz z obsługą stanów
 */

'use client';
import { useState } from 'react';
import { logger } from '@/lib/logger';
import { Button } from '@/components/primitives';
import { StatusMessage } from '@/components/ui';

export default function FormCore({
  initialData = {},
  onSubmit,
  validationSchema,
  className = '',
  children,
  submitText = 'Wyślij',
  loadingText = 'Wysyłanie...',
  fullWidth = false,
  ...props
}) {
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const handleInputChange = e => {
    const { name, value, type, files } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files : value,
    }));

    // Clear errors when user starts typing
    if (error) setError(null);
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setFieldErrors({});

    try {
      // Walidacja Zod (jeśli podana)
      if (validationSchema) {
        const result = validationSchema.safeParse(formData);
        if (!result.success) {
          const errors = {};
          result.error.errors.forEach(err => {
            const field = err.path[0];
            errors[field] = err.message;
          });
          setFieldErrors(errors);
          return;
        }
      }

      // Wysłanie formularza
      if (onSubmit) {
        await onSubmit(formData);
      }
    } catch (err) {
      logger.error('Error submitting form:', err);
      setError('Wystąpił błąd podczas wysyłania formularza');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
      {...props}
    >
      {/* ERROR MESSAGE */}
      {error && (
        <StatusMessage type='error'>
          {error}
        </StatusMessage>
      )}

      {/* POLA FORMULARZA */}
      {children && typeof children === 'function'
        ? children({ formData, handleInputChange, isLoading, fieldErrors })
        : children}

      {/* PRZYCISK WYŚLIJ */}
      <Button type='submit' disabled={isLoading} variant='section' fullWidth={fullWidth}>
        {isLoading ? (
          <span className='inline-flex items-center gap-2'>
            <span className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
            {loadingText}
          </span>
        ) : (
          submitText
        )}
      </Button>
    </form>
  );
}
