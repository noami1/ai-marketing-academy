import Section from "@/components/section";
import Reveal from "@/components/reveal";
import TextReveal from "@/components/text-reveal";
import Noise from "@/components/noise";
import SubscribeForm from "@/components/subscribe-form";
import { tools, categories } from "@/data/tools";
import ResourcesGrid from "./resources-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing Tools Directory — AI Marketing",
  description:
    "A curated directory of the best AI-powered marketing tools. Vetted by our team and used by 12,000+ marketers.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <section className="px-6 pb-8 pt-20 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal variant="blur">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              Resources
            </span>
          </Reveal>
          <TextReveal
            text="AI Marketing Tools Directory"
            as="h1"
            className="mt-2 font-heading text-4xl font-bold tracking-tight text-text-primary md:text-5xl"
            delay={0.1}
          />
          <Reveal delay={0.2} variant="blur">
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
              A curated collection of the best AI-powered marketing tools. Every
              tool has been vetted by our team and used by the 12,000+ marketers
              in our community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======== TOOLS GRID ======== */}
      <Section>
        <ResourcesGrid tools={tools} categories={categories} />
      </Section>

      {/* ======== CTA ======== */}
      <section className="relative bg-bg-inverse px-6 py-20 text-center md:py-24">
        <Noise />
        <div className="relative z-10 mx-auto max-w-lg">
          <Reveal variant="blur">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-text-inverse md:text-3xl">
              Get new tools in your inbox
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              We review 2-3 new AI marketing tools every week. Subscribe to
              never miss a recommendation.
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
