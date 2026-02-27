"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <button
            key={i}
            onClick={() => setOpen(isOpen ? null : i)}
            className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:text-text-primary"
          >
            <div className="flex-1">
              <h3 className="font-heading text-base font-semibold text-text-primary md:text-lg">
                {item.q}
              </h3>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-400",
                  isOpen ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.a}
                </p>
              </div>
            </div>
            <span
              className={cn(
                "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-xs text-text-muted transition-transform duration-300",
                isOpen && "rotate-45"
              )}
            >
              +
            </span>
          </button>
        );
      })}
    </div>
  );
}
