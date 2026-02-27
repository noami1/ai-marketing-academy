import Image from "next/image";
import Section from "@/components/section";
import Reveal from "@/components/reveal";
import SubscribeForm from "@/components/subscribe-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AI Marketing",
  description:
    "We exist to help marketers harness AI with clarity, not hype. Learn the story behind the newsletter.",
};

const values = [
  {
    num: "01",
    title: "Substance Over Hype",
    desc: "The AI space is noisy. We cut through it. Every insight we share has been verified, tested, or grounded in real-world results. If it's speculative, we say so.",
  },
  {
    num: "02",
    title: "Practitioners First",
    desc: "Our readers are working marketers — people managing budgets, timelines, and stakeholders. We write for them, not for Twitter impressions or VC audiences.",
  },
  {
    num: "03",
    title: "Relentlessly Useful",
    desc: "Every issue should leave you with something you can use. A tool, a framework, a prompt, a strategy. If it's not actionable, it doesn't make the cut.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ======== MANIFESTO HERO ======== */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-6 py-24 md:py-32">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Team working together"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>

        <Reveal>
          <h1 className="relative z-10 mx-auto max-w-4xl text-center font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold italic leading-[1.2] tracking-tight text-text-primary">
            &ldquo;We believe marketers deserve better than guesswork. They
            deserve tools that think, insights that compound, and a community
            that pushes them forward.&rdquo;
          </h1>
        </Reveal>
      </section>

      {/* ======== ORIGIN STORY ======== */}
      <Section className="border-t border-border bg-bg-secondary">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                The Story
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary">
                Why This Exists
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                AI Marketing started in early 2024 as a personal Substack — a
                place to document what was working (and what wasn&apos;t) as AI
                tools transformed the marketing landscape. The first issue went
                to 47 people. Most of them were friends.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Within six months, it had grown to 3,000 subscribers. Not from
                growth hacks or paid acquisition — from readers sharing issues
                with their teams. The thesis was simple: marketers were drowning
                in AI noise and starving for signal. That thesis hasn&apos;t
                changed.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Today, 12,000+ marketers from companies like Google, Shopify,
                HubSpot, and hundreds of startups rely on this newsletter every
                week. It&apos;s still free, still independent, and still
                relentlessly focused on what actually works.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-bg-primary p-8 md:mt-10 md:p-10">
              <h3 className="mb-6 font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
                At a Glance
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Founded", value: "January 2024" },
                  { label: "Subscribers", value: "12,000+" },
                  { label: "Issues Published", value: "150+" },
                  { label: "Avg. Open Rate", value: "52%" },
                  { label: "Countries", value: "40+" },
                  { label: "Reader Satisfaction", value: "4.9 / 5.0" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between border-b border-border-subtle pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-text-tertiary">
                      {item.label}
                    </span>
                    <span className="font-heading text-lg font-bold text-text-primary">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ======== VALUES ======== */}
      <Section>
        <Reveal>
          <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
            Our Principles
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            What We Stand For
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {values.map((v, i) => (
            <Reveal key={v.num} delay={i * 0.08}>
              <div className="group">
                <span className="font-heading text-6xl font-800 text-border transition-colors duration-500 group-hover:text-text-primary">
                  {v.num}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-text-primary">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ======== CREATOR SPOTLIGHT ======== */}
      <Section className="border-t border-border bg-bg-secondary">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              Behind the Newsletter
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="relative mx-auto mt-8 h-24 w-24 overflow-hidden rounded-full border-2 border-border">
              <Image
                src="/images/creator-portrait.jpg"
                alt="Elena Vasquez"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mt-5 font-heading text-2xl font-bold text-text-primary">
              Elena Vasquez
            </h3>
            <p className="mt-1 text-sm text-text-muted">Founder & Editor</p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-base leading-relaxed text-text-secondary">
              Elena spent 12 years leading AI strategy at a Fortune 500 ad
              agency before starting AI Marketing. She&apos;s managed over $50M
              in AI-driven campaigns and has spoken at 40+ industry conferences.
              She writes every issue herself — no ghostwriters, no AI-generated
              filler, no sponsored content.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ======== CTA ======== */}
      <section className="bg-bg-inverse px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-inverse md:text-4xl">
              Join the community.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-base text-text-muted">
              12,000+ marketers. Weekly insights. Zero spam.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mx-auto mt-8 max-w-md">
              <SubscribeForm variant="inverted" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
