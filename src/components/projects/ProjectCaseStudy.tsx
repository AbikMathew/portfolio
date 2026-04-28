import Link from 'next/link';
import { copy, projects } from '@/data';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import Gallery from './Gallery';
import Reveal from '@/components/ui/Reveal';
import SplitTitle from '@/components/ui/SplitTitle';
import type { Project } from '@/types';

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main>
      <section className="case-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">
              {project.num} · {project.category} · {project.year}
            </span>
          </Reveal>
          <Reveal as="h1" className="case-title" delay={1}>
            <SplitTitle parts={project.titleParts} fallback={project.title} />
          </Reveal>
          <Reveal delay={2} as="div" className="case-media-wrap" >
            <div style={{ marginTop: 48 }}>
              <ProjectHero media={project.hero} title={project.title} />
            </div>
          </Reveal>

          <div className="case-body">
            <ProjectMeta project={project} />

            <div className="copy-col">
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    color: 'var(--fg-mute)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    margin: '0 0 16px 0',
                  }}
                >
                  {copy.projectDetail.overviewHeading}
                </h3>
                <p className="lede">{project.summary}</p>
              </div>

              {project.longDescription && project.longDescription.length > 0 && (
                <div>
                  {project.longDescription.map((p, i) => (
                    <p key={i} style={{ marginBottom: i < project.longDescription!.length - 1 ? 16 : 0 }}>
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {project.contributions && project.contributions.length > 0 && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      color: 'var(--fg-mute)',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      margin: '0 0 16px 0',
                    }}
                  >
                    {copy.projectDetail.keyContributionsHeading}
                  </h3>
                  <ol className="contributions">
                    {project.contributions.map((c, i) => (
                      <li key={i}>
                        <span className="num">{String(i + 1).padStart(2, '0')}</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      color: 'var(--fg-mute)',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      margin: '0 0 16px 0',
                    }}
                  >
                    {copy.projectDetail.galleryHeading}
                  </h3>
                  <Gallery items={project.gallery} alt={project.title} />
                </div>
              )}
            </div>
          </div>

          <Reveal as="div" className="next-project">
            <div>
              <span className="label">{copy.projectDetail.nextProjectLabel}</span>
              <Link href={`/projects/${next.slug}`} className="title" data-lens="link">
                <SplitTitle parts={next.titleParts} fallback={next.title} />
              </Link>
            </div>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                color: 'var(--fg-mute)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {next.role} · {next.year}
            </span>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
