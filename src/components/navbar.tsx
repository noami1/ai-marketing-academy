"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-400",
        scrolled ? "nav-scrolled py-4" : "py-5"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-[15px] font-bold tracking-tight text-text-primary"
        >
          <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-xs font-extrabold text-text-inverse">
            AI
          </span>
          AI Marketing
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative font-body text-sm transition-colors hover:text-text-primary",
                  pathname === link.href
                    ? "text-text-primary"
                    : "text-text-tertiary"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-text-primary" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/blog"
          className="hidden rounded-full bg-accent px-5 py-2.5 font-heading text-xs font-semibold text-text-inverse transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Subscribe
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "h-[1.5px] w-5 bg-text-primary transition-all duration-300",
              mobileOpen && "translate-y-[6.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-[1.5px] w-5 bg-text-primary transition-all duration-300",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-[1.5px] w-5 bg-text-primary transition-all duration-300",
              mobileOpen && "-translate-y-[6.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-400 md:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 pb-6 pt-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-xl px-4 py-3 text-sm transition-colors",
                pathname === link.href
                  ? "bg-bg-tertiary font-medium text-text-primary"
                  : "text-text-secondary hover:bg-bg-secondary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
