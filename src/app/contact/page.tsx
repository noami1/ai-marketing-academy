import Reveal from "@/components/reveal";
import TextReveal from "@/components/text-reveal";
import ContactForm from "./contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — AI Marketing",
  description:
    "Get in touch with the AI Marketing team. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-2 md:gap-20">
        {/* Left — copy */}
        <div>
          <Reveal variant="blur">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              Contact
            </span>
          </Reveal>

          <TextReveal
            text="Let's Talk"
            as="h1"
            className="mt-2 font-heading text-5xl font-bold tracking-tight text-text-primary md:text-6xl"
            delay={0.1}
          />

          <Reveal delay={0.2} variant="blur">
            <p className="mt-6 max-w-sm text-base leading-relaxed text-text-secondary">
              Have a question about the newsletter? Want to sponsor an issue?
              Just want to say hi? We&apos;d love to hear from you.
            </p>
          </Reveal>

          <Reveal delay={0.3} variant="fade-up">
            <div className="mt-12 space-y-8">
              <div>
                <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Email
                </h3>
                <p className="mt-1 text-base text-text-primary">
                  hello@aimarketing.com
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Social
                </h3>
                <p className="mt-1 text-base text-text-primary">
                  @aimarketing on X / Twitter
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Response Time
                </h3>
                <p className="mt-1 text-base text-text-primary">
                  Within 24 hours
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — form */}
        <Reveal delay={0.15} variant="fade-right">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
