import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type CommonProps = {
  children: ReactNode;
  arrow?: ReactNode;
  variant?: 'default' | 'quiet';
  className?: string;
  /** Adds a continuous diagonal shimmer sweep — used to draw the eye to a primary CTA. */
  shimmer?: boolean;
};

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string;
  };

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined;
  };

export default function Button(props: AnchorProps | ButtonProps) {
  const { children, arrow, variant = 'default', className, shimmer } = props;
  const cls = cn(
    'btn',
    variant === 'quiet' && 'btn-quiet',
    shimmer && 'btn-shimmer',
    className
  );

  if ('href' in props && props.href !== undefined) {
    const { href, shimmer: _s, ...rest } = props as AnchorProps & { shimmer?: boolean };
    void _s;
    const isExternal = /^https?:/i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
    const isDownload = 'download' in rest && (rest as { download?: unknown }).download !== undefined;
    const useNextLink = !isExternal && !isDownload;

    if (useNextLink) {
      return (
        <Link {...rest} href={href} className={cls} data-lens="link">
          {children}
          {arrow !== undefined && <span className="arrow">{arrow}</span>}
        </Link>
      );
    }
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
        {arrow !== undefined && <span className="arrow">{arrow}</span>}
      </a>
    );
  }
  const { shimmer: _s, ...rest } = props as ButtonProps & { shimmer?: boolean };
  void _s;
  return (
    <button {...rest} className={cls} data-lens="link">
      {children}
      {arrow !== undefined && <span className="arrow">{arrow}</span>}
    </button>
  );
}
