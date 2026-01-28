"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container flex justify-center">
        <div className="max-w-4xl w-full text-center">
          {/* Badge */}
          <div className="badge" style={{ marginBottom: "80px" }}>
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Copy */}
          <h1
            className="text-2xl md:text-3xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.2]"
            style={{ marginBottom: "64px" }}
          >
            {t.hero.mainCopy}
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
