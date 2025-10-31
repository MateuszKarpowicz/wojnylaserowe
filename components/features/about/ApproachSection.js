"use client";

import { Section, Card } from '@/components/primitives';
import { cn } from '@/lib/utils';
import { getIcon } from '@/lib/icons';
import { useState } from 'react';
import { FaUserMd } from 'react-icons/fa';

function ApproachItem({ point, idx }) {
  const [open, setOpen] = useState(false);
  const Icon = getIcon(point.icon, FaUserMd);
  const panelId = `approach-desc-${idx}`;

  return (
    <Card
      variant='blue'
      role='button'
      tabIndex={0}
      aria-expanded={open}
      aria-controls={panelId}
      onClick={() => setOpen(prev => !prev)}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpen(prev => !prev);
        }
      }}
      className={cn(
        'cursor-pointer transition-all duration-300 focus-ring',
        open
          ? 'border-neon-border-blue-strong shadow-glow-blue-expanded'
          : 'hover:shadow-lg',
      )}
    >
      {/* Header: lewa ikona, środek tytuł, prawa strzałka/chevron */}
      <div className='grid grid-cols-[auto_1fr_auto] items-center gap-3'>
        <Icon
          className={cn(
            'text-2xl md:text-3xl transition-all',
            open ? 'text-neon-blue drop-shadow-glow-blue-medium' : 'text-neon-blue/80',
          )}
          aria-hidden='true'
        />
        <h3 className='text-base md:text-lg font-semibold text-text-light mb-0 text-center'>
          {point.title}
        </h3>
        <span
          className={cn(
            'inline-block text-neon-blue transition-transform duration-300',
            open ? 'rotate-180' : 'rotate-0',
          )}
          aria-hidden='true'
        >
          ▾
        </span>
      </div>

      {/* Panel rozwijany */}
      <div
        id={panelId}
        role='region'
        aria-hidden={!open}
        className={cn(
          'overflow-hidden transition-[grid-template-rows,opacity] duration-300 grid mt-3',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className='min-h-0'>
          <p className='text-sm md:text-base text-text-light/85 leading-relaxed'>
            {point.text}
          </p>
        </div>
      </div>
    </Card>
  );
}

/**
 * Sekcja podejścia z nagłówkiem i wrapperem
 * @param {Object} data - Dane podejścia z title, quote i points
 */
export default function ApproachSection({ data }) {
  const { approach } = data;

  return (
    <Section bg='surface' title={data.title}>
      <div className='space-y-10'>
        {/* Cytat w kursywie, kolor jak header sekcji (dark) */}
        <p className='text-xl md:text-2xl leading-relaxed italic text-text-dark text-center'>
          {approach.quote}
        </p>

        {/* Zwijane klocki: ikona w środku karty (lewo), tytuł center, trójkąt prawo */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {approach.points.map((point, index) => (
            <ApproachItem key={index} point={point} idx={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
