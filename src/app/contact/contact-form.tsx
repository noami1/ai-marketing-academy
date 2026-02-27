"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import Magnetic from "@/components/magnetic";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-border bg-bg-secondary p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 15 }}
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bg-tertiary font-heading text-lg font-bold text-text-primary"
          >
            ✓
          </motion.div>
          <h3 className="font-heading text-xl font-bold text-text-primary">
            Message Sent
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-heading text-xs font-semibold uppercase tracking-widest text-text-muted"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your name"
              className="input-underline"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-heading text-xs font-semibold uppercase tracking-widest text-text-muted"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              className="input-underline"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block font-heading text-xs font-semibold uppercase tracking-widest text-text-muted"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              required
              placeholder="What's this about?"
              className="input-underline"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-heading text-xs font-semibold uppercase tracking-widest text-text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell us more..."
              className="input-underline"
            />
          </div>

          <Magnetic strength={0.12}>
            <button
              type="submit"
              className="w-full rounded-full bg-accent py-4 font-heading text-sm font-semibold text-text-inverse transition-all hover:bg-accent-hover active:scale-[0.98] md:w-auto md:px-12"
            >
              Send Message
            </button>
          </Magnetic>

          <p className="text-xs text-text-muted">
            We typically respond within 24 hours.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
