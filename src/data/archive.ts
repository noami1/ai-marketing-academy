export interface Issue {
  number: number;
  date: string;
  subject: string;
  preview: string;
  readTime: string;
  highlights: string[];
}

export const issues: Issue[] = [
  {
    number: 150,
    date: "2026-02-24",
    subject: "The AI Content Ops Playbook (From a Team That Publishes 200 Posts/Month)",
    preview:
      "How a 6-person content team uses AI to produce, optimize, and distribute 200+ blog posts per month — without sacrificing quality or burning out.",
    readTime: "6 min",
    highlights: ["Content Ops Framework", "Surfer SEO 2.0 Review", "3 Repurposing Prompts"],
  },
  {
    number: 149,
    date: "2026-02-17",
    subject: "Google's AI Overviews Just Changed SEO Forever (Here's What to Do)",
    preview:
      "AI Overviews now appear in 40% of search results. We break down the data and share 5 strategies for maintaining organic traffic.",
    readTime: "7 min",
    highlights: ["SEO Strategy Shift", "Featured Snippet Tactics", "Traffic Recovery Data"],
  },
  {
    number: 148,
    date: "2026-02-10",
    subject: "We Tested 12 AI Email Subject Line Tools. Here's the Winner.",
    preview:
      "Head-to-head comparison of every major AI subject line tool on the market, tested across 500K+ emails with real open rate data.",
    readTime: "8 min",
    highlights: ["Tool Comparison", "Open Rate Data", "Best Free Option"],
  },
  {
    number: 147,
    date: "2026-02-03",
    subject: "The Prompt Library That Saved a $2M Campaign",
    preview:
      "How a B2B SaaS company built an internal prompt library across 14 marketing functions, cutting production time by 70%.",
    readTime: "5 min",
    highlights: ["Prompt Library Template", "Mutiny 3.0 Review", "3 Ad Copy Prompts"],
  },
  {
    number: 146,
    date: "2026-01-27",
    subject: "Predictive Audiences Are Outperforming Lookalikes by 40%",
    preview:
      "New benchmark data shows AI predictive audiences are crushing traditional lookalike audiences in paid social. Here's how to build them.",
    readTime: "6 min",
    highlights: ["Predictive Audiences Guide", "Meta AI Audiences", "Budget Allocation"],
  },
  {
    number: 145,
    date: "2026-01-20",
    subject: "The 'AI-First' Marketing Org Chart (And Why Yours Needs One)",
    preview:
      "We interviewed 15 marketing leaders who restructured their teams around AI. The patterns are clear — and surprising.",
    readTime: "7 min",
    highlights: ["Org Chart Template", "Role Definitions", "Hiring Framework"],
  },
  {
    number: 144,
    date: "2026-01-13",
    subject: "Why Your AI-Generated Content Sounds Like Everyone Else's (And How to Fix It)",
    preview:
      "The 'AI voice' problem is real. Here's a 4-step framework for developing a distinctive AI-assisted brand voice that actually sounds human.",
    readTime: "6 min",
    highlights: ["Brand Voice Framework", "Tone Calibration Prompts", "Before/After Examples"],
  },
  {
    number: 143,
    date: "2026-01-06",
    subject: "2026 Predictions: 10 AI Marketing Trends That Will Define This Year",
    preview:
      "Our annual predictions issue. Last year we got 7 out of 10 right. Here's what we're betting on for 2026.",
    readTime: "9 min",
    highlights: ["10 Predictions", "2025 Scorecard", "Strategy Implications"],
  },
  {
    number: 142,
    date: "2025-12-30",
    subject: "The Best AI Marketing Tools of 2025 (Our Annual Awards)",
    preview:
      "After testing 100+ tools this year, here are our picks for the best AI marketing tools across 8 categories.",
    readTime: "8 min",
    highlights: ["8 Category Winners", "Budget Picks", "Enterprise Picks"],
  },
  {
    number: 141,
    date: "2025-12-23",
    subject: "How One D2C Brand Used AI to Turn a $50K Budget Into $400K Revenue",
    preview:
      "A complete case study on how GlowUp Skincare used AI across their entire funnel — from content to conversion to retention.",
    readTime: "7 min",
    highlights: ["Full Funnel Case Study", "8x ROAS Breakdown", "Replicable Playbook"],
  },
  {
    number: 140,
    date: "2025-12-16",
    subject: "The AI Marketing Stack Under $200/Month (That Outperforms Enterprise Tools)",
    preview:
      "You don't need $10K/month in tools to run AI-powered marketing. Here's the stack we recommend for lean teams.",
    readTime: "6 min",
    highlights: ["Budget Stack Guide", "Tool Comparisons", "Setup Walkthrough"],
  },
  {
    number: 139,
    date: "2025-12-09",
    subject: "ChatGPT's New Canvas Feature Changes Everything for Marketers",
    preview:
      "OpenAI's Canvas feature turns ChatGPT into a real-time collaborative writing and design tool. Here's how marketers should use it.",
    readTime: "5 min",
    highlights: ["Canvas Walkthrough", "5 Marketing Use Cases", "Prompt Templates"],
  },
];

export function getRecentIssues(count: number = 12): Issue[] {
  return issues.slice(0, count);
}
