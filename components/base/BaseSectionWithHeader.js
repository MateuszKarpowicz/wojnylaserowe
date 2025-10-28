/**
 * BaseSectionWithHeader - Komponent bazowy dla sekcji z nagłówkiem
 * 
 * Eliminuje duplikację sekcji z nagłówkiem poprzez:
 * - Jednolitą strukturę BaseSection + SectionHeader
 * - Spójne style i padding
 * - Elastyczne opcje konfiguracji
 * 
 * @param {string} id - ID sekcji
 * @param {string} title - Tytuł sekcji
 * @param {string} subtitle - Podtytuł sekcji
 * @param {string} description - Opis sekcji
 * @param {string} className - Dodatkowe klasy CSS dla BaseSection
 * @param {string} headerClassName - Dodatkowe klasy CSS dla SectionHeader
 * @param {string} subtitleClassName - Dodatkowe klasy CSS dla podtytułu
 * @param {string} descriptionClassName - Dodatkowe klasy CSS dla opisu
 * @param {React.ReactNode} children - Zawartość sekcji
 * @returns {JSX.Element} Sekcja z nagłówkiem
 */

import { BaseSection } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';

export default function BaseSectionWithHeader({
  id,
  title,
  subtitle,
  description,
  className = "section-pad bg-white container-sm",
  headerClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
  children
}) {
  return (
    <BaseSection id={id} className={className}>
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={title}
        subtitle={subtitle}
        description={description}
        className={headerClassName}
        subtitleClassName={subtitleClassName}
        descriptionClassName={descriptionClassName}
      />

      {/* TREŚĆ */}
      {children}
    </BaseSection>
  );
}
