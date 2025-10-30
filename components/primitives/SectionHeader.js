import { cva } from 'class-variance-authority';

const headerWrapper = cva('mb-12', {
  variants: {
    align: {
      left: 'text-left',
      center: 'text-center',
    },
  },
  defaultVariants: {
    align: 'center',
  },
});

const titleStyles = cva('', {
  variants: {
    variant: {
      light: 'section-title-light',
      dark: 'section-title-dark',
    },
  },
  defaultVariants: {
    variant: 'dark',
  },
});

const subtitleStyles = cva('mt-2 text-base md:text-lg', {
  variants: {
    variant: {
      light: 'text-text-light/80',
      dark: 'text-text-dark/80',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
    },
  },
  defaultVariants: {
    variant: 'dark',
    align: 'center',
  },
});

export default function SectionHeader({
  title,
  subtitle,
  variant = 'dark',
  align = 'center',
  className = '',
}) {
  return (
    <div className={[headerWrapper({ align }), className].filter(Boolean).join(' ')}>
      <h2 className={titleStyles({ variant })}>{title}</h2>
      {subtitle && <p className={subtitleStyles({ variant, align })}>{subtitle}</p>}
    </div>
  );
}
