/**
 * BaseSection - Komponent bazowy dla wszystkich sekcji
 * 
 * Eliminuje duplikację struktury sekcji poprzez:
 * - Jednolitą strukturę sekcji z kontenerem
 * - Opcjonalny nagłówek (title, subtitle)
 * - Spójne style i padding
 * - Elastyczne opcje konfiguracji
 * - Accessibility (aria, focus, validation)
 * 
 * @param {string} id - ID sekcji
 * @param {string} title - Tytuł sekcji (opcjonalny)
 * @param {string} subtitle - Podtytuł sekcji (opcjonalny)
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Zawartość sekcji
 * @returns {JSX.Element} Sekcja z kontenerem i opcjonalnym nagłówkiem
 */

import SectionHeader from '@/components/ui/SectionHeader';

export default function BaseSection({ 
  id, 
  title,
  subtitle,
  className = "py-8 bg-white", 
  children
}) {
  return (
    <section id={id} className={className}>
      {/* NAGŁÓWEK - tylko jeśli podano title */}
      {title && (
        <SectionHeader 
          title={title}
          subtitle={subtitle}
          className="text-center mb-12"
        />
      )}
      
      {/* TREŚĆ */}
      {children}
    </section>
  );
}
