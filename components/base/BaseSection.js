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
 * STRUKTURA 20/80:
 * - header: 20% wysokości sekcji
 * - content: 80% wysokości sekcji
 * 
 * @param {string} id - ID sekcji (wymagane)
 * @param {string} className - Dodatkowe klasy CSS (domyślnie: "py-8 bg-white")
 * @param {string} maxWidth - Maksymalna szerokość kontenera (domyślnie: "max-w-screen-lg")
 * @param {string} variant - Wariant sekcji: "mobile", "tablet", "desktop", "auto" (domyślnie: "auto")
 * @param {boolean} useSplit - Czy używać struktury 20/80 (domyślnie: false)
 * @param {React.ReactNode} children - Zawartość sekcji (lub header gdy useSplit=true)
 * @param {React.ReactNode} content - Treść sekcji (tylko gdy useSplit=true)
 * @returns {JSX.Element} Sekcja z kontenerem
 */

export default function BaseSection({ 
  id, 
  className = "py-8 bg-white", 
  maxWidth = "max-w-screen-lg",
  variant = "auto",
  useSplit = false,
  children,
  content 
}) {
  // Klasy bazowe dla kontraktu sekcji
  const baseClasses = "w-full";
  
  // Klasy dla mobile (domyślnie) - prawidłowy kontrakt
  const mobileClasses = "min-h-[calc(100dvh-var(--header-h)-var(--footer-h))] pt-[calc(var(--header-h)+2rem)] pb-[calc(var(--footer-h)+2rem)]";
  
  // Klasy dla tablet (2 kolumny) - równa wysokość
  const tabletClasses = "md:h-[calc(100dvh-var(--header-h)-var(--footer-h))] md:pt-[calc(var(--header-h)+1rem)] md:pb-[calc(var(--footer-h)+1rem)]";
  
  // Klasy dla desktop (3 kolumny) - równa wysokość
  const desktopClasses = "lg:h-[calc(100dvh-var(--header-h)-var(--footer-h))] lg:pt-[calc(var(--header-h)+1rem)] lg:pb-[calc(var(--footer-h)+1rem)]";
  
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

  // Jeśli useSplit = true, zwróć strukturę 20/80
  if (useSplit) {
    return (
      <section id={id} className={finalClassName}>
        <div className={`${maxWidth} mx-auto px-4 h-full flex flex-col`}>
          {/* HEADER - 20% wysokości */}
          <div className="h-[20vh] flex items-center justify-center">
            <div className="w-full">
              {children}
            </div>
          </div>
          
          {/* CONTENT - 80% wysokości */}
          <div className="h-[80vh] flex items-center justify-center">
            <div className="w-full">
              {content}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Standardowa struktura bez split
  return (
    <section id={id} className={finalClassName}>
      <div className={`${maxWidth} mx-auto px-4`}>
        {children}
      </div>
    </section>
  );
}
