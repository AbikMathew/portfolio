import Image from 'next/image';
import { getAssetPath } from '@/lib/asset';
import { youtubePosterUrl } from '@/lib/youtube';
import type { ProjectMedia } from '@/types';

export default function Gallery({ items, alt }: { items: ProjectMedia[]; alt: string }) {
  if (!items.length) return null;
  return (
    <div className="gallery">
      {items.map((m, i) => {
        const src =
          m.kind === 'image'
            ? getAssetPath(m.src)
            : m.kind === 'video'
              ? m.poster ?? youtubePosterUrl(m.videoId)
              : null;
        return (
          <div className="tile" key={i}>
            {src ? (
              <Image src={src} alt={m.kind === 'image' ? m.alt : alt} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            ) : (
              <div className="placeholder" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {m.kind === 'placeholder' && m.label ? m.label : 'No preview'}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
