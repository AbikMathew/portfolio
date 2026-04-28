import Image from 'next/image';
import { getAssetPath } from '@/lib/asset';
import { youtubePosterUrl } from '@/lib/youtube';
import type { Project } from '@/types';

interface PeekPanelProps {
  project: Project;
  x: number;
  y: number;
  position?: 'absolute' | 'fixed';
}

const ASPECT_DIMS: Record<NonNullable<Project['thumbAspect']>, { w: number; h: number }> = {
  wide: { w: 320, h: 200 },
  square: { w: 240, h: 240 },
};

function thumbSrc(project: Project) {
  const media = project.thumb ?? project.hero;
  if (media.kind === 'image') return { src: getAssetPath(media.src), isVideo: false };
  if (media.kind === 'video') {
    return { src: media.poster ?? youtubePosterUrl(media.videoId), isVideo: true };
  }
  return { src: null as string | null, isVideo: false };
}

export default function PeekPanel({ project, x, y, position = 'absolute' }: PeekPanelProps) {
  const aspect = project.thumbAspect ?? 'wide';
  const dims = ASPECT_DIMS[aspect];
  const { src, isVideo } = thumbSrc(project);
  const hasSolidBg = !!project.thumbBackground;

  return (
    <div
      className="peek show"
      style={{
        left: x,
        top: y,
        position,
        width: dims.w,
        height: dims.h,
        background: project.thumbBackground,
      }}
    >
      {isVideo && <span className="video-icon">▶ Video</span>}
      {src ? (
        <>
          {!hasSolidBg && (
            <Image
              src={src}
              alt=""
              aria-hidden
              fill
              sizes={`${dims.w}px`}
              style={{
                objectFit: 'cover',
                filter: 'blur(28px) saturate(0.85) brightness(0.55)',
                transform: 'scale(1.18)',
                zIndex: 0,
              }}
            />
          )}
          <Image
            src={src}
            alt={project.title}
            fill
            sizes={`${dims.w}px`}
            style={{ objectFit: 'contain', zIndex: 1, padding: aspect === 'square' ? 16 : 0 }}
          />
        </>
      ) : (
        <div className="placeholder">No preview yet</div>
      )}
    </div>
  );
}
