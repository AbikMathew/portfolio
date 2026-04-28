'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getAssetPath } from '@/lib/asset';
import { youtubePosterUrl } from '@/lib/youtube';
import { cn } from '@/lib/utils';
import type { ProjectMedia } from '@/types';

interface SlideshowProps {
  items: ProjectMedia[];
  alt: string;
  aspectRatio?: string;
  autoAdvanceMs?: number;
  className?: string;
  rounded?: boolean;
}

function mediaSrc(m: ProjectMedia): string | null {
  if (m.kind === 'image') return getAssetPath(m.src);
  if (m.kind === 'video') return m.poster ?? youtubePosterUrl(m.videoId);
  return null;
}

export default function Slideshow({
  items,
  alt,
  aspectRatio = '16 / 9',
  autoAdvanceMs = 6000,
  className,
  rounded = true,
}: SlideshowProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const next = useCallback(() => {
    setActive((cur) => (cur + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setActive((cur) => (cur - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const t = window.setInterval(next, autoAdvanceMs);
    return () => window.clearInterval(t);
  }, [paused, next, autoAdvanceMs, items.length]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    node.addEventListener('keydown', onKey);
    return () => node.removeEventListener('keydown', onKey);
  }, [prev, next]);

  if (items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={cn('slideshow', className)}
      style={{ aspectRatio, borderRadius: rounded ? 10 : 0 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      role="region"
      aria-roledescription="slideshow"
      aria-label={alt}
    >
      {items.map((m, i) => {
        const src = mediaSrc(m);
        const placeholderLabel =
          m.kind === 'placeholder' && m.label ? m.label : 'No preview';
        const isActive = i === active;
        return (
          <div
            key={i}
            className="slide"
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 600ms var(--ease-out), visibility 0s linear ' + (isActive ? '0s' : '600ms'),
              pointerEvents: isActive ? 'auto' : 'none',
              zIndex: isActive ? 2 : 1,
            }}
            aria-hidden={!isActive}
          >
            {src ? (
              <Image
                src={src}
                alt={`${alt} — ${i + 1} of ${items.length}`}
                fill
                sizes="(max-width: 900px) 100vw, 1200px"
                style={{ objectFit: 'cover' }}
                priority={i === 0}
              />
            ) : (
              <div className="placeholder-fill">{placeholderLabel}</div>
            )}
          </div>
        );
      })}

      {items.length > 1 && (
        <>
          <button
            type="button"
            className="nav prev"
            onClick={prev}
            aria-label="Previous slide"
            data-lens="link"
          >
            ‹
          </button>
          <button
            type="button"
            className="nav next"
            onClick={next}
            aria-label="Next slide"
            data-lens="link"
          >
            ›
          </button>
          <div className="dots" aria-hidden>
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={cn('dot', i === active && 'active')}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                data-lens="link"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
