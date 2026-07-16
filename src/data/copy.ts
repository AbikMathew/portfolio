/**
 * All UI chrome text in one place.
 *
 * Edit this file to change any section eyebrow, heading, button label,
 * page title, or empty-state string — no component edits required.
 *
 * Content text (project summaries, bio, link handles) lives with its
 * data file (projects.ts, profile.ts, etc.), not here.
 */

export const copy = {
  home: {
    spotlight: {
      eyebrow: 'F · 01 / Featured',
      heading: 'The',
      headingItalic: 'spotlight.',
      metaRight: ['One project, in detail —', 'everything else in the index below.'],
      eyebrowAccent: '▸ Now Shipping',
    },
    index: {
      eyebrow: 'F · 02 / The Index',
      heading: 'Selected',
      headingItalic: 'works.',
      metaRight: ['Selected work, in detail —', 'full archive on the projects page.'],
      endOfSelected: '— End of selected —',
      seeAllCta: 'See all projects',
    },
    about: {
      eyebrow: 'F · 03 / About',
      heading: 'The',
      headingItalic: 'person',
      headingSuffix: 'behind it.',
      metaRight: ['Kochi, India · IST', 'Open to freelance & select roles.'],
      copyHeading: 'Four years of mobile —',
      copyHeadingItalic: 'getting more particular every year.',
      currentlyLabels: { now: 'Now', stack: 'Stack', reach: 'Reach' },
      buttons: { fullStory: 'Full story', downloadResume: 'Download résumé' },
    },
    links: {
      eyebrow: 'F · 04 / Elsewhere',
      heading: 'Where I',
      headingItalic: 'live',
      headingSuffix: 'online.',
      metaRight: ['Pick a channel —', 'I read everything.'],
      socialColTitle: 'Social & Direct',
      projectColTitle: 'Project Channels',
    },
    closer: {
      eyebrow: '— Get in touch · F · 05 —',
      heading: "Let's build\nsomething",
      headingItalic: 'amazing.',
    },
  },

  projects: {
    pageEyebrow: 'F · Index / All projects',
    pageHeading: 'All',
    pageHeadingItalic: 'projects.',
    metaRightTemplate: ['{count} projects across {span} years —', 'newest first.'],
  },

  projectDetail: {
    overviewHeading: 'Overview',
    techStackHeading: 'Tech stack',
    keyContributionsHeading: 'Key contributions',
    galleryHeading: 'Gallery',
    nextProjectLabel: 'Next project →',
    builtAtPrefix: 'Built at',
    demoComingSoon: 'Demo coming soon',
    rolePrefix: 'Role',
    yearPrefix: 'Year',
    linksHeading: 'Links',
  },

  about: {
    pageEyebrow: 'F · About',
    pageHeading: 'The',
    pageHeadingItalic: 'long form.',
    bioHeading: 'Four years of mobile —',
    bioHeadingItalic: 'getting more particular every year.',
    experienceHeading: 'Experience',
    experienceItalic: 'in order.',
    skillsHeading: 'What I',
    skillsItalic: 'reach for.',
    resumeHeading: 'The',
    resumeItalic: 'résumé.',
    resumeBlurb: 'A static PDF, kept up to date by hand — easier for ATS tools and easier to share over email.',
  },

  buttons: {
    readCaseStudy: 'Read case study',
    seeAllProjects: 'See all projects',
    fullStory: 'Full story',
    downloadResume: 'Download résumé',
    visitLive: 'Live',
    visitRepo: 'Repo',
    watchDemo: 'Demo',
    backHome: '← Back to home',
  },

  meta: {
    home: {
      title: 'Abik Mathew George — Senior Software Engineer',
      description: 'Senior engineer and co-founder — building mobile and web products in Flutter, Swift, and Next.js. Portfolio v2.',
    },
    projects: {
      title: 'Projects — Abik Mathew George',
      description: 'Selected projects: iTechSIM, Mayflower, Z-ro, IconCal, and more.',
    },
    about: {
      title: 'About — Abik Mathew George',
      description: 'Four years of mobile, now building whole products. Co-founder & solo developer at iTechSIM. Open to freelance & select roles.',
    },
    notFound: {
      title: '404 — Abik Mathew George',
      description: 'Page not found.',
    },
  },

  notFound: {
    eyebrow: '404 / Not found',
    heading: 'You slipped',
    headingItalic: 'between pages.',
    blurb: 'The thing you were looking for has been moved, renamed, or never existed in the first place.',
    backHomeCta: '← Back to home',
  },

  hero: {
    nowLineArrow: '→',
  },

  footer: {
    copyrightTemplate: '© {year} Abik Mathew George · All rights reserved',
    setIn: 'Set in Playfair Display, Inter & JetBrains Mono',
    creditTemplate: 'Designed and built by AMG · {version} · {year}',
  },
} as const;

export type Copy = typeof copy;

export function fillTemplate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    key in vars ? String(vars[key]) : `{${key}}`,
  );
}
