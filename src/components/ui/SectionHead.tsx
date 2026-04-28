import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadProps {
  num: string;
  heading: ReactNode;
  metaRight?: string[];
  metaRightContent?: ReactNode;
}

export default function SectionHead({ num, heading, metaRight, metaRightContent }: SectionHeadProps) {
  return (
    <Reveal className="section-head">
      <div>
        <span className="num">{num}</span>
        <h2>{heading}</h2>
      </div>
      {(metaRight || metaRightContent) && (
        <div className="meta-right">
          {metaRightContent ?? metaRight?.map((line, i) => <div key={i}>{line}</div>)}
        </div>
      )}
    </Reveal>
  );
}
