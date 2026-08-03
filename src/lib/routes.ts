export function conceptRoute(locale: string, conceptId: string): string {
  return `${locale}/concepts/${conceptId}`;
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = path.replace(/^\//, "").replace(/\/$/, "");
  return normalizedPath ? `${base}/${normalizedPath}/` : `${base}/`;
}
