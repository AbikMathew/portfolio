'use client';

import { ReactLenis, useLenis as useLenisRoot } from 'lenis/react';
import type { ReactNode } from 'react';

export function useLenis() {
  return useLenisRoot();
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
