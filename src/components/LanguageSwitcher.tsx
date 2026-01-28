"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => setLocale("ja")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "ja"
            ? "text-[var(--text-primary)] font-medium"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        JP
      </button>
      <span className="text-[var(--text-muted)]">/</span>
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-[var(--text-primary)] font-medium"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
