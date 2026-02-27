"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "deep-dives",
    label: "Deep Dives",
    title: "In-Depth Strategy Breakdowns",
    description:
      "Every issue features a 1,500-word deep dive into a specific AI marketing strategy — complete with frameworks, real examples, and step-by-step implementation guides you can follow immediately.",
    preview: {
      tag: "Deep Dive — Issue #147",
      heading: "The Prompt Library That Saved a $2M Campaign",
      text: "How Acme Corp built an internal prompt library across 14 marketing functions, cutting content production time by 70% and increasing conversion rates by 23%...",
    },
    accent: "#0a0a0a",
  },
  {
    id: "tool-reviews",
    label: "Tool Reviews",
    title: "Honest, Hands-On Tool Assessments",
    description:
      "We test 2-3 new AI marketing tools every week so you don't have to. Each review covers pricing, UX, real performance data, and whether it's actually worth adding to your stack.",
    preview: {
      tag: "Tool of the Week — Issue #147",
      heading: "Mutiny 3.0: AI Personalization Gets Serious",
      text: "The website personalization engine just shipped its biggest update yet — AI-generated page variants, predictive segment builder, and a 40% faster time-to-first-test...",
    },
    accent: "#525252",
  },
  {
    id: "quick-wins",
    label: "Quick Wins",
    title: "Implement Today, See Results Tomorrow",
    description:
      "Short, tactical prompts, workflows, and micro-strategies you can put to work in under 15 minutes. Every issue includes at least 3 quick wins across content, email, and paid media.",
    preview: {
      tag: "Quick Wins — Issue #147",
      heading: "3 Ad Copy Prompts That Beat Human Writers",
      text: "Prompt #1: 'Write 5 Facebook ad headlines for [product] targeting [audience] that use the PAS framework. Each headline must be under 40 characters and include a number...'",
    },
    accent: "#737373",
  },
  {
    id: "data-points",
    label: "Data Points",
    title: "The Numbers Behind the Headlines",
    description:
      "Every week we surface the most important new data points in AI marketing — from benchmark studies, platform reports, and proprietary research. The stats your strategy decks need.",
    preview: {
      tag: "Data Point — Issue #147",
      heading: "AI Email Subject Lines Win 61% of the Time",
      text: "A new study of 2.4M email campaigns found that AI-generated subject lines outperformed human-written ones in 61% of A/B tests — with the gap widening in e-commerce and SaaS...",
    },
    accent: "#a3a3a3",
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <div>
      {/* Tab bar */}
      <div className="mb-8 flex flex-wrap gap-2 md:mb-10">
        {features.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setActive(i)}
            className={cn(
              "relative rounded-full px-5 py-2.5 font-heading text-xs font-medium transition-colors",
              active === i
                ? "text-text-inverse"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            {active === i && (
              <motion.span
                layoutId="feature-tab-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f.label}</span>
          </button>
        ))}
      </div>

      {/* Content area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid items-start gap-8 md:grid-cols-2 md:gap-12"
        >
          {/* Left — description */}
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-text-primary">
              {current.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {current.description}
            </p>
          </div>

          {/* Right — preview card */}
          <div className="rounded-2xl border border-border bg-bg-primary p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <span className="mb-3 inline-block rounded-full bg-bg-tertiary px-3 py-1 font-heading text-[10px] font-medium uppercase tracking-wider text-text-muted">
              {current.preview.tag}
            </span>
            <h4 className="font-heading text-lg font-bold leading-snug text-text-primary">
              {current.preview.heading}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {current.preview.text}
            </p>
            <div className="mt-4 border-t border-border-subtle pt-3">
              <span className="font-heading text-xs font-medium text-text-muted">
                5 min read &middot; Monday delivery
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
