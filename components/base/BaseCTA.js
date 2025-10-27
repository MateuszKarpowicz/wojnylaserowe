/**
 * BaseCTA - Komponent bazowy dla sekcji Call-to-Action
 * 
 * Eliminuje duplikację CTA sekcji poprzez:
 * - Spójne style dla wszystkich CTA
 * - Elastyczne opcje konfiguracji
 * - Accessibility (aria, focus, validation)
 * - Obsługę różnych wariantów
 * 
 * @param {string} text - Tekst CTA
 * @param {string} buttonText - Tekst przycisku
 * @param {string} buttonHref - Link przycisku
 * @param {string} variant - Wariant CTA (default, success, warning, error)
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Dodatkowa zawartość
 * @returns {JSX.Element} Sekcja CTA
 */

'use client';
import { classNames } from '@/lib/classNames';
import { utilityClasses } from '@/styles/utilityClasses';
import CTAButton from '@/components/ui/CTAButton';

export default function BaseCTA({
  text,
  buttonText,
  buttonHref,
  variant = 'default',
  className = '',
  children,
  ...props
}) {
  const variantClasses = {
    default: 'text-gray-700',
    success: 'text-green-700',
    warning: 'text-yellow-700',
    error: 'text-red-700',
  };
  
  const containerClasses = classNames(
    utilityClasses.layout.textCenter,
    utilityClasses.spacing.sectionMargin,
    className
  );
  
  const textClasses = classNames(
    variantClasses[variant],
    'mb-6'
  );

  return (
    <div className={containerClasses} {...props}>
      {text && (
        <p className={textClasses}>
          {text}
        </p>
      )}
      
      {children}
      
      {buttonText && buttonHref && (
        <CTAButton href={buttonHref}>
          {buttonText}
        </CTAButton>
      )}
    </div>
  );
}
