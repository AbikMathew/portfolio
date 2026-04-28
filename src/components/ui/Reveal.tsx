'use client';

import { useEffect, useRef, type ReactNode, type ElementType } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  as?: ElementType;
  className?: string;
  id?: string;
}

export default function Reveal({
  children,
  delay,
  as: Tag = 'div',
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      node.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={cn('reveal', delay && `delay-${delay}`, className)}
    >
      {children}
    </Tag>
  );
}
