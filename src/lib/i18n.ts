export type Lang = "en" | "zh";

export type BiText = { en: string; zh: string };

/** Resolve a string or bilingual object to the correct language. */
export function t(text: string | BiText, lang: Lang): string {
  if (typeof text === "string") return text;
  return text[lang];
}
