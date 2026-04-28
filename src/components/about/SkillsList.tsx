import { Fragment } from 'react';
import { skills } from '@/data';

export default function SkillsList() {
  return (
    <div className="skills-list">
      {skills.map((g) => (
        <div className="group" key={g.category}>
          <span className="label">{g.category}</span>
          <div className="items">
            {g.items.map((item, i) => (
              <Fragment key={item}>
                <span>{item}</span>
                {i < g.items.length - 1 && <span className="sep">·</span>}
              </Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
