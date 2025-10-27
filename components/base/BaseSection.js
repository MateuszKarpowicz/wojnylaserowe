/**
 * BaseSection - Komponent bazowy dla wszystkich sekcji
 * 
 * Eliminuje duplikację struktury sekcji poprzez:
 * - Jednolitą strukturę layoutu
 * - Spójne klasy CSS
 * - Elastyczne opcje konfiguracji
 * 
 * @param {string} id - ID sekcji (wymagane)
 * @param {string} className - Dodatkowe klasy CSS (domyślnie: "py-8 bg-white")
 * @param {string} maxWidth - Maksymalna szerokość kontenera (domyślnie: "max-w-screen-lg")
 * @param {React.ReactNode} children - Zawartość sekcji
 * @returns {JSX.Element} Sekcja z kontenerem
 */

export default function BaseSection({ 
  id, 
  className = "py-8 bg-white", 
  maxWidth = "max-w-screen-lg",
  children 
}) {
  return (
    <section id={id} className={className}>
      <div className={`${maxWidth} mx-auto px-4`}>
        {children}
      </div>
    </section>
  );
}
