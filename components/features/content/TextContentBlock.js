import PointsGrid from './PointsGrid';
import { Button } from '@/components/primitives';

/**
 * TextContentBlock - Blok tekstu z opcjonalnymi punktami i CTA
 *
 * Renderuje blok tekstu z opcjonalnymi:
 * - intro, subtitle, footer
 * - content (tablica tekstów - alternatywa dla intro/subtitle/footer)
 * - points (grid z CardWithIcon)
 * - cta (button)
 *
 * @param {string} intro - Tekst wprowadzający
 * @param {string} subtitle - Podtytuł (pogrubiony)
 * @param {Array<string>} content - Tablica tekstów do wyświetlenia (alternatywa dla intro/subtitle/footer)
 * @param {Array} points - Tablica punktów do wyświetlenia jako grid
 * @param {string} footer - Tekst końcowy
 * @param {Object} cta - Obiekt CTA z polami: href, text
 * @param {'blue'|'purple'} pointsVariant - Wariant punktów (domyślnie: 'blue')
 * @param {'light'|'dark'} textVariant - Wariant kolorów tekstu (domyślnie: 'dark')
 * @param {string} className - Dodatkowe klasy CSS
 */
export default function TextContentBlock({
  intro,
  subtitle,
  content,
  points,
  footer,
  cta,
  pointsVariant = 'blue',
  textVariant = 'dark',
  className = ''
}) {
  const textClasses = {
    light: {
      intro: 'text-text-light/90',
      subtitle: 'text-text-light/90',
      content: 'text-text-light/90',
      footer: 'text-secondary',
    },
    dark: {
      intro: 'text-secondary',
      subtitle: 'text-secondary',
      content: 'text-secondary',
      footer: 'text-secondary',
    },
  };

  const classes = textClasses[textVariant] || textClasses.dark;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Opcja 1: content (tablica tekstów) */}
      {content && Array.isArray(content) && content.length > 0 && (
        <div className={`space-y-4 ${classes.content} leading-relaxed`}>
          {content.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )}

      {/* Opcja 2: intro + subtitle + footer */}
      {!content && intro && (
        <p className={`${classes.intro} leading-relaxed text-lg`}>
          {intro}
        </p>
      )}
      {!content && subtitle && (
        <p className={`${classes.subtitle} font-semibold text-lg`}>
          {subtitle}
        </p>
      )}

      {points && points.length > 0 && (
        <PointsGrid
          points={points}
          variant={pointsVariant}
          columns={1}
        />
      )}

      {!content && footer && (
        <p className={`${classes.footer} leading-relaxed`}>
          {footer}
        </p>
      )}

      {cta && (
        <Button as='a' href={cta.href} variant='cta-purple' className='mt-6'>
          {cta.text}
        </Button>
      )}
    </div>
  );
}
