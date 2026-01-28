export const ja = {
  meta: {
    title: "neumann | 達成を阻む曖昧さをなくす",
    description:
      "「問題の場所・課題/真因・打ち手・打ち手の結果」を明確にすることで達成の再現性を担保するAIアシスタント。",
  },
  hero: {
    badge: "Introducing neumann",
    mainCopy: {
      line1: "達成を阻む",
      line2: "曖昧さをなくす",
    },
    subCopy:
      "「問題の場所・課題/真因・打ち手・打ち手の結果」を明確にすることで達成の再現性を担保",
    cta: "Request a Demo",
  },
  problem: {
    sectionLabel: "THE PROBLEM",
    headline: "わからない",
    subHeadline: "現場に聞かないとわからない・現場から適切な共有を得ることができない",
    cards: [
      {
        scene: "問題の場所が不明瞭",
        pain: "「どのKPIが未達なのか」が曖昧",
      },
      {
        scene: "問題を引き起こしている課題が不明瞭",
        pain: "課題が構造化されない（網羅されていない・関係性がわからない）",
      },
      {
        scene: "打ち手が不明瞭",
        pain: "どのKPIのどの課題にヒットする打ち手なのかが不明瞭・誰がいつまでに何をやるのかが不明瞭",
      },
      {
        scene: "打ち手の結果が不明瞭",
        pain: "その打ち手の結果、いつまでにどのKPIがどうなるのかが不明瞭",
      },
    ],
  },
  solution: {
    sectionLabel: "THE SOLUTION",
    headline: {
      line1: "KPIの構造化",
      line2: "KPIの定義と管理をシステム化・ビジュアル化",
    },
    description: "常に問題解決のための情報が明確でオープン",
    beforeLabel: "従来のフロー",
    beforeFlow: [
      "売上の未達",
      "理由は新規売上の未達",
      "打ち手が曖昧",
      "改善のサイクルが回らず慢性的な未達",
    ],
    afterLabel: "neumann のフロー",
    afterFlow: [
      "売上の未達",
      "KPIベースで未達の場所を明確化",
      "未達の原因が明確化",
      "打ち手が定義",
      "結果が想定",
      "改善サイクル",
      "達成に近づく",
    ],
  },
  howItWorks: {
    sectionLabel: "HOW IT WORKS",
    headline: "4パターンの曖昧さを検知",
    description:
      "AIが報告資料をスキャンし、曖昧なポイントを自動で検知。具体的な質問・指示を提示します。",
    patterns: [
      {
        number: "1",
        title: "深掘り不足",
        example: "「未達の要因は？」",
        description: "原子レベルまで分解されていない報告を検知",
      },
      {
        number: "2",
        title: "網羅性不足",
        example: "「施策Cの進捗は？」",
        description: "MECEでない、抜け漏れがある報告を検知",
      },
      {
        number: "3",
        title: "定量性不足",
        example: "「具体的な数値は？」",
        description: "「概ね順調」など定性的すぎる報告を検知",
      },
      {
        number: "4",
        title: "行動不明確",
        example: "「誰が、いつまでに？」",
        description: "Who/What/Whenが不明な報告を検知",
      },
    ],
    demoPlaceholder: "デモ画面 - 開発完了後に挿入予定",
  },
  cta: {
    headline: "曖昧さをゼロにする",
    description: "あらゆる予実差異とその原因を明確にオープンに",
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

export type Locale = typeof ja;
