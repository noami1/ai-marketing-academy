"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn, formatDate } from "@/lib/utils";
import type { Post } from "@/data/posts";

export default function PostCard({
  post,
  featured,
  className,
}: {
  post: Post;
  featured?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group block overflow-hidden rounded-2xl border border-border bg-bg-primary transition-all duration-350",
        "hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
        className
      )}
    >
      {/* Cover image with Ken Burns effect */}
      {post.coverImage && (
        <div
          className={cn(
            "relative w-full overflow-hidden bg-bg-tertiary",
            featured ? "h-56 md:h-72" : "h-44"
          )}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 60vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      )}

      {/* Text content */}
      <div className={cn("p-6", featured && "p-8 md:p-10")}>
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-bg-tertiary px-3 py-1 font-heading text-[11px] font-medium uppercase tracking-wider text-text-secondary">
            {post.category}
          </span>
          <span className="text-xs text-text-muted">
            {formatDate(post.date)}
          </span>
        </div>

        <h3
          className={cn(
            "font-heading font-bold tracking-tight text-text-primary transition-colors group-hover:text-text-secondary",
            featured ? "text-xl md:text-2xl" : "text-lg"
          )}
        >
          {post.title}
        </h3>

        <p
          className={cn(
            "mt-2 leading-relaxed text-text-secondary",
            featured ? "text-sm md:text-base" : "text-sm",
            !featured && "line-clamp-2"
          )}
        >
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-2 font-heading text-sm font-medium text-text-primary">
          Read article
          <motion.span
            className="inline-block"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </Link>
  );
}
