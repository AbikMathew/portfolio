export type StatusTone = 'available' | 'employed' | 'open';

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  location: string;
  timezone: string;
  bio: string[];
  status: { label: string; tone: StatusTone };
  contact: { email: string; phone?: string };
  meta: { titles: string[] };
  currently: {
    now: string;
    nowShort?: string;
    nowLink?: { label: string; url: string };
    stack: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  type: string;
  description: string;
  highlights?: string[];
  current?: boolean;
}

export type ProjectMedia =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; provider: 'youtube'; videoId: string; poster?: string }
  | { kind: 'placeholder'; label?: string };

export interface ProjectLinks {
  live?: string;
  repo?: string;
  demo?: string;
  caseStudy?: string;
}

export interface Project {
  slug: string;
  num: string;
  title: string;
  titleParts?: Array<string | { it: string }>;
  year: string;
  role: string;
  category: string;
  summary: string;
  longDescription?: string[];
  stack: string[];
  contributions?: string[];
  hero: ProjectMedia;
  thumb?: ProjectMedia;
  gallery?: ProjectMedia[];
  links: ProjectLinks;
  spotlight?: boolean;
  featured?: boolean;
  atCompany?: string;
  order?: number;
  spotlightTagline?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export type LinkChannel = 'social' | 'project';

export interface LinkEntry {
  channel: LinkChannel;
  name: string;
  titleParts?: Array<string | { it: string }>;
  handle: string;
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  baseUrl: string;
  basePath: string;
  resumePath: string;
  resumeFilename: string;
  version: string;
  nav: NavItem[];
}
