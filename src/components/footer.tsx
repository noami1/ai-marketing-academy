import Link from "next/link";
import SubscribeForm from "./subscribe-form";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const resourceLinks = [
  { href: "/blog", label: "All Articles" },
  { href: "/blog", label: "AI Tools" },
  { href: "/blog", label: "Case Studies" },
  { href: "/blog", label: "Tutorials" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Main grid */}
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-heading text-[15px] font-bold tracking-tight text-text-primary"
            >
              <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-xs font-extrabold text-text-inverse">
                AI
              </span>
              AI Marketing
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-tertiary">
              The weekly newsletter for marketers who want to stay ahead of the
              AI curve. Insights, tools, and strategies — no hype.
            </p>
            <div className="mt-6 max-w-sm">
              <SubscribeForm />
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-tertiary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-tertiary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
              Social
            </h4>
            <ul className="flex flex-col gap-3">
              {["Twitter / X", "LinkedIn", "YouTube"].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm text-text-tertiary transition-colors hover:text-text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs text-text-muted sm:flex-row">
          <span>&copy; {new Date().getFullYear()} AI Marketing Academy. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-text-primary">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-text-primary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
