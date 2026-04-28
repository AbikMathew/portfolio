'use client';

import { useState } from 'react';
import { youtubeEmbedUrl, youtubePosterUrl } from '@/lib/youtube';

interface VideoEmbedProps {
  videoId: string;
  poster?: string;
  title?: string;
}

export default function VideoEmbed({ videoId, poster, title }: VideoEmbedProps) {
  const [activated, setActivated] = useState(false);
  const posterSrc = poster ?? youtubePosterUrl(videoId);

  if (activated) {
    return (
      <iframe
        className="lite-yt"
        src={youtubeEmbedUrl(videoId, { autoplay: true })}
        title={title ?? 'YouTube video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className="lite-yt"
      onClick={() => setActivated(true)}
      aria-label={`Play video${title ? `: ${title}` : ''}`}
      data-lens="link"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="poster" src={posterSrc} alt={title ?? 'Video poster'} />
      <span className="play-button" aria-hidden />
    </button>
  );
}
