import { Fragment, type ReactNode } from 'react';

type Part = string | { it: string };

interface SplitTitleProps {
  parts?: Part[];
  fallback: string;
  className?: string;
}

export default function SplitTitle({ parts, fallback, className }: SplitTitleProps): ReactNode {
  if (!parts || parts.length === 0) {
    return <span className={className}>{fallback}</span>;
  }
  return (
    <span className={className}>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          <Fragment key={i}>{part}</Fragment>
        ) : (
          <span className="it" key={i}>
            {part.it}
          </span>
        ),
      )}
    </span>
  );
}
