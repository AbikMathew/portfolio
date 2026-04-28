const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio' : '';

export function getAssetPath(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const ASSET_BASE = basePath;
