'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { projects, copy } from '@/data';
import Button from '@/components/ui/Button';
import SectionHead from '@/components/ui/SectionHead';
import SplitTitle from '@/components/ui/SplitTitle';
import PeekPanel from '@/components/projects/PeekPanel';
import type { Project } from '@/types';

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

          {hovered && <PeekPanel project={hovered} x={pos.x} y={pos.y} />}
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
