import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function Eyebrow({
  children,
  className,
  faint,
}: {
  children: ReactNode;
  className?: string;
  faint?: boolean;
}) {
  return (
    <span className={cn('eyebrow', faint && 'eyebrow-faint', className)}>{children}</span>
  );
}
