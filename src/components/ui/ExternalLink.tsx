import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  href: string;
  children: ReactNode;
  variant?: 'mono' | 'quiet';
}

export default function ExternalLink({
  href,
  children,
  variant = 'mono',
  className,
  ...rest
}: ExternalLinkProps) {
  const cls = cn(variant === 'mono' ? 'link-mono' : 'link-quiet', className);
  const isExternal = /^https?:/i.test(href);
  return (
    <a
      {...rest}
      href={href}
      className={cls}
      data-lens="link"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
