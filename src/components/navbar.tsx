"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/magnetic";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/archive", label: "Archive" },
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
          className="flex items-center gap-2.5 font-heading text-[15px] font-bold tracking-tight text-text-primary"
        >
          <Image
            src="/images/logo.png"
            alt="AI Marketing"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          AI Marketing
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative font-body text-sm transition-colors hover:text-text-primary",
                    isActive ? "text-text-primary" : "text-text-tertiary"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-text-primary"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Magnetic strength={0.15}>
          <Link
            href="/blog"
            className="hidden rounded-full bg-accent px-5 py-2.5 font-heading text-xs font-semibold text-text-inverse transition-all hover:bg-accent-hover active:scale-95 md:inline-flex"
          >
            Subscribe
          </Link>
        </Magnetic>

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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 pb-6 pt-4">
              {links.map((link, i) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-sm transition-colors",
                        isActive
                          ? "bg-bg-tertiary font-medium text-text-primary"
                          : "text-text-secondary hover:bg-bg-secondary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
