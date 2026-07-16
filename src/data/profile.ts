import type { Profile } from '@/types';

export const profile: Profile = {
  name: 'Abik Mathew George',
  shortName: 'AMG',
  tagline:
    'A senior engineer building software for the past four years — Flutter and Swift on mobile, now Next.js on the web too. I care about the seam between architecture and the way a product feels to use — lately as co-founder of iTechSIM, where I build the whole thing myself.',
  location: 'Kochi, India · IST',
  timezone: 'Asia/Kolkata',
  bio: [
    'I started in a fast-moving Kerala agency, learned what production really means at a startup that scaled past 50K downloads, led Flutter and native iOS work for US product teams, and now build whole products as co-founder of iTechSIM.',
    'The work I am most proud of lives in the seam between architecture and feel: clean separation underneath, calm gestures on top. These days I take products from a blank Figma to a live URL solo — design, engineering, and the operations tooling behind them — because good systems make good products.',
  ],
  status: {
    label: 'Co-founder @ iTechSIM · open to work',
    tone: 'open',
  },
  contact: {
    email: 'abkmg100@gmail.com',
    phone: '+91 8111 905 637',
  },
  meta: {
    titles: [
      'Senior Software Engineer',
      'Mobile · Full-stack · Co-founder',
      'Portfolio v2 — 2026',
    ],
  },
  currently: {
    now: 'Co-Founder & Solo Developer',
    nowShort: 'Now co-founding & building iTechSIM',
    nowLink: { label: 'iTechSIM', url: 'https://www.itechsim.com' },
    stack: 'Flutter · Next.js · TypeScript · Supabase · Swift',
  },
};
