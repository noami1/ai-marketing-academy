"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/magnetic";
import type { Tool, ToolCategory } from "@/data/tools";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95 },
};

export default function ResourcesGrid({
  tools,
  categories,
}: {
  tools: Tool[];
  categories: ToolCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>("All");

  const filtered =
    activeCategory === "All"
      ? tools
      : tools.filter((t) => t.category === activeCategory);

  return (
    <>
      {/* Category filter tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "relative rounded-full px-4 py-2 font-heading text-xs font-medium transition-colors",
              activeCategory === cat
                ? "text-text-inverse"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            {activeCategory === cat && (
              <motion.span
                layoutId="category-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Tools grid */}
      <motion.div
        layout
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((tool, i) => (
            <motion.a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.4,
                delay: i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              layout
              className="group relative flex flex-col rounded-2xl border border-border bg-bg-primary p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              {/* Highlight badge */}
              {tool.highlight && (
                <span className="absolute right-4 top-4 rounded-full bg-bg-tertiary px-2.5 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
                  {tool.highlight}
                </span>
              )}

              {/* Icon placeholder */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-bg-tertiary font-heading text-sm font-bold text-text-primary transition-colors group-hover:bg-accent group-hover:text-text-inverse">
                {tool.name.charAt(0)}
              </div>

              <h3 className="font-heading text-lg font-bold text-text-primary">
                {tool.name}
              </h3>

              <div className="mb-3 mt-1 flex items-center gap-3">
                <span className="rounded-full bg-bg-secondary px-2.5 py-0.5 font-heading text-[10px] font-medium uppercase tracking-wider text-text-muted">
                  {tool.category}
                </span>
                <span className="text-xs text-text-muted">{tool.pricing}</span>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                {tool.description}
              </p>

              <div className="mt-4 flex items-center gap-1 font-heading text-xs font-semibold text-text-primary">
                Visit tool
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Count */}
      <p className="mt-8 text-center text-sm text-text-muted">
        Showing {filtered.length} of {tools.length} tools
      </p>
    </>
  );
}
