import Image from 'next/image';
import { getAssetPath } from '@/lib/asset';
import { copy } from '@/data';
import VideoEmbed from './VideoEmbed';
import type { ProjectMedia } from '@/types';

export default function ProjectHero({ media, title }: { media: ProjectMedia; title: string }) {
  if (media.kind === 'video') {
    return (
      <div className="case-media">
        <VideoEmbed videoId={media.videoId} poster={media.poster} title={title} />
      </div>
    );
  }
  if (media.kind === 'image') {
    return (
      <div className="case-media">
        <Image
          src={getAssetPath(media.src)}
          alt={media.alt}
          fill
          sizes="(max-width: 900px) 100vw, 1200px"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    );
  }
  return (
    <div className="case-media">
      <div className="placeholder">{media.label ?? copy.projectDetail.demoComingSoon}</div>
    </div>
  );
}
