"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function HowItWorks() {
  const { t } = useLocale();

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        {/* Section Label */}
        <p className="section-label" style={{ marginBottom: "24px" }}>
          {t.howItWorks.sectionLabel}
        </p>

        {/* Main Message */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl"
          style={{ marginBottom: "24px" }}
        >
          {t.howItWorks.headline}
        </h2>

        <p
          className="text-lg text-[var(--text-secondary)] max-w-2xl"
          style={{ marginBottom: "80px" }}
        >
          {t.howItWorks.description}
        </p>

        {/* Pattern Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ marginBottom: "80px" }}
        >
          {t.howItWorks.patterns.map((pattern) => (
            <div
              key={pattern.number}
              className="card"
              style={{ padding: "40px 32px" }}
            >
              {/* Number */}
              <div
                className="w-14 h-14 rounded-full bg-[var(--accent-light)] flex items-center justify-center"
                style={{ marginBottom: "28px" }}
              >
                <span className="text-base font-semibold text-[var(--accent-primary)]">
                  {pattern.number}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold"
                style={{ marginBottom: "16px" }}
              >
                {pattern.title}
              </h3>

              {/* Example */}
              <p
                className="text-base font-medium text-[var(--accent-primary)]"
                style={{ marginBottom: "16px" }}
              >
                {pattern.example}
              </p>

              {/* Description */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {pattern.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo Placeholder */}
        <div className="card bg-[var(--bg-secondary)] p-0 overflow-hidden">
          <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[var(--bg-primary)] to-[var(--accent-light)]/30">
            <div className="text-center">
              <div
                className="w-24 h-24 rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center mx-auto shadow-sm"
                style={{ marginBottom: "24px" }}
              >
                <svg
                  className="w-12 h-12 text-[var(--accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-[var(--text-secondary)]">
                {t.howItWorks.demoPlaceholder}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
