/**
 * BaseInfoSection - Komponent bazowy dla sekcji z BaseInfoBox
 * 
 * Eliminuje duplikację sekcji z BaseInfoBox poprzez:
 * - Jednolitą strukturę BaseSection + SectionHeader + BaseInfoBox
 * - Spójne style i spacing
 * - Elastyczne opcje konfiguracji
 * 
 * @param {string} id - ID sekcji
 * @param {string} title - Tytuł sekcji
 * @param {string} subtitle - Podtytuł sekcji
 * @param {string} className - Dodatkowe klasy CSS dla BaseSection
 * @param {string} infoBoxClassName - Dodatkowe klasy CSS dla BaseInfoBox
 * @param {string} variant - Wariant BaseInfoBox
 * @param {React.ReactNode} children - Zawartość BaseInfoBox
 * @returns {JSX.Element} Sekcja z BaseInfoBox
 */

import { BaseSection } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';

export default function BaseInfoSection({
  id,
  title,
  subtitle,
  className = "section-pad bg-gray-50 container",
  infoBoxClassName = "mb-4",
  variant = "default",
  children
}) {
  return (
    <BaseSection id={id} className={className}>
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={title}
        subtitle={subtitle}
      />

      {/* TREŚĆ */}
      <div className={`bg-white rounded-lg shadow-sm p-6 ${infoBoxClassName}`}>
        {children}
      </div>
    </BaseSection>
  );
}
