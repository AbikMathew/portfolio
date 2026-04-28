'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/data';
import { NAV_ITEMS, isActive } from '@/lib/routing';
import { cn } from '@/lib/utils';

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nameParts = profile.name.split(' ');

  return (
    <nav className={cn('topnav', scrolled && 'scrolled')}>
      <Link href="/" className="wordmark" data-lens="link" aria-label={profile.name}>
        <span className="wordmark-full">
          {nameParts.map((part, i) => (
            <span key={i}>
              {part}
              {i < nameParts.length - 1 && <span className="slash">/</span>}
            </span>
          ))}
        </span>
        <span className="wordmark-short">{profile.shortName}</span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <span className="status" data-tone={profile.status.tone}>
          <span className="dot" />
          {profile.status.label}
        </span>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? 'current' : undefined}
              data-lens="link"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
