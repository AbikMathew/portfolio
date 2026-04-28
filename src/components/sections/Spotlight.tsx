import Image from 'next/image';
import { projects, copy } from '@/data';
import { getAssetPath } from '@/lib/asset';
import { youtubePosterUrl } from '@/lib/youtube';
import Chip from '@/components/ui/Chip';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHead from '@/components/ui/SectionHead';
import ExternalLink from '@/components/ui/ExternalLink';

export default function Spotlight() {
  const project = projects.find((p) => p.spotlight) ?? projects[0];

  const heroImageSrc =
    project.hero.kind === 'image'
      ? getAssetPath(project.hero.src)
      : project.hero.kind === 'video'
        ? project.hero.poster ?? youtubePosterUrl(project.hero.videoId)
        : null;

  return (
    <section id="spotlight">
      <div className="wrap">
        <SectionHead
          num={copy.home.spotlight.eyebrow}
          heading={
            <>
              {copy.home.spotlight.heading}{' '}
              <span className="it">{copy.home.spotlight.headingItalic}</span>
            </>
          }
          metaRight={[...copy.home.spotlight.metaRight]}
        />

        <Reveal as="article" className="spotlight" id="spotlight-card">
          <div className="meta">
            <div className="eyebrow-row">
              <span className="accent">{copy.home.spotlight.eyebrowAccent}</span>
              <span>·</span>
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h3>
              {project.title}
              {project.spotlightTagline && (
                <span className="it"> {project.spotlightTagline}</span>
              )}
            </h3>
            <p className="lede">{project.summary}</p>
            <div className="stack">
              {project.stack.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            <div className="actions">
              <Button href={`/projects/${project.slug}`} arrow="→">
                {copy.buttons.readCaseStudy}
              </Button>
              {project.links.live && (
                <ExternalLink href={project.links.live}>↗ {copy.buttons.visitLive}</ExternalLink>
              )}
              {project.links.demo && (
                <ExternalLink href={project.links.demo}>↗ {copy.buttons.watchDemo}</ExternalLink>
              )}
              {project.links.repo && (
                <ExternalLink href={project.links.repo}>↗ {copy.buttons.visitRepo}</ExternalLink>
              )}
            </div>
          </div>

          <div className="media" data-lens="hover">
            <span className="frame-label">Fig. {project.num} — {project.category}</span>
            {heroImageSrc ? (
              <Image
                src={heroImageSrc}
                alt={project.hero.kind === 'image' ? project.hero.alt : project.title}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            ) : (
              <div className="placeholder" style={{ width: '100%', height: '100%' }} />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
