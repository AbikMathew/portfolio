import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'z-ro',
    num: '01',
    title: 'Z-ro',
    year: '2026',
    role: 'Creator',
    category: 'AI · Desktop · Rust',
    summary:
      'A Rust + Tauri AI co-worker that lives on your desktop — surfaces context, drafts work, and stays out of the way until you ask.',
    longDescription: [
      'Z-ro is an experiment in what an AI co-worker should feel like when it has a permanent seat on your desktop instead of a tab in your browser. Native, fast, and quiet.',
      'Built on Rust + Tauri for a small footprint and direct OS integration. The UI layer is pragmatic web tech, the surface is calm, and the heavy lifting happens in the background.',
    ],
    stack: ['Rust', 'Tauri', 'TypeScript', 'AI'],
    contributions: [
      'Designed and implemented the desktop architecture in Rust + Tauri',
      'Built the lightweight UI surface and hotkey layer',
      'Integrated AI providers behind a single calm interaction surface',
    ],
    hero: { kind: 'video', provider: 'youtube', videoId: 'FS2_wboDtZ4' },
    links: { demo: 'https://youtu.be/FS2_wboDtZ4' },
    spotlight: true,
    featured: true,
    spotlightTagline: '— a co-worker that lives on your desktop.',
  },
  {
    slug: 'flashbuild',
    num: '02',
    title: 'FlashBuild',
    year: '2026',
    role: 'Creator',
    category: 'AI · Web · Next.js',
    summary:
      'An AI app builder — describe an idea, get a runnable Next.js project. Iteration loop optimised for getting from prompt to working preview as fast as possible.',
    longDescription: [
      'FlashBuild compresses the distance between idea and running app. Type what you want, watch the project scaffold itself, and iterate via natural language.',
      'Built on Next.js with a streaming code-generation pipeline and a live preview surface that updates as the model writes.',
    ],
    stack: ['Next.js', 'TypeScript', 'AI', 'Streaming'],
    contributions: [
      'Designed the prompt-to-preview pipeline',
      'Built the streaming code-generation surface',
      'Wired live preview with hot-reload semantics',
    ],
    hero: { kind: 'placeholder', label: 'Demo coming soon' },
    links: {},
    featured: true,
  },
  {
    slug: 'iconcal',
    num: '03',
    title: 'IconCal',
    year: '2025',
    role: 'Lead Engineer',
    category: 'Productivity · iOS / Android',
    summary:
      'A calendar built around the emotional weight of icons. Two-way sync with Apple and Google calendars, native-feeling on every surface.',
    longDescription: [
      'IconCal treats the calendar as a deeply personal surface. Custom emoji per event, real two-way sync with Apple EventKit and Google Calendar, and a calm interface that hides the complexity of recurring events and time zones.',
      'I led the rewrite of the sync layer — Apple EventKit + Google Calendar API merged through a single conflict-aware reducer. Recurring events, time zones, the inbox of edge cases — all of it lives behind one calm interface.',
    ],
    stack: ['Flutter', 'Riverpod', 'EventKit', 'Google Calendar API', 'Clean Arch'],
    contributions: [
      'Implemented two-way sync with Apple Calendar using native EventKit APIs',
      'Integrated Google Calendar syncing via Google Calendar APIs',
      'Added calendar selection controls for selective syncing',
      'Resolved complex recurring event, timezone, and sync consistency issues',
      'Improved scrolling performance and overall UX smoothness',
      'Enhanced custom emoji saving, restoring, and rendering logic',
    ],
    hero: { kind: 'image', src: '/assets/iconcal.png', alt: 'IconCal app mockup' },
    links: {},
    featured: true,
  },
  {
    slug: 'couplr',
    num: '04',
    title: 'Couplr / Firstlook',
    titleParts: ['Couplr ', { it: '/ Firstlook' }],
    year: '2024',
    role: 'Mobile Lead',
    atCompany: 'mcabee-tl',
    category: 'Social · Dating',
    summary:
      'Social platform for singles. Feed, stories, chat, proposals, payments, identity. Scaled to 50K+ downloads.',
    longDescription: [
      'Couplr (rebranded as Firstlook) is a social platform built for singles — feed, stories, chat, proposals, subscriptions, and identity verification. I owned mobile end-to-end as it scaled past 50K downloads on the Play Store.',
      'The work spanned product, architecture, and the unglamorous parts: payments, analytics, ML-driven recommendations, and the long tail of edge cases that come with a real user base.',
    ],
    stack: ['Flutter', 'Bloc', 'Firebase', 'Stripe'],
    contributions: [
      'Built and scaled features including feed, chat, stories, proposals, and subscription',
      'Integrated payments, analytics, and identity verification',
      'Collaborated on ML-driven recommendation systems',
      'Achieved 50K+ downloads on Play Store',
      'Played a key role in shaping product architecture and user experience',
    ],
    hero: { kind: 'image', src: '/assets/couplr.png', alt: 'Couplr / Firstlook app mockup' },
    links: {},
    featured: true,
  },
  {
    slug: 'mcabee-platform',
    num: '05',
    title: 'Mcabee Platform',
    year: '2024',
    role: 'SDE II / Team Lead',
    atCompany: 'mcabee-tl',
    category: 'Mobile · Social',
    summary:
      'Owned end-to-end delivery of mobile features. Mentored juniors, shaped product direction, partnered with ML.',
    longDescription: [
      'Beyond Couplr, the broader Mcabee platform involved internal tools, admin surfaces, and the connective tissue between product, engineering, and ML. I led mobile across the surface area.',
    ],
    stack: ['Flutter', 'Bloc', 'Firebase'],
    contributions: [
      'Owned mobile delivery across multiple product surfaces',
      'Mentored a team of three engineers',
      'Shaped product direction in close partnership with design and ML',
    ],
    hero: { kind: 'image', src: '/assets/mcabee.jpg', alt: 'Mcabee team' },
    links: {},
    featured: true,
  },
  {
    slug: 'ogma-ios',
    num: '06',
    title: 'Native iOS Migration',
    year: '2025',
    role: 'Senior Engineer',
    atCompany: 'ogma',
    category: 'Mobile · iOS / SwiftUI',
    summary:
      'Leading the architectural shift from Flutter to native SwiftUI for select client products.',
    longDescription: [
      'Some products earn their keep on a single platform. For those, I am leading the migration to native SwiftUI — porting architecture, recreating gesture and motion details, and building a Swift-first muscle on the team.',
    ],
    stack: ['Swift', 'SwiftUI', 'Combine'],
    contributions: [
      'Authored the migration playbook from Flutter to SwiftUI',
      'Recreated gesture and motion details that mattered to feel',
      'Levelled up the team on Swift fundamentals and architecture',
    ],
    hero: { kind: 'image', src: '/assets/ogma.jpg', alt: 'Ogma setup' },
    links: {},
    featured: true,
  },
  {
    slug: 'wrg-suite',
    num: '07',
    title: 'WRG Internal Suite',
    year: '2023',
    role: 'Engineer',
    atCompany: 'wrg',
    category: 'Productivity · Tools',
    summary:
      'Bug tracker, time tracker, FFMPEG-based animation tool, and VPN buddy — a quiet productivity layer for an agency.',
    longDescription: [
      'A small constellation of tools that an agency runs on every day. The kind of work nobody photographs but everybody relies on.',
    ],
    stack: ['Flutter Desktop', 'Teamwork API', 'FFMPEG'],
    contributions: [
      'Bug tracker with media uploads',
      'Cross-platform time tracker on the Teamwork API',
      'FFMPEG-based animation/media generation tool',
    ],
    hero: { kind: 'image', src: '/assets/wrg.jpg', alt: 'White Rabbit kit' },
    links: {},
    featured: false,
  },
  {
    slug: 'vpn-buddy',
    num: '08',
    title: 'VPN Buddy',
    year: '2023',
    role: 'Engineer',
    atCompany: 'wrg',
    category: 'Utility · Desktop',
    summary:
      'A quiet desktop utility for VPN monitoring with native notifications and connection alerts.',
    longDescription: [
      'A tiny tool that does one thing well — keeps an eye on the VPN and tells you, calmly, when something is off. The kind of small utility I keep around because the alternatives are louder than they need to be.',
    ],
    stack: ['Flutter Desktop', 'Native APIs'],
    contributions: [
      'Built native notification + connection-state detection',
      'Designed a UI that shows up only when it has something to say',
    ],
    hero: { kind: 'placeholder', label: 'No preview yet' },
    links: {},
    featured: false,
  },
];

const spotlights = projects.filter((p) => p.spotlight);
if (process.env.NODE_ENV !== 'production' && spotlights.length !== 1) {
  console.warn(
    `[projects.ts] Exactly one project must have spotlight: true. Found ${spotlights.length}.`,
  );
}
