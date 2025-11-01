'use client';

import { AccordionCard } from '@/components/composed';
import { getIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { FaUserMd } from 'react-icons/fa';

/**
 * ApproachItem - Komponent pojedynczego punktu podejścia
 *
 * @param {Object} point - Dane punktu z polami: icon, title, text
 * @param {number} idx - Indeks punktu
 */
export default function ApproachItem({ point, idx }) {
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
