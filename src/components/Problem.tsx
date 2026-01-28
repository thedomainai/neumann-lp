"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function Problem() {
  const { t } = useLocale();

  return (
    <section id="problem" className="section">
      <div className="container">
        {/* Section Label */}
        <p className="section-label" style={{ marginBottom: "24px" }}>
          {t.problem.sectionLabel}
        </p>

        {/* Main Message */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          style={{ marginBottom: "24px" }}
        >
          {t.problem.headline}
        </h2>

        <p
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl"
          style={{ marginBottom: "80px" }}
        >
          {t.problem.subHeadline}
        </p>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.problem.cards.map((item, index) => (
            <div key={index} className="card" style={{ padding: "40px 32px" }}>
              <p
                className="text-sm font-medium text-[var(--text-secondary)]"
                style={{ marginBottom: "16px" }}
              >
                {item.scene}
              </p>
              <p className="text-base font-medium leading-relaxed">
                {item.pain}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
