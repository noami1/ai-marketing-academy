import Section from "@/components/section";
import Reveal from "@/components/reveal";
import PostCard from "@/components/post-card";
import { posts, getFeaturedPosts } from "@/data/posts";
import BlogSearch from "./blog-search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Journal — AI Marketing",
  description:
    "Insights, strategies, and case studies on AI-powered marketing. Browse all articles.",
};

export default function BlogPage() {
  const featured = getFeaturedPosts()[0];
  const remaining = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <Section>
      {/* ======== HEADER ======== */}
      <Reveal>
        <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
          Blog
        </span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
          The Journal
        </h1>
        <p className="mt-3 max-w-lg text-base text-text-secondary">
          Insights, strategies, and case studies on AI-powered marketing.
          Updated weekly.
        </p>
      </Reveal>

      {/* Search */}
      <div className="relative z-20">
        <BlogSearch posts={posts} />
      </div>

      {/* ======== FEATURED POST ======== */}
      {featured && (
        <div className="relative z-0 mt-12">
          <Reveal>
            <PostCard post={featured} featured className="bg-bg-secondary" />
          </Reveal>
        </div>
      )}

      {/* ======== POST GRID ======== */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {remaining.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06}>
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
