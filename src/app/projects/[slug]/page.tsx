import { notFound } from 'next/navigation';
import { projects } from '@/data';
import ProjectCaseStudy from '@/components/projects/ProjectCaseStudy';
import SideRail from '@/components/chrome/SideRail';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project — Abik Mathew George' };
  return {
    title: `${project.title} — Abik Mathew George`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return (
    <>
      <SideRail />
      <ProjectCaseStudy project={project} />
    </>
  );
}
