'use client';

import { useEffect, useMemo, useState } from 'react';
import { Card, Section } from '@/components/primitives';

/**
 * TestimonialsCarousel - Karuzela opinii klientów
 *
 * Wyświetla opinie klientów w karuzeli z automatyczną zmianą i efektem glow.
 * Obsługuje animacje flash i decay dla efektów wizualnych.
 *
 * @param {string} title - Tytuł sekcji (domyślnie: 'Opinie klientów')
 * @param {Array} items - Tablica opinii klientów
 * @param {number} intervalMs - Interwał zmiany opinii w milisekundach (domyślnie: 6000)
 * @param {boolean} external - Czy opinie pochodzą z zewnętrznego źródła
 * @returns {JSX.Element} Sekcja z karuzelą opinii
 */
export default function TestimonialsCarousel({
  title = 'Opinie klientów',
  items = [],
  intervalMs = 6000,
  external,
}) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
  const total = safeItems.length;
  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const [decay, setDecay] = useState(false);
  const [entered, setEntered] = useState(false);

  // reduced motion – ogranicz auto-rotację
  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (prefersReduced || total <= 1) return;
    const id = setInterval(() => setIndex(i => (i + 1) % total), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, total, prefersReduced]);

  // Rozbłysk neonu przy każdej zmianie opinii
  useEffect(() => {
    if (total <= 0) return;
    setFlash(true);
    setEntered(false);
    setDecay(false);
    const r1 = requestAnimationFrame(() => {
      setEntered(true);
      // po krótkiej chwili przejdź z mocnego rozbłysku do wygaszania
      setTimeout(() => setDecay(true), 100);
    });
    const t = setTimeout(() => setFlash(false), 3000);
    return () => {
      cancelAnimationFrame(r1);
      clearTimeout(t);
    };
  }, [index, total]);

  const current = total > 0 ? safeItems[index] : null;

  return (
    <Section bg='surface' title={title}>
      {external?.rating && external?.reviewsCount && external?.url && (
          <div className='mb-6 text-center'>
            <a
              href={external.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-text-dark/80 hover:text-neon-blue transition-colors focus-ring rounded px-2'
            >
              <span className='font-semibold'>{external.rating.toFixed ? external.rating.toFixed(1) : external.rating}</span>
              <span className='opacity-80'>({external.reviewsCount} opinii) na {external.source || 'Google'}</span>
            </a>
          </div>
        )}
        {current ? (
          <Card
            variant='blue'
            className={[
              'relative',
              'bg-bg-surface text-text-dark',
              // delikatnie większa wysokość, by sekcja była bardziej stabilna
              'min-h-[220px]',
              // wejście nowej opinii: fade + lekki slide-up
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
              'transition-[opacity,transform,box-shadow] gpu',
              // hover
              'hover:-translate-y-1 hover:scale-[1.01]',
              // glow: w spoczynku prawie niewidoczny, przy zmianie mocny + puls skali
              flash && !decay
                ? 'duration-[var(--dur-decay)] ease-[var(--ease-brand)] scale-[1.06] shadow-glow-blue-very-strong border-2 border-neon-border-blue-very-strong'
                : flash && decay
                ? 'duration-[var(--dur-decay)] ease-[var(--ease-brand)] scale-[1.02] shadow-glow-blue-decay border-2 border-neon-border-blue-active'
                : 'duration-[var(--dur-fast)] ease-[var(--ease-brand)] shadow-glow-blue-weak border-2 border-neon-border-blue-medium',
            ].join(' ')}
          >
            <figure>
              <blockquote className='text-text-dark/90 leading-relaxed italic'>
                “{current.quote}”
              </blockquote>
              <figcaption className='mt-4'>
                <p className='font-semibold text-text-dark'>{current.author}</p>
                {current.meta && (
                  <p className='text-sm text-text-dark/70'>{current.meta}</p>
                )}
              </figcaption>
            </figure>

          </Card>
        ) : (
          <Card variant='blue' className='bg-bg-surface text-text-dark shadow-glow'>
            <p className='text-text-dark/80'>Brak opinii do wyświetlenia.</p>
          </Card>
        )}
    </Section>
  );
}
