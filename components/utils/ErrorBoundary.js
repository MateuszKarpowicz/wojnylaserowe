'use client';

import { Component } from 'react';
import { logger } from '@/lib/logger';
import { Container, Button } from '@/components/primitives';

/**
 * Error Boundary dla obsługi błędów React w aplikacji
 * Zgodnie z React 19 - ErrorBoundary jako class component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Komponenty do opakowania
 * @param {React.Component|Function} props.fallback - Komponent fallback do wyświetlenia w przypadku błędu
 * @param {Function} props.onError - Callback wywoływany przy błędzie
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Aktualizuj state, aby następny render pokazał UI fallback
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log błędu (wyciszony w produkcji)
    logger.error('ErrorBoundary caught an error:', error, errorInfo);

    // Wywołaj callback jeśli podano
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Renderuj custom fallback UI lub domyślny
      if (this.props.fallback) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback(this.state.error)
          : this.props.fallback;
      }

      // Domyślny UI błędu
      return (
        <div className='section-pad bg-surface'>
          <Container>
            <div className='text-center py-12'>
              <h2 className='text-2xl font-display font-bold text-text-dark mb-4'>
                Coś poszło nie tak
              </h2>
              <p className='text-secondary mb-6'>
                Wystąpił nieoczekiwany błąd. Proszę odświeżyć stronę.
              </p>
              <Button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
                variant='blue'
              >
                Odśwież stronę
              </Button>
            </div>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}
