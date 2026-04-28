import SideRail from '@/components/chrome/SideRail';
import Hero from '@/components/sections/Hero';
import Spotlight from '@/components/sections/Spotlight';
import ProjectIndex from '@/components/sections/ProjectIndex';
import About from '@/components/sections/About';
import LinksSection from '@/components/sections/LinksSection';
import Closer from '@/components/sections/Closer';

const HOME_SECTIONS = [
  { id: 'hero', label: 'Top' },
  { id: 'spotlight', label: 'Spotlight' },
  { id: 'index', label: 'Selected' },
  { id: 'about', label: 'About' },
  { id: 'links', label: 'Links' },
  { id: 'closer', label: 'Contact' },
];

export default function HomePage() {
  return (
    <>
      <SideRail sections={HOME_SECTIONS} />
      <main>
        <Hero />
        <Spotlight />
        <ProjectIndex />
        <About />
        <LinksSection />
        <Closer />
      </main>
    </>
  );
}
