/**
 * SectionHeader - Uniwersalny komponent nagłówka sekcji
 * 
 * Eliminuje duplikację nagłówków sekcji poprzez:
 * - Jednolitą strukturę nagłówka
 * - Elastyczne opcje konfiguracji
 * - Spójne style dla różnych typów nagłówków
 * 
 * @param {string} title - Główny tytuł sekcji (wymagane)
 * @param {string} subtitle - Podtytuł (opcjonalny)
 * @param {string} description - Opis sekcji (opcjonalny)
 * @param {string} className - Dodatkowe klasy CSS dla kontenera
 * @param {string} titleClassName - Dodatkowe klasy CSS dla tytułu
 * @param {string} subtitleClassName - Dodatkowe klasy CSS dla podtytułu
 * @param {string} descriptionClassName - Dodatkowe klasy CSS dla opisu
 * @returns {JSX.Element} Nagłówek sekcji
 */

export default function SectionHeader({ 
  title,
  subtitle,
  description,
  className = "text-center mb-8",
  titleClassName = "text-3xl md:text-4xl font-bold text-textDark mb-4",
  subtitleClassName = "text-xl text-neonBlue font-semibold",
  descriptionClassName = "text-lg text-gray-700 max-w-2xl mx-auto"
}) {
  return (
    <div className={className}>
      <h2 className={titleClassName}>
        {title}
      </h2>
      {subtitle && (
        <p className={subtitleClassName}>
          {subtitle}
        </p>
      )}
      {description && (
        <p className={descriptionClassName}>
          {description}
        </p>
      )}
    </div>
  );
}
