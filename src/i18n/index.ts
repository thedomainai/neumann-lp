export { ja, type Locale } from "./ja";
export { en } from "./en";

import { ja } from "./ja";
import { en } from "./en";

export const locales = {
  ja,
  en,
} as const;

export type LocaleKey = keyof typeof locales;
