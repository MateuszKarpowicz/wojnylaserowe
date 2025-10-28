/**
 * BaseGridSection - Komponent bazowy dla sekcji z gridem
 * 
 * Eliminuje duplikację sekcji z gridem poprzez:
 * - Jednolitą strukturę BaseSection + SectionHeader + Grid
 * - Spójne style i spacing
 * - Elastyczne opcje konfiguracji
 * 
 * @param {string} id - ID sekcji
 * @param {string} title - Tytuł sekcji
 * @param {string} subtitle - Podtytuł sekcji
 * @param {Array} items - Tablica elementów gridu
 * @param {string} className - Dodatkowe klasy CSS dla BaseSection
 * @param {string} gridClassName - Dodatkowe klasy CSS dla gridu
 * @param {Function} renderItem - Funkcja renderująca element gridu
 * @param {React.ReactNode} children - Dodatkowa zawartość sekcji
 * @returns {JSX.Element} Sekcja z gridem
 */

import { BaseSection } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';

export default function BaseGridSection({
  id,
  title,
  subtitle,
  items = [],
  className = "section-pad bg-gray-50 container",
  gridClassName = "grid grid-cols-1 md:grid-cols-2 gap-6",
  renderItem,
  children
}) {
  return (
    <BaseSection id={id} className={className}>
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={title}
        subtitle={subtitle}
        className="text-center mb-12"
      />

      {/* GRID */}
      <div className={gridClassName}>
        {items.map((item, index) => (
          <div key={index}>
            {renderItem ? renderItem(item, index) : item}
          </div>
        ))}
      </div>

      {/* DODATKOWA TREŚĆ */}
      {children}
    </BaseSection>
  );
}
