"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/data/posts";

export default function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const results =
    query.length > 1
      ? posts.filter(
          (p) =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  const showDropdown = focused && query.length > 1;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative z-30 mt-8 max-w-md">
      <div className="relative">
        {/* Search icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          style={{ width: 16, height: 16 }}
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder="Search articles..."
          className="h-12 w-full rounded-full border border-border bg-bg-primary pl-11 pr-5 text-sm text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-border-strong focus:shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setFocused(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-text-muted transition-colors hover:text-text-primary"
          >
            Clear
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-border bg-bg-primary shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          {results.length > 0 ? (
            <div className="max-h-80 overflow-y-auto py-2">
              {results.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  onClick={() => {
                    setFocused(false);
                    setQuery("");
                  }}
                  className="flex flex-col gap-1 px-5 py-3.5 transition-colors hover:bg-bg-secondary"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-bg-tertiary px-2 py-0.5 font-heading text-[10px] font-medium uppercase tracking-wider text-text-secondary">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <span className="font-heading text-sm font-semibold text-text-primary">
                    {post.title}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-text-muted">
                No articles found for &ldquo;{query}&rdquo;
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
