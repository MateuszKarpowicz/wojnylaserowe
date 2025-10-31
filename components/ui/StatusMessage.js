/**
 * StatusMessage - Komponent dla komunikatów statusowych (success/error)
 *
 * Używa design tokens zamiast hardcoded kolorów dla spójności w całym projekcie.
 *
 * @param {'success'|'error'} type - Typ komunikatu
 * @param {React.ReactNode} children - Zawartość komunikatu
 * @param {string} className - Dodatkowe klasy CSS (opcjonalne)
 * @returns {JSX.Element} Komunikat statusowy z odpowiednimi stylami
 */
export default function StatusMessage({ type = 'success', children, className = '' }) {
  const baseClass = type === 'success' ? 'message-success' : 'message-error';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} role={type === 'error' ? 'alert' : 'status'} aria-live={type === 'error' ? 'assertive' : 'polite'}>
      {children}
    </div>
  );
}
