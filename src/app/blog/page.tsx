import Section from "@/components/section";
import Reveal from "@/components/reveal";
import PostCard from "@/components/post-card";
import TextReveal from "@/components/text-reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";
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
      <Reveal variant="blur">
        <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted">
          Blog
        </span>
      </Reveal>
      <TextReveal
        text="The Journal"
        as="h1"
        className="mt-2 font-heading text-4xl font-bold tracking-tight text-text-primary md:text-5xl"
        delay={0.1}
      />
      <Reveal delay={0.15} variant="blur">
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
          <Reveal variant="scale">
            <PostCard post={featured} featured className="bg-bg-secondary" />
          </Reveal>
        </div>
      )}

      {/* ======== POST GRID ======== */}
      <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {remaining.map((post) => (
          <StaggerItem key={post.slug}>
            <PostCard post={post} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
