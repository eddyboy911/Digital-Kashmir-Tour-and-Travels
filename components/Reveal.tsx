'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface RevealProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** Set true to re-trigger every time the element re-enters the viewport. */
  repeat?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className,
  repeat = false,
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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [repeat]);

  const Component = Tag as 'div';
  return (
    <Component
      ref={ref}
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
