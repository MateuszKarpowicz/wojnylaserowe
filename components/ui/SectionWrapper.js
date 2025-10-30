/**
 * Reużywalny wrapper sekcji z nagłówkiem
 * Eliminuje duplikację w komponentach *WithHeader
 *
 * @param {string} title - Tytuł sekcji (opcjonalny)
 * @param {'surface'|'bg-dark'} bgColor - Kolor tła: 'surface' dla jasnego, 'bg-dark' dla ciemnego
 * @param {React.ReactNode} children - Zawartość sekcji
 * @param {string} className - Dodatkowe klasy CSS (opcjonalne)
 * @param {string} id - ID sekcji dla anchorów (opcjonalne)
 */
export default function SectionWrapper({
  title,
  bgColor = 'surface',
  children,
  className = '',
  id,
}) {
  // Mapowanie bgColor na klasy CSS
  const bgClass = bgColor === 'bg-dark' ? 'bg-bg-dark' : 'bg-surface';

  // Automatyczny wybór klasy tytułu na podstawie koloru tła
  const titleClass =
    bgColor === 'bg-dark' ? 'section-title-light' : 'section-title-dark';

  return (
    <section className={`section-pad ${bgClass} ${className}`.trim()} id={id}>
      <div className='section-wrap'>
        {title && <h2 className={titleClass}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
