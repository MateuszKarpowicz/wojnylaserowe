/**
 * FormField - Komponent dla pól formularza
 *
 * Eliminuje duplikację stylów pól formularza poprzez:
 * - Jednolite style dla wszystkich typów pól
 * - Spójną obsługę błędów
 * - Accessibility (aria, focus, validation)
 * - Elastyczne opcje konfiguracji
 *
 * @param {string} type - Typ pola (text, email, tel, textarea, select, file)
 * @param {string} name - Nazwa pola
 * @param {string} label - Etykieta pola
 * @param {string} value - Wartość pola
 * @param {Function} onChange - Funkcja zmiany wartości
 * @param {boolean} required - Czy pole jest wymagane
 * @param {string} placeholder - Placeholder
 * @param {string} error - Komunikat błędu
 * @param {boolean} disabled - Czy pole jest wyłączone
 * @param {Array} options - Opcje dla select
 * @param {boolean} dark - Czy użyć ciemnego wariantu (dla ciemnego tła)
 * @param {string} className - Dodatkowe klasy CSS
 * @param {object} ...props - Dodatkowe props
 * @returns {JSX.Element} Pole formularza z obsługą błędów
 */

'use client';

export default function FormField({
  type = 'text',
  name,
  label,
  value,
  onChange,
  required = false,
  placeholder = '',
  error = null,
  disabled = false,
  options = [],
  dark = false,
  className = '',
  ...props
}) {
  const fieldId = `${name}-field`;
  const errorId = `${name}-error`;

  const ariaProps = {
    id: fieldId,
    'aria-label': label,
    'aria-required': required,
    'aria-invalid': !!error,
    'aria-describedby': error ? errorId : undefined,
    'aria-errormessage': error ? errorId : undefined,
  };

  const inputBaseClass = dark ? 'input-dark' : 'input';
  const fieldClasses = [inputBaseClass, error && 'input-error', className]
    .filter(Boolean)
    .join(' ');

  const labelClasses = [
    `block ${
      dark ? 'text-text-light' : 'text-text-dark'
    } text-sm font-semibold mb-2`,
    required && 'after:content-["*"] after:text-neon-purple after:opacity-70 after:ml-1',
  ]
    .filter(Boolean)
    .join(' ');

  const renderField = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={fieldId}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            className={`${fieldClasses} placeholder:text-text-muted min-h-36`}
            rows='6'
            {...ariaProps}
            {...props}
          />
        );

      case 'select':
        return (
          <select
            id={fieldId}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={`${fieldClasses} appearance-none cursor-pointer pr-10 bg-[length:1.25rem_1.25rem] bg-no-repeat bg-[right_0.75rem_center]`}
            {...ariaProps}
            {...props}
          >
            <option value=''>{placeholder}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'file':
        return (
          <input
            type='file'
            id={fieldId}
            name={name}
            onChange={onChange}
            required={required}
            disabled={disabled}
            accept='image/*'
            multiple
            className={`${fieldClasses} file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-neon-purple file:text-white file:cursor-pointer`}
            {...ariaProps}
            {...props}
          />
        );

      default:
        return (
          <input
            type={type}
            id={fieldId}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            className={`${fieldClasses} placeholder:text-text-muted`}
            {...ariaProps}
            {...props}
          />
        );
    }
  };

  return (
    <div className='space-y-2'>
      {/* LABEL */}
      <label htmlFor={fieldId} className={labelClasses}>
        {label}
      </label>

      {/* FIELD */}
      {renderField()}

      {/* ERROR MESSAGE */}
      {error && (
        <div id={errorId} className='text-error text-sm mt-1' role='alert' aria-live='polite'>
          {error}
        </div>
      )}
    </div>
  );
}
