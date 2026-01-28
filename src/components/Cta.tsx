"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export function Cta() {
  const { t } = useLocale();

  return (
    <section id="demo" className="section bg-[var(--bg-dark)]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-inverse)]"
            style={{ marginBottom: "32px" }}
          >
            {t.cta.headline}
          </h2>

          <p
            className="text-lg text-[var(--text-inverse)]/70"
            style={{ marginBottom: "56px" }}
          >
            {t.cta.description}
          </p>

          <Link
            href="mailto:contact@example.com"
            className="inline-flex items-center justify-center gap-3 bg-[var(--text-inverse)] text-[var(--text-primary)] rounded-lg font-medium text-base hover:opacity-90 transition-opacity"
            style={{ padding: "20px 48px" }}
          >
            {t.cta.button}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
