/**
 * BaseCard - Komponent bazowy dla wszystkich kart
 * 
 * Eliminuje duplikację stylów kart poprzez:
 * - Jednolite style podstawowe
 * - Różne warianty dla różnych typów kart
 * - Elastyczne opcje konfiguracji
 * 
 * @param {string} variant - Wariant karty: "default", "feature", "testimonial"
 * @param {boolean} hover - Czy karta ma efekt hover (domyślnie: true)
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Zawartość karty
 * @returns {JSX.Element} Karta z odpowiednimi stylami
 */

export default function BaseCard({ 
  variant = "default",
  hover = true,
  className = "",
  children 
}) {
  // Podstawowe klasy dla wszystkich kart
  const baseClasses = "bg-white rounded-lg shadow-sm";
  
  // Klasy hover (jeśli włączone)
  const hoverClasses = hover ? "hover:shadow-md transition-shadow duration-300" : "";
  
  // Warianty stylów
  const variants = {
    default: "p-6",
    feature: "flex items-start gap-4 p-6",
    testimonial: "p-6 mx-2 shadow-lg"
  };
  
  // Łączenie wszystkich klas
  const combinedClasses = `${baseClasses} ${hoverClasses} ${variants[variant]} ${className}`.trim();
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}
