import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn('chip', className)}>{children}</span>;
}
