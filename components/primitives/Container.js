export default function Container({ as = 'div', maxWidth = 'xl', className = '', children, ...props }) {
  const As = as;
  const MAX_TO_CLASS = {
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-none',
  };
  const maxClass = MAX_TO_CLASS[maxWidth] || MAX_TO_CLASS.xl;
  const classes = ['container mx-auto px-4', maxClass, className].filter(Boolean).join(' ');

  return (
    <As className={classes} {...props}>
      {children}
    </As>
  );
}
