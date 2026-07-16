import Image from 'next/image';
import { profile, copy, site } from '@/data';
import { getAssetPath } from '@/lib/asset';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHead from '@/components/ui/SectionHead';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead
          num={copy.home.about.eyebrow}
          heading={
            <>
              {copy.home.about.heading}{' '}
              <span className="it">{copy.home.about.headingItalic}</span>{' '}
              {copy.home.about.headingSuffix}
            </>
          }
          metaRight={[...copy.home.about.metaRight]}
        />

        <div className="about">
          <Reveal className="portrait" data-lens="hover">
            <Image
              src={getAssetPath('/assets/profile.png')}
              alt={profile.name}
              fill
              sizes="(max-width: 900px) 280px, 480px"
              style={{ objectFit: 'cover' }}
            />
          </Reveal>
          <Reveal className="copy" delay={1}>
            <h3>
              {copy.home.about.copyHeading}
              <br />
              <span className="it">{copy.home.about.copyHeadingItalic}</span>
            </h3>
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="currently">
              <span className="label">{copy.home.about.currentlyLabels.now}</span>
              <span className="value">
                {profile.currently.nowLink ? (
                  <>
                    {profile.currently.now} at{' '}
                    <a
                      href={profile.currently.nowLink.url}
                      target="_blank"
                      rel="noreferrer"
                      data-lens="link"
                    >
                      {profile.currently.nowLink.label}
                    </a>
                  </>
                ) : (
                  profile.currently.now
                )}
              </span>
              <span className="label">{copy.home.about.currentlyLabels.stack}</span>
              <span className="value">{profile.currently.stack}</span>
              <span className="label">{copy.home.about.currentlyLabels.reach}</span>
              <span className="value">
                <a href={`mailto:${profile.contact.email}`} data-lens="link">
                  {profile.contact.email}
                </a>
              </span>
            </div>

            <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Button href="/about" arrow="→" shimmer>
                {copy.home.about.buttons.fullStory}
              </Button>
              <Button
                href={getAssetPath(site.resumePath)}
                arrow="↓"
                variant="quiet"
                download={site.resumeFilename}
              >
                {copy.home.about.buttons.downloadResume}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
