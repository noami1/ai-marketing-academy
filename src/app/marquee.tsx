"use client";

const testimonials = [
  {
    text: "This newsletter is the first thing I read every Monday. It's replaced three other subscriptions.",
    name: "Sarah R.",
    role: "Head of Growth",
  },
  {
    text: "Genuinely actionable. I implemented the predictive audience framework and saw a 35% lift in ROAS within a month.",
    name: "Marcus K.",
    role: "Performance Marketing Lead",
  },
  {
    text: "Finally, an AI newsletter that's written for marketers, not engineers. The tools reviews alone are worth it.",
    name: "Amara L.",
    role: "VP Marketing",
  },
  {
    text: "I recommend this to every marketer on my team. It's the fastest way to stay current on AI marketing.",
    name: "David C.",
    role: "CMO",
  },
  {
    text: "The case studies are gold. Real numbers, real strategies, no fluff. Exactly what I need.",
    name: "Priya M.",
    role: "Marketing Director",
  },
  {
    text: "I've been in marketing for 15 years. This newsletter is the most consistently valuable one I subscribe to.",
    name: "James T.",
    role: "Founder & CEO",
  },
];

export default function Marquee() {
  // Double the items for seamless infinite loop
  const items = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-bg-primary to-transparent md:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-bg-primary to-transparent md:w-32" />

      <div className="flex w-max animate-marquee gap-5">
        {items.map((t, i) => (
          <div
            key={i}
            className="w-[320px] shrink-0 rounded-2xl border border-border bg-bg-primary p-6 md:w-[360px]"
          >
            <p className="text-sm leading-relaxed text-text-secondary">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-border-subtle pt-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-tertiary font-heading text-xs font-bold text-text-primary">
                {t.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
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
          </div>
        ))}
      </div>
    </div>
  );
}
