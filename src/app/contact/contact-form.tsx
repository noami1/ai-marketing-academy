"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-border bg-bg-secondary p-12 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bg-tertiary font-heading text-lg font-bold text-text-primary">
          ✓
        </div>
        <h3 className="font-heading text-xl font-bold text-text-primary">
          Message Sent
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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

      <button
        type="submit"
        className="w-full rounded-full bg-accent py-4 font-heading text-sm font-semibold text-text-inverse transition-colors hover:bg-accent-hover md:w-auto md:px-12"
      >
        Send Message
      </button>

      <p className="text-xs text-text-muted">
        We typically respond within 24 hours.
      </p>
    </form>
  );
}
