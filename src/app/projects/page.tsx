import { copy, projects, fillTemplate } from '@/data';
import SideRail from '@/components/chrome/SideRail';
import SectionHead from '@/components/ui/SectionHead';
import ProjectsIndexGrid from '@/components/projects/ProjectsIndexGrid';

export const metadata = {
  title: copy.meta.projects.title,
  description: copy.meta.projects.description,
};

function spanYears(items: typeof projects): number {
  if (!items.length) return 0;
  const years = items.map((p) => Number(p.year)).filter((n) => !Number.isNaN(n));
  if (!years.length) return 0;
  return Math.max(...years) - Math.min(...years) + 1;
}

export default function ProjectsPage() {
  const count = projects.length;
  const span = spanYears(projects);
  const metaRight = copy.projects.metaRightTemplate.map((line) =>
    fillTemplate(line, { count, span }),
  );

  return (
    <>
      <SideRail />
      <main>
        <section style={{ paddingTop: 140 }}>
          <div className="wrap">
            <SectionHead
              num={copy.projects.pageEyebrow}
              heading={
                <>
                  {copy.projects.pageHeading}{' '}
                  <span className="it">{copy.projects.pageHeadingItalic}</span>
                </>
              }
              metaRight={metaRight}
            />
            <ProjectsIndexGrid />
          </div>
        </section>
      </main>
    </>
  );
}
