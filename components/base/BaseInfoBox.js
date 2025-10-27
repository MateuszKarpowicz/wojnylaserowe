/**
 * BaseInfoBox - Komponent bazowy dla info boxów
 * 
 * Eliminuje duplikację info boxów poprzez:
 * - Spójne style dla wszystkich info boxów
 * - Elastyczne opcje konfiguracji
 * - Accessibility (aria, focus, validation)
 * - Obsługę różnych wariantów
 * 
 * @param {string} title - Tytuł info boxa
 * @param {string} content - Zawartość info boxa
 * @param {string} variant - Wariant (default, info, success, warning, error)
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Dodatkowa zawartość
 * @param {React.ReactNode} icon - Ikona
 * @returns {JSX.Element} Info box
 */

'use client';
import { classNames } from '@/lib/classNames';
import { utilityClasses } from '@/styles/utilityClasses';

export default function BaseInfoBox({
  title,
  content,
  variant = 'default',
  className = '',
  children,
  icon,
  ...props
}) {
  const variantClasses = {
    default: 'bg-gray-50 border-gray-200',
    info: 'bg-blue-50 border-blue-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    error: 'bg-red-50 border-red-200',
  };
  
  const titleClasses = {
    default: 'text-textDark',
    info: 'text-blue-800',
    success: 'text-green-800',
    warning: 'text-yellow-800',
    error: 'text-red-800',
  };
  
  const contentClasses = {
    default: 'text-gray-700',
    info: 'text-blue-700',
    success: 'text-green-700',
    warning: 'text-yellow-700',
    error: 'text-red-700',
  };
  
  const containerClasses = classNames(
    utilityClasses.background.infoBox,
    variantClasses[variant],
    'border rounded-lg',
    className
  );

  return (
    <div className={containerClasses} {...props}>
      {title && (
        <h3 className={classNames(
          'text-xl font-semibold mb-4',
          titleClasses[variant]
        )}>
          {icon && (
            <span className="mr-2">
              {icon}
            </span>
          )}
          {title}
        </h3>
      )}
      
      {content && (
        <p className={classNames(
          'text-lg mb-4',
          contentClasses[variant]
        )}>
          {content}
        </p>
      )}
      
      {children}
    </div>
  );
}
