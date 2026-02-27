"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

export default function SubscribeForm({
  variant = "default",
  className,
}: {
  variant?: "default" | "inverted" | "minimal";
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 font-heading text-sm font-medium",
          variant === "inverted" ? "text-white" : "text-text-primary",
          className
        )}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-text-primary text-[10px] text-white">
          ✓
        </span>
        You&apos;re on the list. Check your inbox.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex gap-3", className)}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={cn(
          "h-12 flex-1 rounded-full px-5 text-sm outline-none transition-all placeholder:text-text-muted",
          variant === "inverted"
            ? "border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-white/40"
            : "border border-border bg-bg-primary text-text-primary focus:border-text-primary"
        )}
      />
      <button
        type="submit"
        className={cn(
          "h-12 shrink-0 rounded-full px-7 font-heading text-sm font-semibold transition-all",
          variant === "inverted"
            ? "bg-white text-black hover:bg-white/90"
            : "bg-accent text-text-inverse hover:bg-accent-hover"
        )}
      >
        Subscribe
      </button>
    </form>
  );
}
