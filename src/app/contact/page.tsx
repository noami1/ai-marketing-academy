import Reveal from "@/components/reveal";
import ContactForm from "./contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — AI Marketing",
  description:
    "Get in touch with the AI Marketing team. We'd love to hear from you.",
};

const socials = [
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function ContactPage() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-16 md:grid-cols-2 md:gap-24">
        {/* ======== LEFT — INFO ======== */}
        <div className="md:sticky md:top-32">
          <Reveal>
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              Contact
            </span>
            <h1 className="mt-3 font-heading text-5xl font-bold tracking-tight text-text-primary md:text-6xl">
              Let&apos;s Talk.
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-text-secondary">
              Have a question, partnership idea, or just want to say hello? We
              read every message and typically respond within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-10 space-y-4">
              <div>
                <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Email
                </h3>
                <a
                  href="mailto:hello@aimarketing.com"
                  className="mt-1 block text-base text-text-primary underline underline-offset-4 transition-colors hover:text-text-secondary"
                >
                  hello@aimarketing.com
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10">
              <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
                Social
              </h3>
              <div className="mt-3 flex gap-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-sm text-text-tertiary transition-colors hover:text-text-primary"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ======== RIGHT — FORM ======== */}
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
