'use client';

import { useEffect, useState } from 'react';
import { profile, site } from '@/data';
import { useLenis } from './LenisProvider';

interface SectionDef {
  id: string;
  label: string;
}

interface SideRailProps {
  sections?: SectionDef[];
}

export default function SideRail({ sections }: SideRailProps) {
  const [active, setActive] = useState<string | null>(sections?.[0]?.id ?? null);
  const lenis = useLenis();

  useEffect(() => {
    if (!sections || sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sections]);

  const handleTickClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { offset: -32 });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="side-rail">
      <div className="vert">{profile.shortName} · 2026</div>
      {sections && sections.length > 0 ? (
        <div className="ticks">
          {sections.map((s) => (
            <div key={s.id} className={`tick-row ${active === s.id ? 'active' : ''}`}>
              <button
                className={`tick ${active === s.id ? 'active' : ''}`}
                data-lens="hover"
                onClick={() => handleTickClick(s.id)}
                aria-label={s.label}
              />
              <span className="tick-label">{s.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <div />
      )}
      <div className="vert">{site.version}</div>
    </div>
  );
}
