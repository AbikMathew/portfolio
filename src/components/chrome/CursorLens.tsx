'use client';

import { useEffect } from 'react';

export default function CursorLens() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    if (!supportsHover) {
      document.body.classList.add('no-lens');
      return;
    }

    document.body.classList.remove('no-lens');
    const lens = document.getElementById('cursor-lens');
    const dot = document.getElementById('cursor-dot');
    if (!lens || !dot) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const onEnter = (e: Event) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest('a, button, [data-lens="link"]')) {
        lens.classList.add('lens-link');
        lens.classList.remove('lens-hover');
      } else if (t.closest('[data-lens="hover"]')) {
        lens.classList.add('lens-hover');
        lens.classList.remove('lens-link');
      }
    };

    const onLeave = (e: Event) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest('a, button, [data-lens="link"], [data-lens="hover"]')) {
        lens.classList.remove('lens-link', 'lens-hover');
      }
    };

    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      lens.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return null;
}
