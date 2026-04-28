import { links, copy } from '@/data';
import Reveal from '@/components/ui/Reveal';
import SectionHead from '@/components/ui/SectionHead';
import SplitTitle from '@/components/ui/SplitTitle';
import type { LinkChannel, LinkEntry } from '@/types';

function LinkColumn({ title, items }: { title: string; items: LinkEntry[] }) {
  return (
    <div className="col">
      <h4>{title}</h4>
      {items.map((s) => {
        const isExternal = /^https?:/i.test(s.url);
        return (
          <a
            key={s.name}
            href={s.url}
            className="item"
            data-lens="link"
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
          >
            <span className="name">
              <SplitTitle parts={s.titleParts} fallback={s.name} />
            </span>
            <span className="handle">{s.handle} ↗</span>
          </a>
        );
      })}
    </div>
  );
}

export default function LinksSection() {
  const filterBy = (channel: LinkChannel) => links.filter((l) => l.channel === channel);
  const social = filterBy('social');
  const project = filterBy('project');

  return (
    <section id="links">
      <div className="wrap">
        <SectionHead
          num={copy.home.links.eyebrow}
          heading={
            <>
              {copy.home.links.heading}{' '}
              <span className="it">{copy.home.links.headingItalic}</span>{' '}
              {copy.home.links.headingSuffix}
            </>
          }
          metaRight={[...copy.home.links.metaRight]}
        />

        <Reveal className="links">
          {social.length > 0 && <LinkColumn title={copy.home.links.socialColTitle} items={social} />}
          {project.length > 0 && (
            <LinkColumn title={copy.home.links.projectColTitle} items={project} />
          )}
        </Reveal>
      </div>
    </section>
  );
}
