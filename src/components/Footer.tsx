"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[var(--bg-dark)]" style={{ padding: "48px 0" }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-[var(--text-inverse)]"
          >
            neumann
          </Link>

          {/* Links */}
          <div className="flex items-center gap-10">
            <Link
              href="#problem"
              className="text-sm text-[var(--text-inverse)]/60 hover:text-[var(--text-inverse)] transition-colors"
            >
              {t.footer.problem}
            </Link>
            <Link
              href="#solution"
              className="text-sm text-[var(--text-inverse)]/60 hover:text-[var(--text-inverse)] transition-colors"
            >
              {t.footer.solution}
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-[var(--text-inverse)]/60 hover:text-[var(--text-inverse)] transition-colors"
            >
              {t.footer.howItWorks}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[var(--text-inverse)]/40">
            &copy; {new Date().getFullYear()} neumann
          </p>
        </div>
      </div>
    </footer>
  );
}
