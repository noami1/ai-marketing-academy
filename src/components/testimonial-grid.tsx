"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";

const testimonials = [
  {
    text: "This newsletter is the first thing I read every Monday. It's replaced three other subscriptions I used to pay for.",
    name: "Sarah Reynolds",
    role: "Head of Growth, Lattice",
    initials: "SR",
    metric: "3x fewer subscriptions needed",
  },
  {
    text: "Genuinely actionable. I implemented the predictive audience framework and saw a 35% lift in ROAS within a month.",
    name: "Marcus Kim",
    role: "Performance Marketing Lead, Webflow",
    initials: "MK",
    metric: "+35% ROAS",
  },
  {
    text: "Finally, an AI newsletter written for marketers, not engineers. The tool reviews alone save me hours of research every week.",
    name: "Amara Liu",
    role: "VP Marketing, Notion",
    initials: "AL",
    metric: "Hours saved weekly",
  },
  {
    text: "I recommend this to every marketer on my team. It's the fastest way to stay current on AI without drowning in noise.",
    name: "David Chen",
    role: "CMO, Ramp",
    initials: "DC",
    metric: "Shared with 40+ team members",
  },
  {
    text: "The case studies are gold. Real numbers, real strategies, real companies. Not the generic 'use AI for content' advice you see everywhere.",
    name: "Priya Mehta",
    role: "Marketing Director, Stripe",
    initials: "PM",
    metric: "Implemented 12 strategies",
  },
  {
    text: "I've been in marketing for 15 years. This newsletter is the most consistently valuable resource I've found in the AI space.",
    name: "James Torres",
    role: "Founder & CEO, GrowthLab",
    initials: "JT",
    metric: "15yr marketing veteran",
  },
];

export default function TestimonialGrid() {
  return (
    <StaggerContainer
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      stagger={0.06}
    >
      {testimonials.map((t, i) => (
        <StaggerItem key={t.initials}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex h-full flex-col rounded-2xl border border-border bg-bg-primary p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            {/* Stars */}
            <div className="mb-3 flex gap-0.5 text-text-primary">
              {[...Array(5)].map((_, j) => (
                <svg
                  key={j}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="flex-1 text-sm leading-relaxed text-text-secondary">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Metric badge */}
            {t.metric && (
              <div className="mt-4 w-fit rounded-full bg-bg-tertiary px-3 py-1 font-heading text-[10px] font-semibold text-text-secondary">
                {t.metric}
              </div>
            )}

            {/* Author */}
            <div className="mt-4 flex items-center gap-3 border-t border-border-subtle pt-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-tertiary font-heading text-xs font-bold text-text-primary">
                {t.initials}
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-text-primary">
                  {t.name}
                </div>
                <div className="truncate text-xs text-text-muted">
                  {t.role}
                </div>
              </div>
            </div>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
