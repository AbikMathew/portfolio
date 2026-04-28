import { experience } from '@/data';

export default function ExperienceTimeline() {
  return (
    <div className="experience-list">
      {experience.map((exp) => (
        <article className="experience-item" key={exp.id} id={`experience-${exp.id}`}>
          <div className="period">
            {exp.period}
            <br />
            {exp.type}
          </div>
          <div>
            <h3 className="role">{exp.role}</h3>
            <div className="company">
              {exp.companyUrl ? (
                <a href={exp.companyUrl} target="_blank" rel="noreferrer" data-lens="link">
                  @{exp.company} ↗
                </a>
              ) : (
                <>@{exp.company}</>
              )}
            </div>
            <p className="description">{exp.description}</p>
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="highlights">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
