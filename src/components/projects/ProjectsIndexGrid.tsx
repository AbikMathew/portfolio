'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { projects } from '@/data';
import SplitTitle from '@/components/ui/SplitTitle';
import PeekPanel from './PeekPanel';
import type { Project } from '@/types';

function groupByYear(items: Project[]): Array<[string, Project[]]> {
  const map = new Map<string, Project[]>();
  for (const p of items) {
    const arr = map.get(p.year) ?? [];
    arr.push(p);
    map.set(p.year, arr);
  }
  return Array.from(map.entries()).sort((a, b) => Number(b[0]) - Number(a[0]));
}

export default function ProjectsIndexGrid() {
  const sorted = [...projects].sort((a, b) => Number(b.year) - Number(a.year));
  const grouped = groupByYear(sorted);
  const [hovered, setHovered] = useState<Project | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
    <div className="projects-index" ref={sectionRef}>
      {grouped.map(([year, items]) => (
        <div className="year-group" key={year}>
          <span className="year-label">{year}</span>
          <div className="idx" data-lens="hover">
            {items.map((p) => (
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
                <span className="year">{p.category}</span>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {hovered && <PeekPanel project={hovered} x={pos.x} y={pos.y} position="fixed" />}
    </div>
  );
}
