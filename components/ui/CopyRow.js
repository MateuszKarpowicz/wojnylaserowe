'use client';

import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

export default function CopyRow({ icon: Icon, label, value, href }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div
      className='bg-surface border-2 border-neon-blue/30 rounded-lg p-4 grid grid-cols-[auto_1fr_auto] items-center gap-4 hover:border-neon-blue/50 transition-colors'
    >
      {Icon && <Icon className='text-neon-blue/80 drop-shadow-[0_0_10px_rgba(0,153,204,0.35)] text-2xl shrink-0' aria-hidden='true' />}
      <div className='min-w-0'>
        {href ? (
          <a href={href} target='_blank' rel='noopener noreferrer' className='block font-semibold text-neon-blue break-words hover:text-neon-blue/90 focus-ring rounded drop-shadow-[0_0_8px_rgba(0,153,204,0.35)]'>
            {value}
          </a>
        ) : (
          <div className='font-semibold text-neon-blue break-words drop-shadow-[0_0_8px_rgba(0,153,204,0.35)]'>{value}</div>
        )}
        {copied && (
          <div className='text-neon-blue/80 text-sm mt-1' aria-live='polite'>Skopiowano</div>
        )}
      </div>
      <div className='shrink-0 justify-self-end'>
        <button
          type='button'
          onClick={handleCopy}
          aria-label={`Skopiuj ${label || 'wartość'}`}
          className='focus-ring rounded p-2 text-neon-blue hover:text-neon-blue/90'
        >
          <FaCopy className='text-xl' aria-hidden='true' />
        </button>
      </div>
    </div>
  );
}
