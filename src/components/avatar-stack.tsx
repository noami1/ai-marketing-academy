"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const avatars = [
  { initials: "SR", bg: "#e8d5f5" },
  { initials: "MK", bg: "#d5e8f5" },
  { initials: "AL", bg: "#f5e0d5" },
  { initials: "DC", bg: "#d5f5e0" },
  { initials: "PM", bg: "#f5d5d5" },
];

export default function AvatarStack({
  count = "12,000+",
  label = "marketers already subscribed",
  className,
}: {
  count?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex -space-x-2.5">
        {avatars.map((a, i) => (
          <motion.div
            key={a.initials}
            initial={{ opacity: 0, scale: 0.5, x: -8 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 0.6 + i * 0.07,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg-primary font-heading text-[9px] font-bold text-text-primary"
            style={{ background: a.bg, zIndex: avatars.length - i }}
          >
            {a.initials}
          </motion.div>
        ))}
      </div>
      <div className="text-sm">
        <span className="font-heading font-semibold text-text-primary">
          {count}
        </span>{" "}
        <span className="text-text-muted">{label}</span>
      </div>
    </div>
  );
}
