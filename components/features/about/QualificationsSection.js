'use client';

import {
  Card,
  Section,
} from '@/components/primitives';
import { cn } from '@/lib/utils';
import { getIcon } from '@/lib/icons';
import { useState } from 'react';
import { FaCertificate } from 'react-icons/fa';

/**
 * Sekcja kwalifikacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane kwalifikacji z title i items
 */

function QualificationItem({ item, idx }) {
  const [open, setOpen] = useState(false);
  const Icon = getIcon(item.icon, FaCertificate);
  const panelId = `qual-desc-${idx}`;

  return (
    <div className='grid grid-cols-[3.25rem_1fr] md:grid-cols-[3.75rem_1fr] items-stretch gap-3 md:gap-4'>
      {/* IKONA POZA KARTĄ */}
      <div className='flex items-center justify-center'>
        <Icon
          className={cn(
            'text-4xl md:text-5xl transition-all duration-300',
            open
              ? 'text-neon-purple drop-shadow-glow-purple-strong'
              : 'text-neon-purple/60 drop-shadow-glow-purple-weak',
          )}
          aria-hidden='true'
        />
      </div>

      {/* CAŁA KARTA JAKO KIESZONKA */}
      <Card
        variant='purple'
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
          'cursor-pointer focus-ring border-neon-border-purple-medium',
          'transition-[box-shadow,transform,border-color,padding] duration-[var(--dur-slow)] ease-[var(--ease-brand)]',
          // Nadpisujemy domyślne p-6 z Card.js
          '!p-0',
          open
            ? 'border-neon-border-purple-very-strong shadow-glow-purple-expanded scale-[1.01] !p-6'
            : 'shadow-md hover:shadow-lg !p-3',
        )}
      >
        {/* GÓRNA LINIA (TYTUŁ + CHEVRON) – TYPOGRAFIA I KOLOR JAK WCZEŚNIEJ */}
        <div className='flex items-center justify-between'>
          <h3 className='text-xl md:text-2xl text-text-dark mb-0 ml-4 md:ml-6'>{item.title}</h3>
          <span
            className={cn(
              'ml-3 inline-block text-neon-purple transition-transform duration-300 text-2xl md:text-3xl',
              open ? 'rotate-180' : 'rotate-0',
            )}
            aria-hidden='true'
          >
            ▾
          </span>
        </div>

        {/* PANEL ROZWIJANY */}
        <div
          id={panelId}
          role='region'
          aria-hidden={!open}
          className={cn(
            'overflow-hidden transition-[grid-template-rows,opacity] duration-300 grid',
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className='min-h-0 mt-3 rounded-md bg-surface p-4'>
            <p className='text-text-dark/80 leading-relaxed text-base md:text-lg'>
              {item.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function QualificationsSection({ data }) {
  return (
    <Section bg='dark' title={data.title}>
      <div className='space-y-5 md:space-y-6'>
        {data.items.map((item, index) => (
          <QualificationItem key={index} item={item} idx={index} />
        ))}
      </div>
    </Section>
  );
}
