/**
 * BaseListSection - Komponent bazowy dla sekcji z listami
 * 
 * Eliminuje duplikację sekcji z listami poprzez:
 * - Jednolitą strukturę sekcji z listami
 * - Spójne style dla list
 * - Elastyczne opcje konfiguracji
 * - Accessibility (aria, focus, validation)
 * 
 * @param {string} id - ID sekcji
 * @param {string} title - Tytuł sekcji
 * @param {string} subtitle - Podtytuł sekcji
 * @param {Array} items - Tablica elementów listy
 * @param {string} className - Dodatkowe klasy CSS dla BaseSection
 * @param {string} bgColor - Kolor tła (bg-white, bg-gray-50)
 * @param {string} containerType - Typ kontenera (container-sm, container)
 * @param {boolean} useInfoBox - Czy używać BaseInfoBox (domyślnie: true)
 * @returns {JSX.Element} Sekcja z listą
 */

import { BaseSection, BaseInfoBox } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';

export default function BaseListSection({
  id,
  title,
  subtitle,
  items = [],
  className = "",
  bgColor = "bg-white",
  containerType = "container",
  useInfoBox = true
}) {
  const listContent = (
    <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
      {items.map((item, index) => (
        <li key={index}><strong>{item}</strong></li>
      ))}
    </ul>
  );

  return (
    <BaseSection 
      id={id} 
      className={`section-pad ${bgColor} ${containerType} ${className}`}
    >
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={title}
        subtitle={subtitle}
      />

      {/* TREŚĆ */}
      {useInfoBox ? (
        <BaseInfoBox
          title=""
          content=""
          variant="default"
          className="mb-8"
        >
          {listContent}
        </BaseInfoBox>
      ) : (
        <div className="max-w-4xl mx-auto">
          {listContent}
        </div>
      )}
    </BaseSection>
  );
}
