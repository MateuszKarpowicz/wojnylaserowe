export default function Card({
  variant = 'borderBlue',
  as = 'div',
  className = '',
  children,
  ...props
}) {
  const VARIANT_TO_CLASS = {
    borderBlue: 'card-with-border-blue',
    borderPurple: 'card-with-border-purple',
    aboutCard: 'about-card',
    approachCardDark: 'approach-card-dark',
  };

  const variantClass = VARIANT_TO_CLASS[variant] || VARIANT_TO_CLASS.borderBlue;
  const classes = [variantClass, className].filter(Boolean).join(' ');
  const As = as;

  return (
    <As className={classes} {...props}>
      {children}
    </As>
  );
}
