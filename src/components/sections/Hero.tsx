'use client';

import { Fragment, useEffect, useState } from 'react';
import { profile, copy } from '@/data';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

function splitChars(text: string, revealed: boolean) {
  return Array.from(text).map((c, i) => (
    <span
      className={cn('char', revealed && 'in')}
      key={i}
      style={{ transitionDelay: `${100 + i * 30}ms` }}
    >
      {c === ' ' ? ' ' : c}
    </span>
  ));
}

function formatTime(timezone: string): string {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const tzShort = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    hour: '2-digit',
    timeZoneName: 'short',
  })
    .formatToParts(new Date())
    .find((p) => p.type === 'timeZoneName')?.value;
  return `${fmt.format(new Date())}${tzShort ? ` ${tzShort}` : ''}`;
}

export default function Hero() {
  const [time, setTime] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setTime(formatTime(profile.timezone));
    const t = window.setInterval(() => setTime(formatTime(profile.timezone)), 30 * 1000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setRevealed(true), 50);
    return () => window.clearTimeout(t);
  }, []);

  const words = profile.name.split(' ');
  const firstLine = words.slice(0, words.length - 1).join(' ');
  const lastWord = words[words.length - 1];

  return (
    <section id="hero" className="hero">
      <div className="wrap hero-grid">
        <Reveal className="meta-top">
          {profile.meta.titles.map((title, i) => (
            <Fragment key={i}>
              <span>{title}</span>
              {i < profile.meta.titles.length - 1 && <span className="dot-sep">·</span>}
            </Fragment>
          ))}
        </Reveal>

        <h1 className="name">
          <span className="first">{splitChars(firstLine, revealed)}</span>
          <span className="last">{splitChars(lastWord, revealed)}</span>
        </h1>

        <Reveal as="p" className="practice serif-italic" delay={2}>
          {profile.tagline}
        </Reveal>

        {profile.currently.nowShort && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Reveal className="now-line" delay={3}>
              <span className="arrow">{copy.hero.nowLineArrow}</span>
              <span>{profile.currently.nowShort}</span>
              {time && (
                <>
                  <span className="dot-sep" style={{ color: 'var(--fg-faint)' }}>·</span>
                  <span className="blink">{time}</span>
                </>
              )}
            </Reveal>
          </div>
        )}
      </div>

      <div className="scroll-cue" aria-hidden>
        <div className="line" />
      </div>
    </section>
  );
}
