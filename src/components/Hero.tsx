"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="badge" style={{ marginBottom: "80px" }}>
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Copy */}
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            style={{ marginBottom: "64px" }}
          >
            {t.hero.mainCopy.line1}
            <br />
            {t.hero.mainCopy.line2}
          </h1>

          {/* Sub Copy */}
          <p
            className="text-lg md:text-xl text-[var(--text-secondary)]"
            style={{ marginBottom: "96px" }}
          >
            {t.hero.subCopy}
          </p>

          {/* CTA */}
          <Link href="#demo" className="btn-primary text-base">
            {t.hero.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
