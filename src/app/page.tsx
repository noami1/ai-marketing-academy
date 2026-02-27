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
import AvatarStack from "@/components/avatar-stack";
import FeatureTabs from "@/components/feature-tabs";
import TestimonialGrid from "@/components/testimonial-grid";
import RoiCalculator from "@/components/roi-calculator";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";
import { posts, getFeaturedPosts } from "@/data/posts";

/* ================================================================
   HOME PAGE — "The Statement"
   ================================================================ */

const stats = [
  { value: 12000, suffix: "+", label: "Subscribers" },
  { value: 150, suffix: "+", label: "Issues Sent" },
  { value: 52, suffix: "%", label: "Open Rate" },
  { value: 40, suffix: "+", label: "Countries" },
];

/* -- Bento grid items -- */
const bentoItems = [
  {
    title: "Curated Intelligence",
    desc: "Every issue distills the signal from the noise — only strategies, tools, and insights that actually move the needle.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    span: "md:col-span-2",
  },
  {
    title: "Battle-Tested",
    desc: "Written by practitioners who manage real budgets and real campaigns. No armchair theory.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    span: "",
  },
  {
    title: "Actionable",
    desc: "Each issue includes at least one thing you can implement today. Frameworks, templates, prompts.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    ),
    span: "",
  },
  {
    title: "Community of 12,000+",
    desc: "Join marketers from Google, Shopify, HubSpot, and hundreds of fast-growing startups who read every week.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    span: "md:col-span-2",
  },
  {
    title: "5 Min Read",
    desc: "Designed to be consumed over morning coffee. Dense, scannable, zero filler.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    span: "",
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
      {/* ======== HERO (with subtle radial gradient) ======== */}
      <section className="hero-gradient relative flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">
        <Reveal variant="blur">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-primary/80 px-4 py-1.5 backdrop-blur-sm">
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
          <AvatarStack className="mt-6 justify-center" />
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

      {/* ======== BENTO GRID — "What You Get" ======== */}
      <Section>
        <Reveal>
          <div className="mb-12 max-w-xl">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              01 / What You Get
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Built for marketers
              <br />
              who ship.
            </h2>
          </div>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
          stagger={0.08}
        >
          {bentoItems.map((item) => (
            <StaggerItem key={item.title} className={item.span}>
              <div className="group h-full rounded-2xl border border-border bg-bg-secondary p-6 transition-all duration-300 hover:border-border-strong hover:bg-bg-primary hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-bg-tertiary text-text-secondary transition-colors group-hover:bg-accent group-hover:text-text-inverse">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ======== FEATURE TABS — "Inside Each Issue" ======== */}
      <Section className="bg-bg-secondary">
        <Reveal>
          <div className="mb-12 max-w-xl">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              02 / Inside Each Issue
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Four sections. Zero filler.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <FeatureTabs />
        </Reveal>
      </Section>

      {/* ======== FEATURED POSTS ======== */}
      <Section>
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                03 / Latest Insights
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
              <PostCard post={featured[0]} featured className="bg-bg-secondary" />
            </StaggerItem>
          )}
          <div className="flex flex-col gap-6 md:col-span-2">
            {[featured[1], ...remaining]
              .filter(Boolean)
              .slice(0, 2)
              .map((post) => (
                <Reveal key={post.slug} delay={0.2}>
                  <PostCard post={post} className="bg-bg-secondary" />
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

      {/* ======== NEWSLETTER PREVIEW ======== */}
      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-2xl">
          <Reveal variant="blur">
            <div className="mb-8 text-center">
              <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                04 / Peek Inside
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                What an Issue Looks Like
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08} variant="scale">
            <div className="rounded-2xl border border-border bg-bg-primary p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] md:p-8">
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

      {/* ======== AI ROI CALCULATOR ======== */}
      <Section>
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Reveal>
              <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                05 / Interactive Tool
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                How much could AI
                <br />
                save your team?
              </h2>
            </Reveal>
            <Reveal delay={0.08} variant="blur">
              <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
                Use our calculator to estimate the time and cost savings your
                marketing team could achieve with AI tools. Based on real
                benchmark data from 500+ marketing teams.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12} variant="fade-right">
            <RoiCalculator />
          </Reveal>
        </div>
      </Section>

      {/* ======== TESTIMONIALS ======== */}
      <Section className="bg-bg-secondary">
        <Reveal variant="blur">
          <div className="mb-10 text-center">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              06 / What Readers Say
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Trusted by 12,000+ Marketers
            </h2>
          </div>
        </Reveal>
        <TestimonialGrid />
      </Section>

      {/* ======== FAQ ======== */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <Reveal variant="blur">
            <div className="mb-10 text-center">
              <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                07 / FAQ
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
          <Reveal delay={0.4} variant="fade-in">
            <AvatarStack
              className="mt-6 justify-center"
              label="marketers already subscribed"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
