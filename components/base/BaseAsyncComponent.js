/**
 * BaseAsyncComponent - Komponent bazowy dla asynchronicznych sekcji
 * 
 * Eliminuje duplikację logiki async poprzez:
 * - Jednolitą obsługę stanów (loading, error, success)
 * - Spójne style dla różnych stanów
 * - Elastyczne opcje konfiguracji
 * - Accessibility (aria, focus, validation)
 * 
 * @param {boolean} isLoading - Czy komponent jest w stanie ładowania
 * @param {string} error - Komunikat błędu
 * @param {boolean} success - Czy operacja zakończyła się sukcesem
 * @param {string} loadingMessage - Komunikat ładowania
 * @param {string} errorTitle - Tytuł błędu
 * @param {string} successMessage - Komunikat sukcesu
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Zawartość komponentu
 * @param {React.ReactNode} loadingContent - Zawartość podczas ładowania
 * @param {React.ReactNode} errorContent - Zawartość błędu
 * @param {React.ReactNode} successContent - Zawartość sukcesu
 * @returns {JSX.Element} Komponent z obsługą stanów async
 */

'use client';
import { classNames } from '@/lib/classNames';
import { utilityClasses } from '@/styles/utilityClasses';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorContainer from '@/components/ui/ErrorContainer';

export default function BaseAsyncComponent({
  isLoading = false,
  error = null,
  success = false,
  loadingMessage = 'Ładowanie...',
  errorTitle = 'Wystąpił błąd',
  successMessage = 'Operacja zakończona sukcesem',
  className = '',
  children,
  loadingContent,
  errorContent,
  successContent,
  ...props
}) {
  // LOADING STATE
  if (isLoading) {
    return (
      <div className={classNames(utilityClasses.layout.flexCenter, className)} {...props}>
        {loadingContent || (
          <div className="text-center">
            <LoadingSpinner message={loadingMessage} />
          </div>
        )}
      </div>
    );
  }
  
  // ERROR STATE
  if (error) {
    return (
      <div className={classNames(utilityClasses.layout.flexCenter, className)} {...props}>
        {errorContent || (
          <div className="text-center">
            <ErrorContainer error={error} title={errorTitle} />
          </div>
        )}
      </div>
    );
  }
  
  // SUCCESS STATE
  if (success) {
    return (
      <div className={classNames(utilityClasses.layout.flexCenter, className)} {...props}>
        {successContent || (
          <div className="text-center">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              ✅ {successMessage}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // DEFAULT STATE - render children
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
