import clsx from 'clsx';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={clsx('max-w-3xl', alignment, className)}>
      {eyebrow && (
        <p className={light ? 'eyebrow-light' : 'eyebrow'}>{eyebrow}</p>
      )}
      <h2
        className={clsx(
          'display-lg mt-5 text-balance text-4xl sm:text-5xl lg:text-6xl',
          light ? 'text-white' : 'text-slate-900',
        )}
      >
        {title}
      </h2>
      <div className={clsx(align === 'center' ? 'gold-rule-center' : 'gold-rule')} />
      {subtitle && (
        <p
          className={clsx(
            'text-base sm:text-lg leading-relaxed',
            light ? 'text-slate-200' : 'text-slate-600',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
