export interface SiteLanguageOption {
  id: string;
  label: string;
  locale: string;
  href?: string;
}

export const siteLanguages: readonly SiteLanguageOption[] = [
  {
    id: "JP",
    label: "日本語",
    locale: "ja",
  },
  {
    id: "EN",
    label: "English",
    locale: "en",
  },
];

interface ArticleStrings {
  relationsLabel: string;
  prerequisites: string;
  related: string;
  noRelations: string;
  sources: string;
  sourcesPending: string;
  reportIssue: string;
}

const articleStringsByLocale: Record<string, ArticleStrings> = {
  ja: {
    relationsLabel: "知識の関係",
    prerequisites: "前提知識",
    related: "関連知識",
    noRelations: "登録されていません",
    sources: "出典・確認元",
    sourcesPending: "公開前に確認元を追加する必要があります。",
    reportIssue: "問題を報告",
  },
  en: {
    relationsLabel: "Knowledge relationships",
    prerequisites: "Prerequisites",
    related: "Related knowledge",
    noRelations: "None registered",
    sources: "Sources and verification",
    sourcesPending: "Sources must be added before publication.",
    reportIssue: "Report an issue",
  },
};

export function getArticleStrings(locale: string): ArticleStrings {
  return articleStringsByLocale[locale] ?? articleStringsByLocale.en!;
}
