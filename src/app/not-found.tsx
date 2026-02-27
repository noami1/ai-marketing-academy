"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "@/components/magnetic";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      {/* Animated 404 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <span className="font-heading text-[clamp(8rem,25vw,16rem)] font-800 leading-none tracking-tighter text-bg-tertiary">
          404
        </span>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-1/2 h-[3px] bg-text-primary"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="mt-6 font-heading text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          This page wandered off.
        </h1>
        <p className="mt-3 max-w-md text-base text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <Magnetic strength={0.15}>
          <Link
            href="/"
            className="rounded-full bg-accent px-7 py-3 font-heading text-sm font-semibold text-text-inverse transition-all hover:bg-accent-hover active:scale-95"
          >
            Go Home
          </Link>
        </Magnetic>
        <Magnetic strength={0.15}>
          <Link
            href="/blog"
            className="rounded-full border border-border px-7 py-3 font-heading text-sm font-semibold text-text-primary transition-all hover:border-border-strong active:scale-95"
          >
            Browse Articles
          </Link>
        </Magnetic>
      </motion.div>
    </section>
  );
}
