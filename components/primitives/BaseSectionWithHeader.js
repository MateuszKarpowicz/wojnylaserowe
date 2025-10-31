/**
 * BaseSectionWithHeader - Komponent bazowy dla sekcji z nagłówkiem
 *
 * Eliminuje duplikację kodu poprzez połączenie Section + SectionHeader w jeden komponent.
 * Automatycznie wybiera odpowiedni wariant nagłówka na podstawie tła sekcji.
 *
 * @param {string} id - ID sekcji dla anchorów (opcjonalne)
 * @param {'surface'|'dark'} bg - Kolor tła sekcji (domyślnie: 'surface')
 * @param {string} title - Tytuł sekcji (wymagany)
 * @param {string} subtitle - Podtytuł sekcji (opcjonalny)
 * @param {'center'|'left'|'right'} align - Wyrównanie nagłówka (domyślnie: 'center')
 * @param {string} className - Dodatkowe klasy CSS dla sekcji
 * @param {string} headerClassName - Dodatkowe klasy CSS dla nagłówka
 * @param {object} containerProps - Dodatkowe props dla Container wewnątrz Section
 * @param {React.ReactNode} children - Zawartość sekcji (renderowana po nagłówku)
 * @returns {JSX.Element} Sekcja z nagłówkiem i zawartością
 */
import Section from './Section';
import SectionHeader from './SectionHeader';

export default function BaseSectionWithHeader({
  id,
  bg = 'surface',
  title,
  subtitle,
  align = 'center',
  className = '',
  headerClassName = '',
  containerProps = {},
  children,
}) {
  // Automatycznie wybierz wariant nagłówka na podstawie tła
  const headerVariant = bg === 'dark' ? 'light' : 'dark';

  return (
    <Section id={id} bg={bg} className={className} containerProps={containerProps}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        variant={headerVariant}
        align={align}
        className={headerClassName}
      />
      {children}
    </Section>
  );
}
