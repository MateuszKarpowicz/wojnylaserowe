/**
 * ContentWithText - Komponent tekstu w sekcji
 *
 * Renderuje intro, subtitle i footer tekstowy.
 * Używany w wielu sekcjach dla spójności.
 *
 * @param {string} intro - Tekst wprowadzający
 * @param {string} subtitle - Podtytuł (pogrubiony)
 * @param {string} footer - Tekst końcowy
 * @param {'light'|'dark'} variant - Wariant kolorów (domyślnie: 'dark')
 * @param {string} className - Dodatkowe klasy CSS
 */
export default function ContentWithText({
  intro,
  subtitle,
  footer,
  variant = 'dark',
  className = ''
}) {
  const textClasses = {
    light: {
      intro: 'text-text-light/90',
      subtitle: 'text-text-light/90',
      footer: 'text-text-light/80',
    },
    dark: {
      intro: 'text-secondary',
      subtitle: 'text-secondary',
      footer: 'text-secondary',
    },
  };

  const classes = textClasses[variant] || textClasses.dark;

  return (
    <div className={className}>
      {intro && (
        <p className={`${classes.intro} leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center`}>
          {intro}
        </p>
      )}
      {subtitle && (
        <p className={`${classes.subtitle} font-semibold text-lg mb-8 text-center`}>
          {subtitle}
        </p>
      )}
      {footer && (
        <p className={`${classes.footer} leading-relaxed text-center max-w-3xl mx-auto`}>
          {footer}
        </p>
      )}
    </div>
  );
}
