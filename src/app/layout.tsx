import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "neumann | Eliminate Ambiguity. Accelerate Growth.",
  description:
    "AI-powered assistant that scans your weekly reports and MBR materials, detects vague areas, and helps you deliver crystal-clear updates.",
  openGraph: {
    title: "neumann | Eliminate Ambiguity. Accelerate Growth.",
    description:
      "AI-powered assistant that detects vague areas in your reports and helps you deliver crystal-clear updates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
