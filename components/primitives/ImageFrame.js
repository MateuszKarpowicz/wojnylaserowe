export default function ImageFrame({
  variant = 'plain', // 'plain' | 'neonBlue' | 'neonPurple'
  aspect = 'square', // 'square' | '16:9'
  sizeClass = '', // e.g. 'max-w-md'
  className = '',
  rounded = true,
  children,
  ...props
}) {
  const OUTER_BY_VARIANT = {
    plain: 'bg-surface shadow-sm overflow-hidden',
    neonBlue:
      'shadow-xl border-2 border-neon-blue/30 shadow-[0_0_20px_rgba(0,153,204,0.25)] overflow-hidden',
    neonPurple:
      'shadow-xl border-2 border-neon-purple/40 shadow-[0_0_22px_rgba(192,132,252,0.28)] overflow-hidden',
  };

  const ASPECT_CLASS = aspect === '16:9' ? 'aspect-[16/9]' : 'aspect-square';

  const outer = [
    'relative w-full',
    sizeClass,
    OUTER_BY_VARIANT[variant] || OUTER_BY_VARIANT.plain,
    rounded ? 'rounded-lg' : 'rounded-none',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={outer} {...props}>
      <div className={['relative', ASPECT_CLASS].join(' ')}>{children}</div>
    </div>
  );
}
