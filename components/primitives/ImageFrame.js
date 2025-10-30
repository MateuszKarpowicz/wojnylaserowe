export default function ImageFrame({
  variant = 'plain', // 'plain' | 'neonBlue'
  aspect = 'square', // 'square' | '16:9'
  sizeClass = '', // e.g. 'max-w-md'
  className = '',
  children,
  ...props
}) {
  const OUTER_BY_VARIANT = {
    plain: 'bg-surface rounded-lg shadow-sm overflow-hidden',
    neonBlue:
      'rounded-lg shadow-xl border-2 border-neon-blue/20 overflow-hidden',
    neonPurple:
      'rounded-lg shadow-xl border-2 border-neon-purple/30 overflow-hidden',
  };

  const ASPECT_CLASS = aspect === '16:9' ? 'aspect-[16/9]' : 'aspect-square';

  const outer = [
    'relative w-full',
    sizeClass,
    OUTER_BY_VARIANT[variant] || OUTER_BY_VARIANT.plain,
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
