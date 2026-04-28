import Image from 'next/image';
import { copy, profile } from '@/data';
import { getAssetPath } from '@/lib/asset';
import SideRail from '@/components/chrome/SideRail';
import SectionHead from '@/components/ui/SectionHead';
import Reveal from '@/components/ui/Reveal';
import ExperienceTimeline from '@/components/about/ExperienceTimeline';
import SkillsList from '@/components/about/SkillsList';
import ResumeButton from '@/components/about/ResumeButton';

export const metadata = {
  title: copy.meta.about.title,
  description: copy.meta.about.description,
};

export default function AboutPage() {
  return (
    <>
      <SideRail />
      <main>
        <section style={{ paddingTop: 140 }}>
          <div className="wrap">
            <SectionHead
              num={copy.about.pageEyebrow}
              heading={
                <>
                  {copy.about.pageHeading}{' '}
                  <span className="it">{copy.about.pageHeadingItalic}</span>
                </>
              }
              metaRight={[profile.location, 'Open to senior IC + lead roles.']}
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
                  {copy.about.bioHeading}
                  <br />
                  <span className="it">{copy.about.bioHeadingItalic}</span>
                </h3>
                {profile.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <div className="currently">
                  <span className="label">Now</span>
                  <span className="value">
                    {profile.currently.nowLink ? (
                      <>
                        Senior Frontend Engineer (Flutter) at{' '}
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
                  <span className="label">Stack</span>
                  <span className="value">{profile.currently.stack}</span>
                  <span className="label">Reach</span>
                  <span className="value">
                    <a href={`mailto:${profile.contact.email}`} data-lens="link">
                      {profile.contact.email}
                    </a>
                    {profile.contact.phone && (
                      <>
                        {' · '}
                        <a href={`tel:${profile.contact.phone.replace(/\s+/g, '')}`} data-lens="link">
                          {profile.contact.phone}
                        </a>
                      </>
                    )}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <SectionHead
              num="F · Experience"
              heading={
                <>
                  {copy.about.experienceHeading}{' '}
                  <span className="it">{copy.about.experienceItalic}</span>
                </>
              }
            />
            <ExperienceTimeline />
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <SectionHead
              num="F · Stack"
              heading={
                <>
                  {copy.about.skillsHeading}{' '}
                  <span className="it">{copy.about.skillsItalic}</span>
                </>
              }
            />
            <SkillsList />
          </div>
        </section>

        <section id="resume">
          <div className="wrap">
            <SectionHead
              num="F · Resume"
              heading={
                <>
                  {copy.about.resumeHeading}{' '}
                  <span className="it">{copy.about.resumeItalic}</span>
                </>
              }
            />
            <Reveal>
              <p
                style={{
                  fontSize: 17,
                  color: 'var(--fg-secondary)',
                  maxWidth: '60ch',
                  marginBottom: 32,
                  lineHeight: 1.7,
                }}
              >
                {copy.about.resumeBlurb}
              </p>
              <ResumeButton />
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
