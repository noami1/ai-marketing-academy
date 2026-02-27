"use client";

export default function ShareLinks({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${slug}`
      : `/blog/${slug}`;

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  function copyLink() {
    navigator.clipboard.writeText(url);
    const btn = document.getElementById("copy-btn");
    if (btn) {
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy link";
      }, 2000);
    }
  }

  return (
    <div className="flex items-center gap-4 border-t border-border pt-6">
      <span className="font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
        Share
      </span>
      <div className="flex gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
        >
          Twitter / X
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
        >
          LinkedIn
        </a>
        <button
          id="copy-btn"
          onClick={copyLink}
          className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
        >
          Copy link
        </button>
      </div>
    </div>
  );
}
