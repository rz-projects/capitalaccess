const base = import.meta.env.BASE_URL;

export function url(path: string): string {
  if (path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) return path;
  if (path === '/') return base || '/';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`.replace(/\/+/g, '/');
}
