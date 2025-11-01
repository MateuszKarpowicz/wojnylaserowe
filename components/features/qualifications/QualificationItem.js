'use client';

import { ExpandableIconCard } from '@/components/composed';
import { useState } from 'react';

/**
 * QualificationItem - Komponent pojedynczej kwalifikacji
 *
 * @param {Object} item - Dane kwalifikacji z polami: icon, title, description
 * @param {number} idx - Indeks kwalifikacji
 */
export default function QualificationItem({ item, idx }) {
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
