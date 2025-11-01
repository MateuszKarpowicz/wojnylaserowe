'use client';

import { Card } from '@/components/primitives';
import { cn } from '@/lib/utils';

/**
 * TestimonialCard - Karta z opinią klienta
 *
 * @param {Object} item - Opinia klienta z polami: quote, author, meta
 * @param {boolean} flash - Czy pokazać efekt flash (mocny rozbłysk)
 * @param {boolean} decay - Czy pokazać efekt decay (wygasanie)
 * @param {boolean} entered - Czy karta jest widoczna (animacja wejścia)
 */
export default function TestimonialCard({ item, flash, decay, entered }) {
  if (!item) {
    return (
      <Card variant='neutral' className='text-text-dark shadow-glow border-2 border-neon-border-blue-medium'>
        <p className='text-text-dark/80'>Brak opinii do wyświetlenia.</p>
      </Card>
    );
  }

  return (
    <Card
      variant='neutral'
      hoverable={false}
      size='md'
      className={cn(
        'relative',
        // Białe tło zamiast czarnego (neutral variant domyślnie ma bg-white)
        'text-text-dark',
        // Border i glow w stylu blue - efekty brandowe
        'border-2',
        // delikatnie większa wysokość, by sekcja była bardziej stabilna
        'min-h-[220px]',
        // wejście nowej opinii: fade + lekki slide-up
        entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        'transition-[opacity,transform,box-shadow,border-color] gpu',
        // hover (custom dla tego komponentu)
        'hover:-translate-y-1 hover:scale-[1.01]',
        // glow: w spoczynku prawie niewidoczny, przy zmianie mocny + puls skali
        flash && !decay
          ? 'duration-[var(--dur-decay)] ease-[var(--ease-brand)] scale-[1.06] shadow-glow-blue-very-strong border-neon-border-blue-very-strong'
          : flash && decay
          ? 'duration-[var(--dur-decay)] ease-[var(--ease-brand)] scale-[1.02] shadow-glow-blue-decay border-neon-border-blue-active'
          : 'duration-[var(--dur-fast)] ease-[var(--ease-brand)] shadow-glow-blue-weak border-neon-border-blue-medium',
      )}
    >
      <figure>
        <blockquote className='text-text-dark/90 leading-relaxed italic'>
          "{item.quote}"
        </blockquote>
        <figcaption className='mt-4'>
          <p className='font-semibold text-text-dark'>{item.author}</p>
          {item.meta && (
            <p className='text-sm text-text-dark/70'>{item.meta}</p>
          )}
        </figcaption>
      </figure>
    </Card>
  );
}
