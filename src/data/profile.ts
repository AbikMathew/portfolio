import type { Profile } from '@/types';

export const profile: Profile = {
  name: 'Abik Mathew George',
  shortName: 'AMG',
  tagline:
    'A senior engineer building mobile software for the past four years — mostly in Flutter, increasingly in Swift. I care about the seam between architecture and the way an app feels in the hand.',
  location: 'Kochi, India · IST',
  timezone: 'Asia/Kolkata',
  bio: [
    'I started in a fast-moving Kerala agency, learned what production really means at a startup that scaled past 50K downloads, and now lead Flutter and native iOS work for US-based product teams.',
    'The work I am most proud of lives in the seam between architecture and feel: clean separation underneath, calm gestures on top. I keep a small suite of internal tools running in the background — bug tracking, time, media — because good systems make good apps.',
  ],
  status: {
    label: 'Open to senior roles · 2026',
    tone: 'open',
  },
  contact: {
    email: 'abkmg100@gmail.com',
    phone: '+91 8111 905 637',
  },
  meta: {
    titles: [
      'Senior Software Engineer',
      'Mobile · Flutter · iOS',
      'Portfolio v2 — 2026',
    ],
  },
  currently: {
    now: 'Senior Frontend Engineer (Flutter) at Ogma Conceptions',
    nowShort: 'Now leading mobile @ Ogma Conceptions',
    nowLink: { label: 'Ogma Conceptions', url: 'https://www.ogmaconceptions.com/' },
    stack: 'Flutter · Dart · Swift / SwiftUI · Firebase · AWS',
  },
};
