"use client";

import { Section } from '@/components/primitives';
import { AccordionCard } from '@/components/composed';
import { getIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { FaUserMd } from 'react-icons/fa';

function ApproachItem({ point, idx }) {
  const [open, setOpen] = useState(false);
  const Icon = getIcon(point.icon, FaUserMd);

  const trigger = (
    <div className='grid grid-cols-[auto_1fr_auto] items-center gap-3 w-full'>
      <Icon
        className={cn(
          'text-2xl md:text-3xl transition-all',
          open
            ? 'text-neon-blue drop-shadow-glow-blue-medium'
            : 'text-neon-blue/80',
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
  );

  return (
    <AccordionCard
      id={`approach-${idx}`}
      isOpen={open}
      onToggle={() => setOpen(prev => !prev)}
      trigger={trigger}
      cardVariant="blue"
      className={cn(
        open
          ? 'border-neon-border-blue-strong shadow-glow-blue-expanded'
          : 'hover:shadow-lg',
      )}
    >
      <p className='text-sm md:text-base text-text-light/85 leading-relaxed'>
        {point.text}
      </p>
    </AccordionCard>
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
