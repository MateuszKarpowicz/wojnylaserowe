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
 * @param {number|string|undefined} py - Padding vertical (undefined = default section-pad, 0 = py-0, liczba = py-[wartość], string = custom class)
 * @param {number|string|undefined} px - Padding horizontal (undefined = default Container px, 0 = px-0, liczba = px-[wartość], string = custom class)
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
  py, // undefined = default, 0 = py-0, liczba = py-[wartość], string = custom class
  px, // undefined = default, 0 = px-0, liczba = px-[wartość], string = custom class
  className = '',
  children,
  headerClassName = '',
  containerProps = {},
}) {
  const bgClass = bg === 'dark' ? 'bg-bg-dark' : 'bg-surface';

  // Obsługa py: undefined = section-pad (default), 0 = py-0, liczba = py-[wartość], string = custom
  const pyClass =
    py === undefined
    ? 'section-pad'
    : py === 0 || py === '0'
    ? 'py-0'
    : typeof py === 'string'
    ? py
    : `py-${py}`;

  // Domyślna wysokość sekcji (jak hero: 70vh mobile, 80vh desktop)
  // Używamy min-h aby treść nie była obcinana
  const defaultHeightClass = 'min-h-section-default md:min-h-section-default-md';

  const classes = cn(pyClass, bgClass, defaultHeightClass, className);
  const headerVariant = bg === 'dark' ? 'light' : 'dark';

  // Obsługa px dla Container: undefined = default, 0 = px-0, liczba = px-[wartość], string = custom
  const finalContainerProps =
    px === undefined
      ? containerProps
      : {
          ...containerProps,
          className: cn(
            px === 0 || px === '0' ? 'px-0' : typeof px === 'string' ? px : `px-${px}`,
            containerProps.className
          ),
        };

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
