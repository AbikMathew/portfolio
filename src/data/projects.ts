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
      'Built the lightweight UI surface and global hotkey layer',
      'Integrated AI providers behind a single calm interaction surface',
    ],
    hero: { kind: 'video', provider: 'youtube', videoId: 'FS2_wboDtZ4' },
    links: {
      demo: 'https://youtu.be/FS2_wboDtZ4',
      repo: 'https://github.com/AbikMathew/z-ro-coworker',
    },
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
    hero: {
      kind: 'image',
      src: '/assets/projects/flashbuild/screen.png',
      alt: 'FlashBuild app builder UI',
    },
    thumb: {
      kind: 'image',
      src: '/assets/projects/flashbuild/screen.png',
      alt: 'FlashBuild app builder UI',
    },
    thumbAspect: 'wide',
    gallery: [
      { kind: 'image', src: '/assets/projects/flashbuild/screen.png', alt: 'FlashBuild main screen' },
      { kind: 'image', src: '/assets/projects/flashbuild/settings.png', alt: 'FlashBuild settings' },
    ],
    links: {
      repo: 'https://github.com/AbikMathew/flash-build',
    },
    featured: true,
  },
  {
    slug: 'iconcal',
    num: '03',
    title: 'IconCal',
    year: '2025',
    role: 'Lead Engineer',
    atCompany: 'ogma',
    category: 'Productivity · iOS / Android',
    summary:
      'A calendar built around the emotional weight of icons. Two-way sync with Apple and Google calendars, native-feeling on every surface.',
    longDescription: [
      'IconCal treats the calendar as a deeply personal surface. Custom emoji per event, real two-way sync with Apple EventKit and Google Calendar, and a calm interface that hides the complexity of recurring events and time zones.',
      'I led the rewrite of the sync layer — Apple EventKit + Google Calendar API merged through a single conflict-aware reducer. Recurring events, time zones, the inbox of edge cases — all of it lives behind one calm interface.',
      'On the platform side, I authored native iOS and Android channels in Swift and Kotlin to bring functionality that pure Flutter packages couldn\'t reach — calendar sync via EventKit and Google APIs, native notifications, background services, and location.',
    ],
    stack: ['Flutter', 'Riverpod', 'Swift', 'Kotlin', 'EventKit', 'Google Calendar API'],
    contributions: [
      'Implemented two-way sync with Apple Calendar via native EventKit channels in Swift',
      'Integrated Google Calendar via the Google Calendar API on a Kotlin native channel',
      'Authored native iOS/Android channels for notifications, background, and location services',
      'Resolved complex recurring event, time-zone, and sync-consistency edge cases',
      'Built calendar selection controls so users sync only the calendars they want',
      'Improved scrolling performance and overall UX smoothness across the app',
      'Designed the custom emoji save/restore/render pipeline',
    ],
    hero: {
      kind: 'image',
      src: '/assets/projects/iconcal/month-view-light.png',
      alt: 'IconCal month view',
    },
    thumb: {
      kind: 'image',
      src: '/assets/projects/iconcal/logo.png',
      alt: 'IconCal logo',
    },
    thumbAspect: 'square',
    gallery: [
      { kind: 'image', src: '/assets/projects/iconcal/month-view-light.png', alt: 'IconCal month view (light)' },
      { kind: 'image', src: '/assets/projects/iconcal/icons-toolbox.jpg', alt: 'IconCal icons toolbox' },
      { kind: 'image', src: '/assets/projects/iconcal/icons-toolbox-bottomsheet.jpg', alt: 'IconCal icons bottom sheet' },
      { kind: 'image', src: '/assets/projects/iconcal/notifications.jpg', alt: 'IconCal notifications screen' },
      { kind: 'image', src: '/assets/projects/iconcal/settings.jpg', alt: 'IconCal settings' },
      { kind: 'image', src: '/assets/projects/iconcal/splash.jpg', alt: 'IconCal splash' },
    ],
    links: {
      live: 'https://play.google.com/store/apps/details?id=com.iconcal.app',
    },
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
      'Social media platform for singles. Owned mobile end-to-end as it scaled past 50K downloads. Started life as Firstlook and got revamped into Couplr.',
    longDescription: [
      'Joined Mcabee as the second mobile engineer and grew into the lead role. Took ownership of Firstlook from a four-month-old codebase, and through the rebrand to Couplr I owned mobile architecture and shipping end-to-end.',
      'The work spanned product, architecture, and the unglamorous parts: payments, Cloudflare streaming, sockets, identity verification, and ML-driven recommendations. With limited resources but a strong vision, I built and scaled features like feed, chat, stories, posts, proposals, and subscriptions, while mentoring juniors and shaping product direction with the founder.',
      'Beyond features, I handled production fires, optimised performance, ran releases on both stores, set up the team\'s workflow tooling, and contributed to hiring and company strategy.',
    ],
    stack: ['Flutter', 'Bloc', 'Firebase', 'Stripe', 'Cloudflare', 'Sockets'],
    contributions: [
      'Led mobile development for Firstlook → Couplr from second engineer through team lead',
      'Shipped feed, chat, stories, posts, proposals, subscriptions, and identity verification',
      'Integrated payments, Cloudflare streaming, sockets, and Firebase backend services',
      'Collaborated on ML-driven recommendation systems',
      'Owned releases and store deployments on both Play Store and App Store',
      'Mentored juniors, ran code reviews, kept coding standards high',
      'Set up GitHub, Notion, ClickUp, Slack as the team workflow stack',
      'Reached 50K+ downloads on Play Store',
    ],
    hero: {
      kind: 'image',
      src: '/assets/projects/couplr/explore-tab.jpg',
      alt: 'Couplr explore tab',
    },
    thumb: {
      kind: 'image',
      src: '/assets/projects/couplr/logo.webp',
      alt: 'Couplr logo',
    },
    thumbAspect: 'square',
    gallery: [
      { kind: 'image', src: '/assets/projects/couplr/create-account.jpg', alt: 'Couplr create account flow' },
      { kind: 'image', src: '/assets/projects/couplr/explore-tab.jpg', alt: 'Couplr explore tab' },
      { kind: 'image', src: '/assets/projects/couplr/firstlook-initial.jpg', alt: 'Firstlook — initial design phase' },
      { kind: 'image', src: '/assets/projects/couplr/app-store-rating.jpg', alt: 'Firstlook App Store rating' },
    ],
    links: {
      live: 'https://play.google.com/store/apps/details?id=com.mcabee.couplr',
    },
    featured: true,
  },
  {
    slug: 'wrg-suite',
    num: '05',
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
    hero: {
      kind: 'image',
      src: '/assets/projects/wrg-suite/logo.svg',
      alt: 'White Rabbit logo',
    },
    thumb: {
      kind: 'image',
      src: '/assets/projects/wrg-suite/logo.svg',
      alt: 'White Rabbit logo',
    },
    thumbAspect: 'square',
    thumbBackground: '#000',
    links: {},
    featured: true,
  },
  {
    slug: 'vpn-buddy',
    num: '06',
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
