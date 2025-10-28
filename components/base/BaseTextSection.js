/**
 * BaseTextSection - Komponent bazowy dla sekcji z tekstem
 * 
 * Eliminuje duplikację sekcji tekstowych poprzez:
 * - Jednolitą strukturę sekcji z tekstem
 * - Spójne style dla paragrafów
 * - Elastyczne opcje konfiguracji
 * - Accessibility (aria, focus, validation)
 * 
 * @param {string} id - ID sekcji
 * @param {string} title - Tytuł sekcji
 * @param {string} subtitle - Podtytuł sekcji
 * @param {Array} paragraphs - Tablica paragrafów
 * @param {string} className - Dodatkowe klasy CSS dla BaseSection
 * @param {string} bgColor - Kolor tła (bg-white, bg-gray-50)
 * @param {string} containerType - Typ kontenera (container-sm, container)
 * @returns {JSX.Element} Sekcja z tekstem
 */

import { BaseSection } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';

export default function BaseTextSection({
  id,
  title,
  subtitle,
  paragraphs = [],
  className = "",
  bgColor = "bg-white",
  containerType = "container-sm"
}) {
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
      <div className="text-center">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </BaseSection>
  );
}
