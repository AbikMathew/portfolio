export function youtubeEmbedUrl(videoId: string, opts: { autoplay?: boolean } = {}): string {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  });
  if (opts.autoplay) params.set('autoplay', '1');
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function youtubePosterUrl(videoId: string, quality: 'maxres' | 'hq' = 'maxres'): string {
  const segment = quality === 'maxres' ? 'maxresdefault' : 'hqdefault';
  return `https://i.ytimg.com/vi/${videoId}/${segment}.jpg`;
}

export function youtubeWatchUrl(videoId: string): string {
  return `https://youtu.be/${videoId}`;
}
