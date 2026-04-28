import { profile, site, copy, fillTemplate } from '@/data';
import Reveal from '@/components/ui/Reveal';

export default function Closer() {
  const year = new Date().getFullYear();
  const headingLines = copy.home.closer.heading.split('\n');

  return (
    <section id="closer" className="closer">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{copy.home.closer.eyebrow}</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          {headingLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headingLines.length - 1 && <br />}
            </span>
          ))}{' '}
          <span className="it">{copy.home.closer.headingItalic}</span>
        </Reveal>

        <Reveal delay={2} className="meta">
          <span>
            {fillTemplate(copy.footer.creditTemplate, { version: site.version, year })}
          </span>
          <span style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a href={`mailto:${profile.contact.email}`} data-lens="link">
              {profile.contact.email}
            </a>
            <a href="https://www.linkedin.com/in/abik-mathew/" target="_blank" rel="noreferrer" data-lens="link">
              LinkedIn ↗
            </a>
            <a href="https://github.com/AbikMathew" target="_blank" rel="noreferrer" data-lens="link">
              GitHub ↗
            </a>
          </span>
        </Reveal>

        <div className="footer-crumb">
          <span>{fillTemplate(copy.footer.copyrightTemplate, { year })}</span>
          <span>{copy.footer.setIn}</span>
        </div>
      </div>
    </section>
  );
}
