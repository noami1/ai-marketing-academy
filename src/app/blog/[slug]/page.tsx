import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/section";
import Reveal from "@/components/reveal";
import PostCard from "@/components/post-card";
import ReadingProgress from "@/components/reading-progress";
import ShareLinks from "./share-links";
import { posts, getPostBySlug, getRelatedPosts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — AI Marketing`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <ReadingProgress />

      {/* ======== POST HEADER ======== */}
      <section className="px-6 pb-8 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 font-body text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              <span>←</span> Back to Journal
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <span className="mb-4 inline-block rounded-full bg-bg-tertiary px-3 py-1 font-heading text-[11px] font-medium uppercase tracking-wider text-text-secondary">
              {post.category}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-text-muted">
              <span>{formatDate(post.date)}</span>
              <span className="hidden h-1 w-1 rounded-full bg-border-strong sm:block" />
              <span>{post.readingTime}</span>
              <span className="hidden h-1 w-1 rounded-full bg-border-strong sm:block" />
              <span>By {post.author.name}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======== COVER IMAGE ======== */}
      {post.coverImage && (
        <Reveal>
          <div className="mx-auto mb-10 max-w-4xl px-6">
            <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-bg-tertiary">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>
          </div>
        </Reveal>
      )}

      {/* ======== ARTICLE BODY ======== */}
      <section className="px-6 py-8 md:py-12">
        <Reveal>
          <article
            className="prose prose-drop-cap mx-auto max-w-[680px]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Reveal>
      </section>

      {/* ======== SHARE + AUTHOR ======== */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[680px] space-y-6">
          {/* Share links */}
          <Reveal>
            <ShareLinks title={post.title} slug={post.slug} />
          </Reveal>

          {/* Author box */}
          <Reveal delay={0.06}>
            <div className="flex items-center gap-4 rounded-2xl border border-border p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bg-tertiary font-heading text-sm font-bold text-text-primary">
                {post.author.initials}
              </div>
              <div>
                <div className="font-heading text-sm font-semibold text-text-primary">
                  {post.author.name}
                </div>
                <div className="text-sm text-text-muted">
                  {post.author.role}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======== RELATED POSTS ======== */}
      {related.length > 0 && (
        <Section className="border-t border-border bg-bg-secondary">
          <Reveal>
            <h2 className="mb-8 font-heading text-2xl font-bold tracking-tight text-text-primary">
              Keep Reading
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <PostCard post={p} className="bg-bg-primary" />
              </Reveal>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
