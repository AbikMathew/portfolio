import type { Experience } from '@/types';

export const experience: Experience[] = [
  {
    id: 'ogma',
    company: 'Ogma Conceptions',
    companyUrl: 'https://www.ogmaconceptions.com/',
    role: 'Senior Frontend Developer (Flutter)',
    period: 'Jul 2025 — Present',
    type: 'Remote',
    description:
      'Leading Flutter-based mobile and web application development for US-based clients. Driving architectural decisions and expanding into native iOS.',
    current: true,
  },
  {
    id: 'mcabee-tl',
    company: 'Mcabee',
    companyUrl: 'https://in.linkedin.com/company/mcabee-digital',
    role: 'SDE II / Team Lead',
    period: 'Nov 2023 — Jun 2025',
    type: 'Remote',
    description:
      'Led mobile development for a product-based startup. Owned end-to-end delivery of a social media app for singles. Mentored juniors and shaped product direction.',
    highlights: [
      'Scaled a Flutter codebase from MVP to 50K+ downloads',
      'Mentored a team of three engineers across mobile and web',
      'Partnered with ML on the recommendation pipeline and identity verification',
    ],
  },
  {
    id: 'mcabee-sde1',
    company: 'Mcabee',
    companyUrl: 'https://in.linkedin.com/company/mcabee-digital',
    role: 'SDE I',
    period: 'Jul 2023 — Nov 2023',
    type: 'Hybrid · Kochi',
    description:
      'Built core application features from scratch. Collaborated with cross-functional teams including backend, ML, and design.',
  },
  {
    id: 'wrg',
    company: 'White Rabbit',
    companyUrl: 'https://whiterabbit.group/',
    role: 'Trainee Software Engineer',
    period: 'Aug 2022 — Jun 2023',
    type: 'Infopark, Kochi',
    description:
      'Worked on multiple internal and client-facing Flutter projects. Gained strong fundamentals in Dart, Flutter SDK, and app architecture.',
    highlights: [
      'Shipped an internal bug tracker, time tracker, and FFMPEG-based animation tool',
      'Built VPN Buddy — a quiet desktop utility for VPN monitoring',
    ],
  },
];
