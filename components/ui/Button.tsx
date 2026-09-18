import Link from 'next/link';
import clsx from 'clsx';
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
  forwardRef,
} from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-700 text-white hover:bg-brand-800 shadow-soft hover:shadow-lg focus-visible:ring-brand-700',
  outline:
    'border border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white focus-visible:ring-brand-700',
  ghost:
    'text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-700',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-soft focus-visible:ring-[#25D366]',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

function classes(variant: Variant, size: Size, extra?: string) {
  return clsx(base, variants[variant], sizes[size], extra);
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | 'href'> & {
    href: string;
  };

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonAsButton | ButtonAsLink>(
  function Button(props, ref) {
    const variant: Variant = props.variant ?? 'primary';
    const size: Size = props.size ?? 'md';
    const cls = classes(variant, size, props.className);

    if (props.href) {
      const { variant: _v, size: _s, className: _c, children, href, ...anchorRest } = props;
      const isExternal = href.startsWith('http') || href.startsWith('//');
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={cls}
            target="_blank"
            rel="noopener noreferrer"
            {...anchorRest}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cls}
          {...anchorRest}
        >
          {children}
        </Link>
      );
    }

    const { variant: _v, size: _s, className: _c, children, ...buttonRest } =
      props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cls}
        {...buttonRest}
      >
        {children}
      </button>
    );
  },
);
