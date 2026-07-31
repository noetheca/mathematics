export function conceptIdFromEntryId(entryId: string, locale: string): string {
  const suffix = `/${locale}`;
  if (!entryId.endsWith(suffix)) {
    throw new Error(
      `Content entry "${entryId}" does not end with locale "${locale}".`,
    );
  }
  return entryId.slice(0, -suffix.length);
}

export function conceptRoute(locale: string, conceptId: string): string {
  return `${locale}/concepts/${conceptId}`;
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}/`;
}
