"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function Solution() {
  const { t } = useLocale();

  return (
    <section id="solution" className="section bg-[var(--bg-secondary)]">
      <div className="container">
        {/* Section Label */}
        <p className="section-label" style={{ marginBottom: "24px" }}>
          {t.solution.sectionLabel}
        </p>

        {/* Main Message */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl"
          style={{ marginBottom: "24px" }}
        >
          {t.solution.headline.line1}
          <br className="hidden md:block" />
          {t.solution.headline.line2}
        </h2>

        <p
          className="text-lg text-[var(--text-secondary)] max-w-2xl"
          style={{ marginBottom: "80px" }}
        >
          {t.solution.description}
        </p>

        {/* Flow Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before */}
          <div
            className="rounded-2xl border border-[var(--text-primary)]/10"
            style={{ padding: "48px 40px" }}
          >
            <p
              className="text-sm font-medium text-[var(--text-secondary)]"
              style={{ marginBottom: "32px" }}
            >
              {t.solution.beforeLabel}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {t.solution.beforeFlow.map((step, index) => (
                <span key={index}>
                  {index > 0 && (
                    <span className="text-[var(--text-muted)] mr-4">→</span>
                  )}
                  <span className="px-5 py-3 bg-[var(--bg-primary)] rounded-lg inline-block">
                    {step}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* After */}
          <div
            className="rounded-2xl bg-[var(--accent-light)]/30 border border-[var(--accent-primary)]/20"
            style={{ padding: "48px 40px" }}
          >
            <p
              className="text-sm font-medium text-[var(--accent-primary)]"
              style={{ marginBottom: "32px" }}
            >
              {t.solution.afterLabel}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {t.solution.afterFlow.map((step, index) => (
                <span key={index}>
                  {index > 0 && (
                    <span className="text-[var(--text-muted)] mr-4">→</span>
                  )}
                  <span
                    className={`px-5 py-3 rounded-lg inline-block ${
                      index === 1
                        ? "bg-[var(--accent-primary)] text-white font-medium"
                        : "bg-[var(--bg-secondary)]"
                    }`}
                  >
                    {step}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
