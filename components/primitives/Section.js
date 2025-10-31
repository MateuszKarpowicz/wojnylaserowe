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
  className = '',
  children,
  headerClassName = '',
  containerProps = {},
}) {
  const bgClass = bg === 'dark' ? 'bg-bg-dark' : 'bg-surface';
  const classes = cn('section-pad', bgClass, className);
  const headerVariant = bg === 'dark' ? 'light' : 'dark';

  return (
    <section id={id} className={classes}>
      <Container {...containerProps}>
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
