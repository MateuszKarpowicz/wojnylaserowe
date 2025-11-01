/**
 * ExternalRating - Link do zewnętrznej oceny (np. Google Reviews)
 *
 * @param {Object} external - Obiekt z polami: rating, reviewsCount, url, source
 */
export default function ExternalRating({ external }) {
  if (!external || !external.rating || !external.reviewsCount || !external.url) {
    return null;
  }

  const { rating, reviewsCount, url, source = 'Google' } = external;

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='mb-6 block text-center text-text-dark/80 hover:text-neon-blue transition-colors focus-ring rounded px-2'
    >
      <span className='font-semibold'>
        {rating.toFixed ? rating.toFixed(1) : rating}
      </span>
      <span className='opacity-80 ml-2'>
        ({reviewsCount} opinii) na {source}
      </span>
    </a>
  );
}
