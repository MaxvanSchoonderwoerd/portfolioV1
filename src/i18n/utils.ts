import { ui, defaultLang } from "./ui";

export type Lang = keyof typeof ui;

/** Detect the active language from the URL pathname (e.g. /en/cv -> "en"). */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

type UIKey = keyof (typeof ui)[typeof defaultLang];

/** Returns a t(key) function bound to the given language, falling back to nl. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey | (string & {})): string {
    const dict = ui[lang] as Record<string, string>;
    const fallback = ui[defaultLang] as Record<string, string>;
    return dict[key] ?? fallback[key] ?? key;
  };
}

/**
 * Build a locale-aware path. Dutch (default) has no prefix; English is /en/...
 * localizePath("/cv", "en") -> "/en/cv" ; localizePath("/cv", "nl") -> "/cv"
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = "/" + path.replace(/^\/+/, "");
  if (lang === defaultLang) return clean === "/" ? "/" : clean;
  return clean === "/" ? "/en" : `/en${clean}`;
}

/**
 * Given the current URL, return the equivalent path in the other language.
 * Used by the language switcher.
 */
export function getAlternatePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  let path = url.pathname;
  // Strip the current language prefix to get the bare path.
  if (current !== defaultLang) {
    path = path.replace(new RegExp(`^/${current}`), "") || "/";
  }
  return localizePath(path, target);
}
