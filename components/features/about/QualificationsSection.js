'use client';

import { Section } from '@/components/primitives';
import { ExpandableIconCard } from '@/components/composed';
import { useState } from 'react';

/**
 * Sekcja kwalifikacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane kwalifikacji z title i items
 */
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

function QualificationItem({ item, idx }) {
  const [open, setOpen] = useState(false);

  return (
    <ExpandableIconCard
      id={`qual-${idx}`}
      isOpen={open}
      onToggle={() => setOpen(prev => !prev)}
      icon={item.icon}
      title={item.title}
      cardVariant="purple"
      cardSizeClosed="sm"
      cardSizeOpen="md"
    >
      {item.description}
    </ExpandableIconCard>
  );
}
