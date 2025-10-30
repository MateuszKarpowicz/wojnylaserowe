import Container from './Container';
import SectionHeader from './SectionHeader';

export default function Section({
  id,
  bg = 'surface', // 'surface' | 'dark'
  title,
  subtitle,
  align = 'center', // for header
  className = '',
  children,
  headerClassName = '',
  containerProps = {},
}) {
  const bgClass = bg === 'dark' ? 'bg-bg-dark' : 'bg-surface';
  const classes = ['section-pad', bgClass, className].filter(Boolean).join(' ');
  const headerVariant = bg === 'dark' ? 'light' : 'dark';

  return (
    <section id={id} className={classes}>
      <Container {...containerProps}>
        {title && (
          <SectionHeader
            title={title}
            subtitle={subtitle}
            variant={headerVariant}
            align={align}
            className={headerClassName}
          />
        )}
        {children}
      </Container>
    </section>
  );
}
