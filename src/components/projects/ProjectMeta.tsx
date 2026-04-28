import { copy, experience } from '@/data';
import Chip from '@/components/ui/Chip';
import ExternalLink from '@/components/ui/ExternalLink';
import type { Project } from '@/types';

export default function ProjectMeta({ project }: { project: Project }) {
  const builtAt = project.atCompany
    ? experience.find((e) => e.id === project.atCompany)
    : undefined;
  const hasLinks = Boolean(project.links.live || project.links.repo || project.links.demo);

  return (
    <aside className="meta-col">
      <div>
        <h4>{copy.projectDetail.rolePrefix}</h4>
        <div className="field-value">{project.role}</div>
      </div>
      <div>
        <h4>{copy.projectDetail.yearPrefix}</h4>
        <div className="field-value">{project.year}</div>
      </div>
      <div>
        <h4>{copy.projectDetail.techStackHeading}</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
          {project.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </div>
      {builtAt && (
        <div>
          <h4>{copy.projectDetail.builtAtPrefix}</h4>
          <div className="field-value">
            <a
              href={`/about#experience-${builtAt.id}`}
              data-lens="link"
              style={{
                color: 'var(--fg)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--fg-faint)',
                paddingBottom: 1,
              }}
            >
              @{builtAt.company} →
            </a>
          </div>
        </div>
      )}
      {hasLinks && (
        <div>
          <h4>{copy.projectDetail.linksHeading}</h4>
          <div className="actions">
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
      )}
    </aside>
  );
}
