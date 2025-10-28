/**
 * BaseForm - Komponent bazowy dla wszystkich formularzy
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
import ErrorMessage from '@/components/ui/ErrorMessage';

export default function BaseForm({ 
  initialData = {},
  onSubmit,
  onValidation,
  className = "",
  children,
  submitText = "Wyślij",
  loadingText = "Wysyłanie...",
  ...props
}) {
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files : value
    }));
    
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Walidacja (jeśli podana)
      if (onValidation) {
        const validationError = onValidation(formData);
        if (validationError) {
          setError(validationError);
          return;
        }
      }

      // Wysłanie formularza
      if (onSubmit) {
        await onSubmit(formData);
      }
      
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Wystąpił błąd podczas wysyłania formularza');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} {...props}>
      {/* ERROR MESSAGE */}
      <ErrorMessage error={error} />

      {/* POLA FORMULARZA */}
      {children && typeof children === 'function' 
        ? children({ formData, handleInputChange, isLoading })
        : children
      }

      {/* PRZYCISK WYŚLIJ */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn-section"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            {loadingText}
          </>
        ) : (
          submitText
        )}
      </button>
    </form>
  );
}
