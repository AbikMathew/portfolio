import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type CommonProps = {
  children: ReactNode;
  arrow?: ReactNode;
  variant?: 'default' | 'quiet';
  className?: string;
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
  const { children, arrow, variant = 'default', className } = props;
  const cls = cn('btn', variant === 'quiet' && 'btn-quiet', className);

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props as AnchorProps;
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
  const { ...rest } = props as ButtonProps;
  return (
    <button {...rest} className={cls} data-lens="link">
      {children}
      {arrow !== undefined && <span className="arrow">{arrow}</span>}
    </button>
  );
}
