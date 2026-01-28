"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md">
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-tight">
            neumann
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#problem"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {t.nav.problem}
            </Link>
            <Link
              href="#solution"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {t.nav.solution}
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {t.nav.howItWorks}
            </Link>
          </div>

          {/* CTA + Language Switcher */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="#demo" className="btn-primary text-sm">
              {t.nav.demo}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
