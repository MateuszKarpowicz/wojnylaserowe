'use client';
import faqData from '@/content/texts/faq.json';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = index => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className='min-h-screen bg-bg-light text-text-dark container'>
      {/* NAGŁÓWEK */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-normal text-text-dark mb-4'>
          {faqData.header.title}
        </h1>
        <p className='text-lg text-secondary'>{faqData.header.subtitle}</p>
      </div>

      {/* FAQ KATEGORIE */}
      <div className='space-y-8'>
        {faqData.categories.map((category, categoryIndex) => (
          <section
            key={categoryIndex}
            className='bg-surface rounded-lg shadow-sm p-6'
          >
            <h2 className='text-2xl font-normal text-text-dark mb-6 text-center'>
              {category.category}
            </h2>

            <div className='space-y-4'>
              {category.questions.map((item, itemIndex) => {
                const globalIndex = `${categoryIndex}-${itemIndex}`;
                const isOpen = openItems[globalIndex];

                return (
                  <div
                    key={itemIndex}
                    className='border border-border-light rounded-lg'
                  >
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className='w-full text-left p-4 flex justify-between items-center hover:bg-surface-light transition-colors'
                    >
                      <h3 className='font-normal text-text-dark pr-4'>
                        {item.question}
                      </h3>
                      {isOpen ? (
                        <FaChevronUp className='text-neon-blue flex-shrink-0' />
                      ) : (
                        <FaChevronDown className='text-neon-blue flex-shrink-0' />
                      )}
                    </button>

                    {isOpen && (
                      <div className='px-4 pb-4'>
                        <div className='border-t border-border-light pt-4'>
                          <p className='text-secondary leading-relaxed'>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* KONTAKT */}
      <section className='mt-12 text-center bg-surface rounded-lg shadow-sm p-8'>
        <h2 className='text-2xl font-normal text-text-dark mb-4'>
          {faqData.footer.title}
        </h2>
        <p className='text-secondary mb-6'>{faqData.footer.text}</p>
        <a
          href={faqData.footer.href}
          className='inline-block bg-neon-blue text-white px-8 py-3 rounded-lg hover:bg-neon-purple transition-colors duration-300 font-normal shadow-lg hover:shadow-xl transform hover:scale-105'
        >
          {faqData.footer.button}
        </a>
      </section>
    </main>
  );
}
