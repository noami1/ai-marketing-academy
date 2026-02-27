import Section from "@/components/section";
import Reveal from "@/components/reveal";
import TextReveal from "@/components/text-reveal";
import SubscribeForm from "@/components/subscribe-form";
import Noise from "@/components/noise";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";
import { issues } from "@/data/archive";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter Archive — AI Marketing",
  description:
    "Browse past issues of the AI Marketing newsletter. 150+ issues of strategies, tools, and insights.",
};

export default function ArchivePage() {
  return (
    <>
      {/* ======== HEADER ======== */}
      <section className="px-6 pb-8 pt-20 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal variant="blur">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              Archive
            </span>
          </Reveal>
          <TextReveal
            text="Past Issues"
            as="h1"
            className="mt-2 font-heading text-4xl font-bold tracking-tight text-text-primary md:text-5xl"
            delay={0.1}
          />
          <Reveal delay={0.2} variant="blur">
            <p className="mt-4 max-w-xl text-base text-text-secondary">
              150+ issues of curated AI marketing intelligence. Browse our
              complete archive — every strategy, tool review, and case study
              we&apos;ve published.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======== ISSUE FEED ======== */}
      <Section>
        <StaggerContainer className="space-y-4" stagger={0.05}>
          {issues.map((issue) => (
            <StaggerItem key={issue.number}>
              <article className="group cursor-pointer rounded-2xl border border-border bg-bg-primary p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                  {/* Issue number + date */}
                  <div className="shrink-0 md:w-32">
                    <span className="font-heading text-2xl font-bold text-border-strong transition-colors group-hover:text-text-primary">
                      #{issue.number}
                    </span>
                    <div className="mt-1 text-xs text-text-muted">
                      {formatDate(issue.date)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-lg font-bold leading-snug tracking-tight text-text-primary md:text-xl">
                      {issue.subject}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {issue.preview}
                    </p>

                    {/* Highlights */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {issue.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-bg-tertiary px-3 py-1 font-heading text-[10px] font-medium text-text-muted"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read time + arrow */}
                  <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-end md:gap-2">
                    <span className="text-xs text-text-muted">
                      {issue.readTime}
                    </span>
                    <span className="font-heading text-sm text-text-muted transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal>
          <div className="mt-12 text-center">
            <p className="text-sm text-text-muted">
              Showing latest 12 issues &middot; Full archive available to
              subscribers
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ======== CTA ======== */}
      <section className="relative bg-bg-inverse px-6 py-20 text-center md:py-24">
        <Noise />
        <div className="relative z-10 mx-auto max-w-lg">
          <Reveal variant="blur">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-text-inverse md:text-3xl">
              Never miss an issue
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              Get every issue delivered straight to your inbox every Monday
              morning. Free forever.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mx-auto mt-8 max-w-md">
              <SubscribeForm variant="inverted" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
