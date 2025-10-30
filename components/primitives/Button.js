"use client";

import Link from 'next/link';
import { cva } from 'class-variance-authority';

const buttonStyles = cva('', {
  variants: {
    variant: {
      neonBlue: 'btn-neon-blue',
      neonPurple: 'btn-neon-purple',
      section: 'btn-section',
      ctaBlue: 'btn-cta-blue',
      ctaPurple: 'btn-cta-purple',
      offer: 'btn-offer',
    },
    size: {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-base',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'neonBlue',
    size: 'md',
    fullWidth: false,
  },
});

export default function Button({
  as = 'button',
  href,
  type = 'button',
  variant,
  size,
  fullWidth,
  className = '',
  children,
  ...props
}) {
  const classes = [buttonStyles({ variant, size, fullWidth }), className]
    .filter(Boolean)
    .join(' ');

  if (as === 'a' && href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (as === 'button') {
    return (
      <button type={type} className={classes} {...props}>
        {children}
      </button>
    );
  }

  const As = as;
  return (
    <As className={classes} href={href} {...props}>
      {children}
    </As>
  );
}
