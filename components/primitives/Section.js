/**
 * Section - Komponent sekcji strony z nagłówkiem i kontenerem
 *
 * Uniwersalny komponent sekcji z automatycznym paddingiem, kontenerem,
 * opcjonalnym nagłówkiem i wsparciem dla różnych wariantów tła.
 * Zastąpił SectionWrapper - użyj tego komponentu dla wszystkich sekcji.
 *
 * @param {string} id - ID sekcji dla anchorów (opcjonalne)
 * @param {'surface'|'dark'} bg - Kolor tła sekcji (domyślnie: 'surface')
 * @param {string} title - Tytuł sekcji (opcjonalny, wyświetla nagłówek gdy podany)
 * @param {string} subtitle - Podtytuł sekcji (opcjonalny, wyświetla się w nagłówku)
 * @param {'center'|'left'|'right'} align - Wyrównanie nagłówka (domyślnie: 'center')
 * @param {number|string} py - Padding vertical (domyślnie: 'default' - używa section-pad)
 * @param {number|string} px - Padding horizontal (domyślnie: 'default' - używa Container px)
 * @param {string} className - Dodatkowe klasy CSS dla sekcji
 * @param {React.ReactNode} children - Zawartość sekcji
 * @param {string} headerClassName - Dodatkowe klasy CSS dla nagłówka
 * @param {object} containerProps - Dodatkowe props dla Container
 * @returns {JSX.Element} Sekcja z kontenerem i opcjonalnym nagłówkiem
 */
import { cn } from '@/lib/utils';
import Container from './Container';
import SectionHeader from './SectionHeader';

export default function Section({
  id,
  bg = 'surface',
  title,
  subtitle,
  align = 'center',
  py = 'default',
  px = 'default',
  className = '',
  children,
  headerClassName = '',
  containerProps = {},
}) {
  const bgClass = bg === 'dark' ? 'bg-bg-dark' : 'bg-surface';

  // Obsługa py: 'default' = section-pad, 0 = py-0, liczba = py-[wartość]
  const pyClass = py === 'default'
    ? 'section-pad'
    : py === 0 || py === '0'
    ? 'py-0'
    : typeof py === 'string'
    ? py
    : `py-${py}`;

  const classes = cn(pyClass, bgClass, className);
  const headerVariant = bg === 'dark' ? 'light' : 'dark';

  // Obsługa px dla Container - przekaż przez containerProps jeśli px !== 'default'
  const finalContainerProps = px !== 'default'
    ? { ...containerProps, className: cn(px === 0 || px === '0' ? 'px-0' : typeof px === 'string' ? px : `px-${px}`, containerProps.className) }
    : containerProps;

  return (
    <section id={id} className={classes}>
      <Container {...finalContainerProps}>
        {title && (
          <SectionHeader
            title={title}
            subtitle={subtitle}
            variant={headerVariant}
            align={align}
            className={headerClassName}
          />
        )}
        {children}
      </Container>
    </section>
  );
}
