'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

/**
 * Komponent rozsuwaka FAQ z naszymi stylami
 * @param {Object} item - Pytanie i odpowiedź
 * @param {string} index - Indeks dla identyfikacji
 */
export default function FAQAccordion({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border border-border-light rounded-lg bg-surface'>
      <button
        onClick={toggleItem}
        className='w-full text-left p-4 flex justify-between items-center hover:bg-surface-light transition-colors rounded-lg'
      >
        <h3 className='font-normal text-text-dark pr-4'>{item.question}</h3>
        {isOpen ? (
          <FaChevronUp className='text-neon-blue flex-shrink-0' />
        ) : (
          <FaChevronDown className='text-neon-blue flex-shrink-0' />
        )}
      </button>

      {isOpen && (
        <div className='px-4 pb-4'>
          <div className='border-t border-border-light pt-4'>
            <p className='text-secondary leading-relaxed'>{item.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
