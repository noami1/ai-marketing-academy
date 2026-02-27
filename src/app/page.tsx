import Link from "next/link";
import Section from "@/components/section";
import Reveal from "@/components/reveal";
import PostCard from "@/components/post-card";
import SubscribeForm from "@/components/subscribe-form";
import WordCycle from "@/components/word-cycle";
import Faq from "@/components/faq";
import Counter from "@/components/counter";
import TextReveal from "@/components/text-reveal";
import Noise from "@/components/noise";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";
import { posts, getFeaturedPosts } from "@/data/posts";
import Marquee from "./marquee";

/* ================================================================
   HOME PAGE — "The Statement"
   ================================================================ */

const stats = [
  { value: 12000, suffix: "+", label: "Subscribers" },
  { value: 150, suffix: "+", label: "Issues Sent" },
  { value: 52, suffix: "%", label: "Open Rate" },
  { value: 40, suffix: "+", label: "Countries" },
];

const values = [
  {
    num: "01",
    title: "Curated Intelligence",
    desc: "Every issue distills the signal from the noise — only strategies, tools, and insights that actually move the needle for working marketers.",
  },
  {
    num: "02",
    title: "Practitioner Perspective",
    desc: "Written by marketers who manage real budgets and real campaigns. No armchair theory. Every recommendation has been battle-tested.",
  },
  {
    num: "03",
    title: "Actionable, Not Abstract",
    desc: "Each issue includes at least one thing you can implement today. Frameworks, templates, prompts, and workflows you can put to work immediately.",
  },
];

const issuePreview = {
  subject: "Issue #147: The Prompt Library That Saved a $2M Campaign",
  sections: [
    {
      icon: "→",
      title: "Deep Dive",
      desc: "How a B2B SaaS company built an internal prompt library that cut content production time by 70%",
    },
    {
      icon: "→",
      title: "Tool of the Week",
      desc: "Mutiny 3.0 — the AI personalization engine just got a major upgrade",
    },
    {
      icon: "→",
      title: "Quick Wins",
      desc: "3 prompts for writing ad copy that outperforms human-written variants",
    },
    {
      icon: "→",
      title: "Data Point",
      desc: "AI-generated email subject lines now outperform human ones 61% of the time (new study)",
    },
  ],
};

const faqItems = [
  {
    q: "Is the newsletter free?",
    a: "Yes, completely free. We're supported by sponsorships from carefully selected AI and marketing tools — never more than one per issue, always clearly labeled.",
  },
  {
    q: "How often will I receive emails?",
    a: "Once a week, every Monday morning. Occasionally we'll send a bonus mid-week issue if there's breaking news in the AI marketing space, but you can opt out of those.",
  },
  {
    q: "Can I unsubscribe anytime?",
    a: "Absolutely. Every email includes a one-click unsubscribe link at the bottom. No guilt trips, no hoops to jump through.",
  },
  {
    q: "What topics do you cover?",
    a: "AI-powered content creation, predictive analytics, paid media optimization, email automation, conversational AI, and emerging tools. Everything a modern marketer needs to stay competitive.",
  },
  {
    q: "Who writes the newsletter?",
    a: "Elena Vasquez, a former AI Strategy Lead at a Fortune 500 ad agency with 12 years of experience. Every issue is written by hand — no AI-generated filler.",
  },
  {
    q: "I'm not technical. Is this for me?",
    a: "Yes. We write for marketers, not engineers. Everything is explained in plain language with practical, no-code applications. You don't need to know Python to benefit from AI marketing.",
  },
];

export default function Home() {
  const featured = getFeaturedPosts();
  const remaining = posts.filter((p) => !p.featured).slice(0, 2);

  return (
    <>
      {/* ======== HERO ======== */}
      <section className="flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">
        <Reveal variant="blur">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-secondary px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-heading text-[11px] font-medium uppercase tracking-widest text-text-secondary">
              The #1 AI Marketing Newsletter
            </span>
          </div>
        </Reveal>

        <TextReveal
          text="AI insights for marketers who"
          as="h1"
          className="mx-auto max-w-4xl font-heading text-[clamp(2.8rem,7vw,5.5rem)] font-800 leading-[1.05] tracking-tight text-text-primary"
        />
        <Reveal delay={0.3} variant="fade-up">
          <div className="font-heading text-[clamp(2.8rem,7vw,5.5rem)] font-800 leading-[1.05] tracking-tight text-text-primary">
            <WordCycle />
          </div>
        </Reveal>

        <Reveal delay={0.4} variant="blur">
          <p className="mx-auto mt-6 max-w-lg text-lg font-light leading-relaxed text-text-secondary">
            Weekly strategies, tools, and case studies to help you harness AI for
            measurable marketing results. No hype, no fluff.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-10 w-full max-w-md">
            <SubscribeForm />
          </div>
        </Reveal>

        <Reveal delay={0.6} variant="fade-in">
          <p className="mt-4 text-sm text-text-muted">
            Join 12,000+ marketers. Free forever. Unsubscribe anytime.
          </p>
        </Reveal>
      </section>

      {/* ======== STATS STRIP ======== */}
      <div className="relative border-y border-border bg-bg-inverse py-12 md:py-14">
        <Noise />
        <StaggerContainer className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-text-inverse md:text-4xl">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-text-muted">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ======== FEATURED POSTS ======== */}
      <Section className="bg-bg-secondary">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                Latest Insights
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                From the Journal
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden font-heading text-sm font-medium text-text-secondary transition-colors hover:text-text-primary md:inline-flex md:items-center md:gap-1"
            >
              View all <span>→</span>
            </Link>
          </div>
        </Reveal>

        <StaggerContainer className="grid gap-6 md:grid-cols-5" stagger={0.12}>
          {featured[0] && (
            <StaggerItem className="md:col-span-3">
              <PostCard post={featured[0]} featured className="bg-bg-primary" />
            </StaggerItem>
          )}
          <div className="flex flex-col gap-6 md:col-span-2">
            {[featured[1], ...remaining]
              .filter(Boolean)
              .slice(0, 2)
              .map((post) => (
                <Reveal key={post.slug} delay={0.2}>
                  <PostCard post={post} className="bg-bg-primary" />
                </Reveal>
              ))}
          </div>
        </StaggerContainer>

        <Reveal>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/blog"
              className="font-heading text-sm font-medium text-text-secondary"
            >
              View all articles →
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ======== VALUE PROPS ======== */}
      <Section>
        <Reveal>
          <div className="mb-14 max-w-xl">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              What You Get
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Built for marketers
              <br />
              who ship.
            </h2>
          </div>
        </Reveal>

        <StaggerContainer className="grid gap-6 md:grid-cols-3 md:gap-10" stagger={0.12}>
          {values.map((v) => (
            <StaggerItem key={v.num}>
              <div className="group">
                <span className="font-heading text-5xl font-800 text-border-strong transition-colors duration-500 group-hover:text-text-primary">
                  {v.num}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-text-primary">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {v.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ======== NEWSLETTER PREVIEW ======== */}
      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-2xl">
          <Reveal variant="blur">
            <div className="mb-8 text-center">
              <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                Peek Inside
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                What an Issue Looks Like
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08} variant="scale">
            <div className="rounded-2xl border border-border bg-bg-primary p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] md:p-8">
              {/* Mock email header */}
              <div className="mb-6 border-b border-border-subtle pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-heading text-[10px] font-extrabold text-text-inverse">
                    AI
                  </div>
                  <div>
                    <div className="font-heading text-sm font-semibold text-text-primary">
                      AI Marketing Weekly
                    </div>
                    <div className="text-xs text-text-muted">
                      Monday, Feb 24, 2026
                    </div>
                  </div>
                </div>
                <p className="mt-3 font-heading text-base font-bold text-text-primary md:text-lg">
                  {issuePreview.subject}
                </p>
              </div>

              {/* Sections */}
              <StaggerContainer className="space-y-3" stagger={0.08}>
                {issuePreview.sections.map((s, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-3 rounded-xl bg-bg-secondary p-4">
                      <span className="mt-0.5 font-heading text-xs font-bold text-text-muted">
                        {s.icon}
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-semibold text-text-primary">
                          {s.title}
                        </h4>
                        <p className="mt-0.5 text-sm text-text-secondary">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA */}
              <div className="mt-6 border-t border-border-subtle pt-5 text-center">
                <p className="mb-3 text-xs text-text-muted">
                  5 minute read &middot; Delivered every Monday
                </p>
                <SubscribeForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ======== TESTIMONIAL MARQUEE ======== */}
      <Section className="overflow-hidden">
        <Reveal variant="blur">
          <div className="mb-10 text-center">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              What Readers Say
            </span>
          </div>
        </Reveal>
        <Marquee />
      </Section>

      {/* ======== FAQ ======== */}
      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-2xl">
          <Reveal variant="blur">
            <div className="mb-10 text-center">
              <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                FAQ
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary">
                Common Questions
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Faq items={faqItems} />
          </Reveal>
        </div>
      </Section>

      {/* ======== FINAL CTA ======== */}
      <section className="relative bg-bg-inverse px-6 py-24 text-center md:py-32">
        <Noise />
        <div className="relative z-10 mx-auto max-w-2xl">
          <TextReveal
            text="Ready to stay ahead?"
            as="h2"
            className="font-heading text-3xl font-bold tracking-tight text-text-inverse md:text-5xl"
          />
          <Reveal delay={0.2} variant="blur">
            <p className="mt-4 text-base text-text-muted">
              Get the strategies, tools, and insights that 12,000+ marketers
              rely on every week. Delivered free to your inbox.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mx-auto mt-8 max-w-md">
              <SubscribeForm variant="inverted" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
