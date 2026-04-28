'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { projects, copy } from '@/data';
import { getAssetPath } from '@/lib/asset';
import { youtubePosterUrl } from '@/lib/youtube';
import Button from '@/components/ui/Button';
import SectionHead from '@/components/ui/SectionHead';
import SplitTitle from '@/components/ui/SplitTitle';
import type { Project } from '@/types';

function projectThumb(p: Project): { src: string | null; isVideo: boolean } {
  const media = p.thumb ?? p.hero;
  if (media.kind === 'image') return { src: getAssetPath(media.src), isVideo: false };
  if (media.kind === 'video')
    return { src: media.poster ?? youtubePosterUrl(media.videoId), isVideo: true };
  return { src: null, isVideo: false };
}

export default function ProjectIndex() {
  const featured = projects.filter((p) => p.featured && !p.spotlight);
  const [hovered, setHovered] = useState<Project | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const onMove = (e: MouseEvent) => {
      const r = node.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    };
    node.addEventListener('mousemove', onMove);
    return () => node.removeEventListener('mousemove', onMove);
  }, []);

  const thumb = hovered ? projectThumb(hovered) : { src: null, isVideo: false };

  return (
    <section id="index" ref={sectionRef as never}>
      <div className="wrap">
        <SectionHead
          num={copy.home.index.eyebrow}
          heading={
            <>
              {copy.home.index.heading}{' '}
              <span className="it">{copy.home.index.headingItalic}</span>
            </>
          }
          metaRight={[...copy.home.index.metaRight]}
        />

        <div className="idx" data-lens="hover">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="row"
              data-lens="link"
              onMouseEnter={() => setHovered(p)}
              onMouseLeave={() => setHovered((cur) => (cur === p ? null : cur))}
            >
              <span className="num">{p.num}</span>
              <span className="title">
                <SplitTitle parts={p.titleParts} fallback={p.title} />
              </span>
              <span className="role">{p.role}</span>
              <span className="year">
                {p.category} · {p.year}
              </span>
              <span className="arrow">→</span>
            </Link>
          ))}

          {hovered && (
            <div className="peek show" style={{ left: pos.x, top: pos.y }}>
              {hovered.hero.kind === 'video' && <span className="video-icon">▶ Video</span>}
              {thumb.src ? (
                <Image src={thumb.src} alt={hovered.title} fill style={{ objectFit: 'cover' }} sizes="320px" />
              ) : (
                <div className="placeholder">No preview yet</div>
              )}
            </div>
          )}
        </div>

        <div
          style={{
            marginTop: 48,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <span className="eyebrow">{copy.home.index.endOfSelected}</span>
          <Button href="/projects" arrow="→">
            {copy.home.index.seeAllCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
