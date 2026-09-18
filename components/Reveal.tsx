'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay slot — applies reveal-delay-1..5 */
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Slide direction. Default: up */
  direction?: RevealDirection;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** Re-trigger every time the element re-enters the viewport. */
  repeat?: boolean;
  /** IntersectionObserver threshold (0–1). Default 0.12. */
  threshold?: number;
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
  className,
  repeat = false,
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) observer.unobserve(entry.target);
          } else if (repeat) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [repeat, threshold]);

  const Component = Tag as 'div';
  return (
    <Component
      ref={ref}
      data-dir={direction}
      className={clsx(
        'reveal',
        visible && 'is-visible',
        delay > 0 && `reveal-delay-${delay}`,
        className,
      )}
    >
      {children}
    </Component>
  );
}
