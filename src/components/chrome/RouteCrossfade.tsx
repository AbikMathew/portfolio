'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteCrossfade({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [shown, setShown] = useState(true);

  useEffect(() => {
    setShown(false);
    const t = window.setTimeout(() => setShown(true), 16);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return <div className={`route-fade ${shown ? 'in' : ''}`}>{children}</div>;
}
