import { copy } from '@/data';
import Button from '@/components/ui/Button';
import SideRail from '@/components/chrome/SideRail';

export const metadata = {
  title: copy.meta.notFound.title,
  description: copy.meta.notFound.description,
};

export default function NotFound() {
  return (
    <>
      <SideRail />
      <main>
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div className="wrap" style={{ textAlign: 'center', display: 'grid', gap: 24, placeItems: 'center' }}>
            <span className="eyebrow">{copy.notFound.eyebrow}</span>
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(48px, 9vw, 120px)',
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              {copy.notFound.heading}{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--fg-mute)' }}>
                {copy.notFound.headingItalic}
              </span>
            </h1>
            <p
              style={{
                color: 'var(--fg-secondary)',
                fontSize: 17,
                maxWidth: '48ch',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {copy.notFound.blurb}
            </p>
            <Button href="/" arrow="→">
              {copy.notFound.backHomeCta}
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
