import type { Experience } from '@/types';

export const experience: Experience[] = [
  {
    id: 'itechsim',
    company: 'iTechSIM',
    companyUrl: 'https://www.itechsim.com',
    role: 'Co-Founder & Solo Developer',
    period: 'Mar 2026 — Present',
    type: 'Remote · Australian venture',
    description:
      'Co-founded iTechSIM, an Australian travel-eSIM venture, and now build the whole product myself — design, engineering, and shipping — while collaborating with the founding team on direction and go-to-market. Four years of mobile and web work, poured into one product.',
    highlights: [
      'Co-founded the venture and built the product end-to-end: storefront, checkout, eSIM fulfilment, and admin tooling',
      'AI-native workflow — design in Claude, implement in Claude Code — shipping features one at a time',
      'A working MVP went live in a week; a marketing-ready feature set followed within three',
      'Integrated Stripe and PayPal payment rails with automated eSIM delivery and refunds',
      'Drove marketing content and launch strategy alongside the founding team',
      'Set the product roadmap and growth plan with the founding team',
    ],
    current: true,
  },
  {
    id: 'ogma',
    company: 'Ogma Conceptions',
    companyUrl: 'https://www.ogmaconceptions.com/',
    role: 'Senior Frontend Developer (Flutter)',
    period: 'Jul 2025 — Mar 2026',
    type: 'Remote · Distributed (Philippines · China · US)',
    description:
      'Led Flutter mobile and web development for US clients, with rapid AI-assisted prototyping to ship things quickly. Worked across a distributed team spanning the Philippines, China, and the US.',
    highlights: [
      'Shipped 7+ client projects, including ones that needed unusually fast turnarounds',
      'Used AI-assisted prototyping to compress idea-to-demo cycles for clients',
      'Closed tickets that had been stuck open for months — turning unhappy clients into satisfied ones',
      'Strong async + cross-timezone communication across a four-continent team',
    ],
  },
  {
    id: 'mcabee-tl',
    company: 'Mcabee',
    companyUrl: 'https://www.mcabee.in/',
    role: 'SDE II / Team Lead',
    period: 'Nov 2023 — Jun 2025',
    type: 'Remote',
    description:
      'Core team member at a 5-person product startup. Led mobile development for Couplr (formerly Firstlook), a social media platform for singles. Took ownership of the codebase, mentored juniors, and shaped the product direction alongside the founder.',
    highlights: [
      'Led mobile dev: feeds, chat, posts, sign-ups, stories, proposals, subscriptions',
      'Integrated payments, Cloudflare streaming, sockets, and Firebase backend services',
      'Mentored junior developers and ran code reviews to maintain coding standards',
      'Owned app releases and store deployments end-to-end',
      'Resolved production issues and optimised performance for a smoother UX',
      'Set up workflow tooling — GitHub, Notion, ClickUp, Slack — to keep the team aligned',
      'Cross-functional work: hiring, interviews, and shaping company strategy',
      'Helped shape the long-term vision across quick commerce, video streaming, and social',
    ],
    images: [
      '/assets/experience/mcabee-tl/couplr-team-meet.jpg',
      '/assets/experience/mcabee-tl/solo-dev-day.jpg',
      '/assets/experience/mcabee-tl/dev-on-mac.jpg',
      '/assets/experience/mcabee-tl/dev-on-mac-2.jpg',
      '/assets/experience/mcabee-tl/bangalore-investor-pitch.jpg',
      '/assets/experience/mcabee-tl/id-card.jpg',
    ],
  },
  {
    id: 'mcabee-sde1',
    company: 'Mcabee',
    companyUrl: 'https://www.mcabee.in/',
    role: 'SDE I',
    period: 'Jul 2023 — Nov 2023',
    type: 'Hybrid · Kochi',
    description:
      'Joined Mcabee as the second engineer on the mobile team. Built core features of Firstlook (later rebranded as Couplr) from scratch — feeds, chat, posts — collaborating closely with backend, ML, and design.',
    images: [
      '/assets/experience/mcabee-sde1/first-team-meeting.jpg',
      '/assets/experience/mcabee-sde1/home-work-setup.jpg',
      '/assets/experience/mcabee-sde1/team-lunch.jpg',
      '/assets/experience/mcabee-sde1/collaboration.jpg',
    ],
  },
  {
    id: 'wrg',
    company: 'White Rabbit',
    companyUrl: 'https://whiterabbit.group/',
    role: 'Trainee Software Engineer',
    period: 'Aug 2022 — Jun 2023',
    type: 'Infopark, Kochi',
    description:
      'Started here as a Flutter trainee and shipped real projects almost from week one. Worked on internal tools and client-facing apps, picking up Dart, Flutter SDK, and app architecture fundamentals.',
    highlights: [
      'Shipped an internal bug tracker, time tracker, and FFMPEG-based animation tool',
      'Built VPN Buddy — a quiet desktop utility for VPN monitoring',
      'Learned production discipline: code reviews, releases, debugging at scale',
    ],
    images: [
      '/assets/experience/wrg/first-day.jpg',
      '/assets/experience/wrg/office-front.jpg',
      '/assets/experience/wrg/onboarding-desk.jpg',
      '/assets/experience/wrg/office-desk.jpg',
      '/assets/experience/wrg/office-desk-2.jpg',
      '/assets/experience/wrg/patio.jpg',
      '/assets/experience/wrg/building-2.jpg',
      '/assets/experience/wrg/id-card.jpg',
    ],
  },
];
