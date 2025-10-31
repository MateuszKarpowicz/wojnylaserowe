/**
 * Komponent rozsuwaka FAQ z naszymi stylami
 * Używa AccordionCard z headless Accordion dla lepszej dostępności
 *
 * @param {Object} item - Pytanie i odpowiedź
 * @param {string} index - Indeks dla identyfikacji
 */
'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AccordionCard } from '@/components/composed';
import { cn } from '@/lib/utils';

export default function FAQAccordion({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const trigger = (
    <>
      <h3 className='font-medium text-text-dark pr-4'>{item.question}</h3>
      {isOpen ? (
        <FaChevronUp className='text-neon-purple flex-shrink-0' />
      ) : (
        <FaChevronDown className='text-neon-purple flex-shrink-0' />
      )}
    </>
  );

  return (
    <AccordionCard
      id={`faq-${index}`}
      isOpen={isOpen}
      onToggle={() => setIsOpen(prev => !prev)}
      trigger={trigger}
      cardVariant="neutral"
      cardSize="md"
      className="border border-border rounded-lg bg-surface hover:bg-surface-light transition-colors"
    >
      <div className='border-t border-border pt-4'>
        <p className='text-secondary leading-relaxed'>{item.answer}</p>
      </div>
    </AccordionCard>
  );
}
