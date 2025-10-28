/**
 * BaseSection - Komponent bazowy dla wszystkich sekcji
 * 
 * Implementuje KONTRAKT SEKCJI:
 * - MOBILE (≤ sm): 1 sekcja = przestrzeń między headerem i footerem
 *   - min-h: calc(100dvh - var(--header-h) - var(--footer-h))
 *   - padding-top > var(--header-h), padding-bottom > var(--footer-h)
 * - TABLET (≥ md): 2 sekcje obok siebie w poziomie (siatka)
 * - DESKTOP (≥ lg/xl): 3 sekcje obok siebie w poziomie (siatka)
 * - Wszystkie sekcje mają tę samą wysokość docelową (stały slot)
 * 
 * @param {string} id - ID sekcji (wymagane)
 * @param {string} className - Dodatkowe klasy CSS (domyślnie: "py-8 bg-white")
 * @param {string} maxWidth - Maksymalna szerokość kontenera (domyślnie: "max-w-screen-lg")
 * @param {string} variant - Wariant sekcji: "mobile", "tablet", "desktop", "auto" (domyślnie: "auto")
 * @param {React.ReactNode} children - Zawartość sekcji
 * @returns {JSX.Element} Sekcja z kontenerem
 */

export default function BaseSection({ 
  id, 
  className = "py-8 bg-white", 
  maxWidth = "max-w-screen-lg",
  variant = "auto",
  children 
}) {
  // Klasy bazowe dla kontraktu sekcji
  const baseClasses = "w-full";
  
  // Klasy dla mobile (domyślnie) - uproszczone bez calc()
  const mobileClasses = "min-h-screen pt-24 pb-16";
  
  // Klasy dla tablet (2 kolumny)
  const tabletClasses = "md:h-screen md:pt-20 md:pb-12";
  
  // Klasy dla desktop (3 kolumny)
  const desktopClasses = "lg:h-screen lg:pt-20 lg:pb-12";
  
  // Wybór wariantu
  let sectionClasses = baseClasses;
  
  if (variant === "mobile") {
    sectionClasses += ` ${mobileClasses}`;
  } else if (variant === "tablet") {
    sectionClasses += ` ${tabletClasses}`;
  } else if (variant === "desktop") {
    sectionClasses += ` ${desktopClasses}`;
  } else {
    // Auto - wszystkie breakpointy
    sectionClasses += ` ${mobileClasses} ${tabletClasses} ${desktopClasses}`;
  }
  
  // Połącz klasy
  const finalClassName = `${sectionClasses} ${className}`;

  return (
    <section id={id} className={finalClassName}>
      <div className={`${maxWidth} mx-auto px-4`}>
        {children}
      </div>
    </section>
  );
}
