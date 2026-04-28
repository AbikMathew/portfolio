import type { SiteConfig } from '@/types';
import { NAV_ITEMS } from '@/lib/routing';

export const site: SiteConfig = {
  baseUrl: 'https://abikmathew.github.io/portfolio',
  basePath: '/portfolio',
  resumePath: '/assets/resume.pdf',
  resumeFilename: 'Abik-Mathew-George-Resume.pdf',
  version: 'v2.0',
  nav: NAV_ITEMS,
};
