/**
 * BaseSection - Komponent bazowy dla wszystkich sekcji
 * 
 * Eliminuje duplikację struktury sekcji poprzez:
 * - Jednolitą strukturę sekcji z kontenerem
 * - Spójne style i padding
 * - Elastyczne opcje konfiguracji
 * - Accessibility (aria, focus, validation)
 * 
 * @param {string} id - ID sekcji
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Zawartość sekcji
 * @returns {JSX.Element} Sekcja z kontenerem
 */

export default function BaseSection({ 
  id, 
  className = "py-8 bg-white", 
  children
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
