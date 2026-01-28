import type { Locale } from "./ja";

export const en: Locale = {
  meta: {
    title: "neumann | Eliminate Ambiguity. Accelerate Growth.",
    description:
      "AI-powered assistant that scans your weekly reports and MBR materials, detects vague areas, and helps you deliver crystal-clear updates—before the meeting even starts.",
  },
  hero: {
    badge: "Introducing neumann",
    mainCopy: "Eliminate Ambiguity. Accelerate Growth.",
    subCopy:
      "AI-powered clarity for every business review—no more vague reports, no more endless back-and-forth.",
    cta: "Request a Demo",
  },
  problem: {
    sectionLabel: "THE PROBLEM",
    headline: 'The "Why?" Fatigue',
    subHeadline:
      "Can't get the right information from the field without asking directly",
    cards: [
      {
        scene: "In weekly syncs",
        pain: '"So... why did we miss target?" — asked every single time',
      },
      {
        scene: "When preparing reports",
        pain: 'No idea what "good enough" actually looks like',
      },
      {
        scene: "After review",
        pain: "Feedback, rework, repeat",
      },
      {
        scene: "Next meeting",
        pain: "Same story, different week",
      },
    ],
  },
  solution: {
    sectionLabel: "THE SOLUTION",
    headline: {
      line1: "AI Catches Gaps",
      line2: "Before Your Meeting Does",
    },
    description: "Zero rework. Issues resolved before they're even raised.",
    beforeLabel: "Traditional Flow",
    beforeFlow: ["Draft report", "Get grilled", "Rework", "Revise"],
    afterLabel: "neumann Flow",
    afterFlow: [
      "Draft report",
      "AI detects",
      "Clarify",
      "Actions defined",
      "Results expected",
      "Improvement cycle",
      "Goal achieved",
    ],
  },
  howItWorks: {
    sectionLabel: "HOW IT WORKS",
    headline: "4 Types of Ambiguity Detected",
    description:
      "Our AI scans your reports and flags vague areas automatically—then tells you exactly what to fix.",
    patterns: [
      {
        number: "1",
        title: "Shallow Analysis",
        example: '"What\'s driving the gap?"',
        description: "Detects reports that don't drill down to root causes",
      },
      {
        number: "2",
        title: "Missing Coverage",
        example: '"What about Initiative C?"',
        description: "Catches gaps in MECE coverage",
      },
      {
        number: "3",
        title: "Vague Metrics",
        example: '"Can you quantify that?"',
        description: 'Flags qualitative statements like "mostly on track"',
      },
      {
        number: "4",
        title: "Unclear Actions",
        example: '"Who owns this, and by when?"',
        description: "Identifies missing Who/What/When",
      },
    ],
    demoPlaceholder: "Demo Screen — Coming soon",
  },
  cta: {
    headline: "Eliminate Ambiguity",
    description: "Ready to make every business review crystal clear?",
    button: "Request a Demo",
  },
  nav: {
    problem: "PROBLEM",
    solution: "SOLUTION",
    howItWorks: "HOW IT WORKS",
    demo: "Request a Demo",
  },
  footer: {
    problem: "Problem",
    solution: "Solution",
    howItWorks: "How It Works",
  },
};
