"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/magnetic";

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
    if (email) {
      setSubmitted(true);
      toast.success("Welcome aboard!", {
        description: "Check your inbox to confirm your subscription.",
      });
    }
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex items-center gap-2 font-heading text-sm font-medium",
            variant === "inverted" ? "text-white" : "text-text-primary",
            className
          )}
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 15 }}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-text-primary text-[10px] text-white"
          >
            ✓
          </motion.span>
          You&apos;re on the list. Check your inbox.
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onSubmit={handleSubmit}
          className={cn("flex gap-3", className)}
        >
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
          <Magnetic strength={0.15}>
            <button
              type="submit"
              className={cn(
                "h-12 shrink-0 rounded-full px-7 font-heading text-sm font-semibold transition-all active:scale-95",
                variant === "inverted"
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-accent text-text-inverse hover:bg-accent-hover"
              )}
            >
              Subscribe
            </button>
          </Magnetic>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
