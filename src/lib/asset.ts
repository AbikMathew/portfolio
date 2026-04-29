// Served from apex domain abik.in — no basePath prefix needed.
const basePath = '';

export function getAssetPath(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const ASSET_BASE = basePath;
