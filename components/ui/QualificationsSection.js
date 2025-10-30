'use client';

import {
  Card,
  Container,
  Section,
  SectionHeader,
} from '@/components/primitives';
import { useState } from 'react';
import {
  FaCalendarCheck,
  FaCertificate,
  FaFlask,
  FaGraduationCap,
  FaHandshake,
} from 'react-icons/fa';

/**
 * Sekcja kwalifikacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane kwalifikacji z title i items
 */
const iconMap = {
  FaCertificate,
  FaGraduationCap,
  FaFlask,
  FaCalendarCheck,
  FaHandshake,
};

function QualificationItem({ item, idx }) {
  const [open, setOpen] = useState(false);
  const Icon =
    typeof item.icon === 'string'
      ? iconMap[item.icon] || FaCertificate
      : item.icon || FaCertificate;
  const panelId = `qual-desc-${idx}`;

  return (
    <div className='grid grid-cols-[3.25rem_1fr] md:grid-cols-[3.75rem_1fr] items-stretch gap-3 md:gap-4'>
      {/* IKONA POZA KARTĄ */}
      <div className='flex items-center justify-center'>
        <Icon
          className={[
            'text-4xl md:text-5xl transition-all duration-300',
            open
              ? 'text-neon-purple drop-shadow-[0_0_14px_rgba(192,132,252,0.60)]'
              : 'text-neon-purple/60 drop-shadow-[0_0_4px_rgba(192,132,252,0.25)]',
          ].join(' ')}
          aria-hidden='true'
        />
      </div>

      {/* CAŁA KARTA JAKO KIESZONKA */}
      <Card
        variant='borderPurple'
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
        className={[
          'cursor-pointer transition-all duration-300 focus-ring border-neon-purple/30',
          open
            ? 'border-transparent shadow-[0_0_44px_rgba(192,132,252,0.55),0_12px_22px_rgba(0,0,0,0.18)]'
            : 'shadow-md hover:shadow-lg',
        ].join(' ')}
      >
        {/* GÓRNA LINIA (TYTUŁ + CHEVRON) – TYPOGRAFIA I KOLOR JAK WCZEŚNIEJ */}
        <div className='flex items-center justify-between'>
          <h3 className='text-lg text-text-dark mb-0'>{item.title}</h3>
          <span
            className={[
              'ml-3 inline-block text-neon-purple transition-transform duration-300',
              open ? 'rotate-180' : 'rotate-0',
            ].join(' ')}
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
          className={[
            'overflow-hidden transition-[grid-template-rows,opacity] duration-300 grid',
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          ].join(' ')}
        >
          <div className='min-h-0'>
            <div className='mt-3 rounded-md bg-surface p-4'>
              <p className='text-text-dark/80 leading-relaxed text-sm md:text-base'>
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function QualificationsSection({ data }) {
  return (
    <Section bg='dark'>
      <Container>
        <SectionHeader title={data.title} variant='light' />
        <div className='space-y-5 md:space-y-6'>
          {data.items.map((item, index) => (
            <QualificationItem key={index} item={item} idx={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
