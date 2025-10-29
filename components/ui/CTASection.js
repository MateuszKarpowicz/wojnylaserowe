import Link from 'next/link';

/**
 * Reużywalny komponent CTA
 * @param {string} title - Tytuł sekcji
 * @param {string} text - Opis tekst
 * @param {string} href - Link do przekierowania
 * @param {string} button - Tekst przycisku
 * @param {'blue'|'purple'} variant - Wariant koloru przycisku
 * @param {'surface'|'bg-dark'} bgColor - Kolor tła sekcji
 */
export default function CTASection({
  title,
  text,
  href,
  button,
  variant = 'blue',
  bgColor = 'surface',
}) {
  const bgClass = bgColor === 'bg-dark' ? 'bg-bg-dark' : 'bg-surface';
  const textColor =
    bgColor === 'bg-dark' ? 'text-text-light' : 'text-text-dark';
  const buttonClass = variant === 'purple' ? 'btn-cta-purple' : 'btn-cta-blue';

  return (
    <section className={`section-pad ${bgClass} text-center`}>
      <div className='section-wrap'>
        <h2
          className={`text-2xl md:text-3xl font-display font-bold mb-4 ${textColor}`}
        >
          {title}
        </h2>
        <p
          className={`text-secondary mb-8 max-w-2xl mx-auto ${
            bgColor === 'bg-dark' ? 'text-text-light/90' : ''
          }`}
        >
          {text}
        </p>
        <Link href={href} className={buttonClass}>
          {button}
        </Link>
      </div>
    </section>
  );
}
