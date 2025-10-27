/**
 * CTAButton - Uniwersalny komponent przycisku CTA
 * 
 * Eliminuje duplikację przycisków CTA poprzez:
 * - Jednolite style podstawowe
 * - Różne rozmiary (sm, md, lg)
 * - Elastyczne opcje konfiguracji
 * 
 * @param {string} href - Link do przekierowania (wymagane)
 * @param {string} children - Tekst przycisku (wymagane)
 * @param {string} size - Rozmiar przycisku: "sm", "md", "lg" (domyślnie: "md")
 * @param {string} className - Dodatkowe klasy CSS
 * @param {object} ...props - Dodatkowe props dla elementu <a>
 * @returns {JSX.Element} Przycisk CTA z odpowiednimi stylami
 */

export default function CTAButton({ 
  href,
  children,
  size = "md",
  className = "",
  ...props 
}) {
  // Podstawowe klasy dla wszystkich przycisków CTA
  const baseClasses = "inline-block bg-neonBlue text-white rounded-lg hover:bg-neonPurple transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105";
  
  // Rozmiary przycisków
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3",
    lg: "px-8 py-4 text-lg"
  };
  
  // Łączenie wszystkich klas
  const combinedClasses = `${baseClasses} ${sizes[size]} ${className}`.trim();
  
  return (
    <a 
      href={href}
      className={combinedClasses}
      {...props}
    >
      {children}
    </a>
  );
}
