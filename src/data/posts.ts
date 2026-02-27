export type Author = {
  name: string;
  role: string;
  initials: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
  category: string;
  author: Author;
  featured?: boolean;
  coverImage?: string;
};

const authors: Record<string, Author> = {
  elena: {
    name: "Elena Vasquez",
    role: "AI Strategy Lead",
    initials: "EV",
  },
  james: {
    name: "James Okafor",
    role: "Paid Media & AI",
    initials: "JO",
  },
  priya: {
    name: "Priya Sharma",
    role: "Content & Generative AI",
    initials: "PS",
  },
};

export const posts: Post[] = [
  {
    slug: "death-of-ab-testing",
    title: "The Death of A/B Testing: How AI is Rewriting the Rules",
    excerpt:
      "Traditional A/B testing is too slow for modern marketing. AI-driven experimentation is replacing it — here's what that means for your team.",
    date: "2026-02-20",
    readingTime: "6 min read",
    category: "Strategy",
    author: authors.elena,
    featured: true,
    coverImage: "/images/post-analytics.jpg",
    content: `
      <p>For two decades, A/B testing has been the gold standard of data-driven marketing. Run two variants, wait for statistical significance, pick the winner, repeat. It works. It's also painfully slow — and in 2026, slow is a liability.</p>

      <p>The fundamental problem isn't the methodology. It's the throughput. A traditional A/B test on a landing page might take 2–4 weeks to reach significance. During that window, you're leaving performance on the table. Multiply that across every page, every email, every ad creative, and you've got a compounding drag on growth.</p>

      <h2>Enter Multi-Armed Bandits</h2>

      <p>AI-powered experimentation doesn't wait for a test to "finish." Multi-armed bandit algorithms dynamically allocate traffic to better-performing variants in real-time. The exploration-exploitation tradeoff happens continuously, not in discrete phases.</p>

      <p>The result? You start capturing value from day one. Platforms like Mutiny and Intellimize have been doing this for years, but the latest generation of tools — powered by transformer-based models — can optimize across dozens of variables simultaneously.</p>

      <blockquote>The best marketing teams in 2026 aren't running more tests. They're running smarter systems that learn continuously.</blockquote>

      <h2>What This Means for Your Team</h2>

      <p>This shift doesn't eliminate the need for experimentation culture. If anything, it raises the bar. You still need strong hypotheses. You still need creative instinct. What changes is the feedback loop — it compresses from weeks to hours.</p>

      <p>The teams that thrive will be the ones who learn to set up AI-driven experiments with clear objectives, feed them quality creative variants, and interpret the signals the system surfaces. The testing isn't dead. It's evolved.</p>

      <h2>Practical Steps to Start</h2>

      <p>First, audit your current experimentation velocity. How many tests are you running per month? What's your average time to significance? If those numbers feel sluggish, you're a prime candidate for AI-driven experimentation tools.</p>

      <p>Second, start with high-traffic, high-impact surfaces. Your homepage, your pricing page, your top-performing ad sets. These give the algorithms the data density they need to optimize quickly. Low-traffic pages still benefit from traditional A/B testing — there's no shame in that.</p>
    `,
  },
  {
    slug: "ai-tools-that-deliver-roi",
    title: "5 AI Tools That Actually Deliver ROI for Marketing Teams",
    excerpt:
      "We cut through the noise and tested 30+ AI marketing tools. These five consistently delivered measurable returns.",
    date: "2026-02-14",
    readingTime: "8 min read",
    category: "Tools",
    author: authors.james,
    featured: true,
    coverImage: "/images/post-workspace.jpg",
    content: `
      <p>The AI tool landscape for marketers is overwhelming. Every week there's a new product promising to "revolutionize" your workflow. Most of them don't. We spent six months rigorously testing over 30 tools across paid media, content, email, and analytics. These five earned their place.</p>

      <h2>1. Jasper — Content Production at Scale</h2>

      <p>Jasper isn't new, but its 2026 iteration is remarkably good. The brand voice training has matured to the point where outputs genuinely sound like your team wrote them. We measured a 3.2x increase in content output with no detectable quality drop, as rated by blind editorial review.</p>

      <p>The key is in the setup. Teams that invest 2–3 hours training the brand voice model upfront see dramatically better results than those using it out of the box.</p>

      <h2>2. Mutiny — Website Personalization</h2>

      <p>Mutiny's AI-powered website personalization consistently delivered 15–30% lift in conversion rates across our test accounts. It works by dynamically adjusting headlines, CTAs, and page layouts based on visitor attributes — industry, company size, traffic source — without requiring engineering resources.</p>

      <blockquote>The most underrated capability in AI marketing isn't content generation — it's real-time personalization. Mutiny makes it accessible.</blockquote>

      <h2>3. Klaviyo AI — Email Sequencing</h2>

      <p>Klaviyo's predictive analytics for email have gotten seriously good. Send-time optimization, subject line generation, and predicted customer lifetime value scoring are all built in. For e-commerce brands, the predicted churn alerts alone justify the investment.</p>

      <h2>4. Adzooma — Paid Media Optimization</h2>

      <p>Adzooma sits on top of your Google, Meta, and Microsoft ad accounts and surfaces optimization opportunities automatically. It's not replacing your media buyer — it's giving them superpowers. Budget reallocation suggestions alone saved one of our test accounts $14K/month in wasted spend.</p>

      <h2>5. Amplitude — Behavioral Analytics</h2>

      <p>Amplitude's AI features — particularly its anomaly detection and automatic insight generation — turn raw behavioral data into actionable narratives. Instead of digging through dashboards, you get proactive alerts: "Conversion from organic search dropped 18% this week, primarily driven by mobile users on your pricing page."</p>

      <p>That's the kind of signal that lets you act in hours instead of discovering the problem in your monthly review.</p>
    `,
  },
  {
    slug: "first-ai-email-sequence",
    title: "Building Your First AI-Powered Email Sequence",
    excerpt:
      "A step-by-step walkthrough for creating an email nurture sequence that uses AI for personalization, timing, and copy.",
    date: "2026-02-07",
    readingTime: "10 min read",
    category: "Tutorial",
    author: authors.priya,
    coverImage: "/images/post-email.jpg",
    content: `
      <p>Email remains the highest-ROI channel in digital marketing. Yet most email sequences are static — the same messages, the same timing, the same copy for every subscriber. AI changes that equation fundamentally.</p>

      <p>This guide walks you through building a 5-email nurture sequence that adapts to each subscriber using AI. No code required. We'll use tools that are accessible to any marketing team with a modest budget.</p>

      <h2>Step 1: Define Your Sequence Objective</h2>

      <p>Before touching any tool, get clear on the goal. Are you nurturing trial users toward a paid plan? Warming cold leads for a sales handoff? Onboarding new customers? The objective shapes everything downstream — the tone, the cadence, the calls to action.</p>

      <p>Write it down in one sentence. "This sequence converts free trial users into paid subscribers within 14 days." That's your north star.</p>

      <h2>Step 2: Build Your Content Blocks</h2>

      <p>Instead of writing five fixed emails, write content blocks — modular pieces that can be assembled differently for different segments. Think of them like LEGO pieces: an introduction block, a social proof block, a feature highlight block, an objection-handling block, a CTA block.</p>

      <blockquote>Think in blocks, not emails. AI-powered sequences assemble the right blocks for the right person at the right time.</blockquote>

      <h2>Step 3: Set Up AI Personalization</h2>

      <p>Connect your email platform to your product analytics or CRM. The AI needs behavioral signals: What pages did they visit? Which features did they use? How engaged are they? These signals determine which content blocks get served and in what order.</p>

      <h2>Step 4: Configure Send-Time Optimization</h2>

      <p>Every subscriber has an optimal send time — the moment they're most likely to open and engage. AI send-time optimization learns this pattern from historical data and adjusts delivery automatically. This alone typically lifts open rates by 10–15%.</p>

      <h2>Step 5: Launch, Measure, Iterate</h2>

      <p>Ship the sequence with tracking in place. Monitor not just open and click rates, but downstream conversion. Which content blocks drive the most conversions? Which segments respond to which messaging? Feed these insights back into the system. The AI gets smarter with every send.</p>
    `,
  },
  {
    slug: "dtc-brand-predictive-audiences",
    title: "How a D2C Brand 3x'd Revenue with Predictive Audiences",
    excerpt:
      "A deep dive into how one direct-to-consumer skincare brand used AI audience modeling to triple their revenue in 8 months.",
    date: "2026-01-28",
    readingTime: "7 min read",
    category: "Case Study",
    author: authors.elena,
    coverImage: "/images/post-ecommerce.jpg",
    content: `
      <p>When Glow Theory, a D2C skincare brand based in Austin, came to us in mid-2025, they had a familiar problem: rising acquisition costs, plateau-ing revenue, and a paid media strategy that felt like it was running on fumes. Eight months later, they'd tripled revenue. Here's how.</p>

      <h2>The Problem</h2>

      <p>Glow Theory was spending $120K/month on Meta and Google ads with a blended ROAS of 1.8x. Not terrible, but not enough to fund the growth they needed. Their targeting was based on traditional interest-based audiences and lookalikes built from their full customer list — the same playbook every D2C brand runs.</p>

      <p>The issue wasn't the creative or the offer. It was the audience quality. They were casting a wide net and hoping for the best.</p>

      <h2>The AI Approach</h2>

      <p>We built a predictive audience model using their first-party data — purchase history, browse behavior, email engagement, and customer support interactions. The model identified patterns that correlated with high lifetime value, not just first purchase.</p>

      <blockquote>The shift from "who's likely to buy" to "who's likely to become a loyal customer" changed everything. Acquisition cost went up 20%, but lifetime value went up 340%.</blockquote>

      <h2>The Execution</h2>

      <p>We fed the predictive model's output into Meta's ad platform as seed audiences. Instead of lookalikes based on "all purchasers," we created lookalikes based on "predicted high-LTV customers." The targeting was sharper. The algorithm had better signal to work with.</p>

      <p>Simultaneously, we used the model to build suppression lists — people predicted to be one-time buyers or heavy returners. This alone reduced wasted ad spend by 22%.</p>

      <h2>The Results</h2>

      <p>Over eight months: revenue grew from $380K/month to $1.14M/month. Blended ROAS improved from 1.8x to 3.4x. Customer retention at 90 days improved by 45%. The model paid for itself in the first three weeks.</p>
    `,
  },
  {
    slug: "prompt-engineering-for-marketers",
    title: "Prompt Engineering for Marketers: A Practical Guide",
    excerpt:
      "Forget generic prompt tips. This is a framework for writing prompts that produce genuinely useful marketing output.",
    date: "2026-01-20",
    readingTime: "9 min read",
    category: "Strategy",
    author: authors.priya,
    coverImage: "/images/post-typing.jpg",
    content: `
      <p>Most "prompt engineering" advice for marketers is surface-level: "be specific," "give context," "use examples." That's fine as far as it goes. But it doesn't go far enough. After working with AI tools daily for three years, here's the framework that actually produces output worth using.</p>

      <h2>The RACE Framework</h2>

      <p>Every effective marketing prompt has four components: Role, Action, Context, and Examples. Miss any one of them and you get generic output that sounds like it could've been written for anyone.</p>

      <p><strong>Role:</strong> Tell the AI who it is. Not "you are a marketing expert" — that's too vague. Try "You are a senior performance marketer at a B2B SaaS company targeting CFOs at mid-market companies." The specificity matters enormously.</p>

      <p><strong>Action:</strong> Be precise about the output format. "Write a landing page headline" is weaker than "Write 10 landing page headlines under 8 words each, optimized for clarity over cleverness."</p>

      <blockquote>The difference between a mediocre prompt and a great one isn't length — it's specificity. Every ambiguous word in your prompt is a decision you're letting the AI make for you.</blockquote>

      <p><strong>Context:</strong> Share what you know. The product, the audience, the competitive landscape, the tone. Paste in your brand guidelines. Include your top-performing copy as reference. The more context, the less hallucination.</p>

      <p><strong>Examples:</strong> Show, don't tell. Include 2–3 examples of the quality and style you're looking for. This is the single most effective lever in prompt engineering, yet most people skip it.</p>

      <h2>Common Mistakes</h2>

      <p>The biggest mistake is using AI as a first draft machine. The best results come from using it as a <em>refinement</em> machine. Write your rough draft, then use AI to improve it. "Here's my landing page copy. Rewrite it to be 30% shorter while preserving the core value proposition and emotional hooks." That produces dramatically better output than starting from zero.</p>

      <h2>Building a Prompt Library</h2>

      <p>Every marketing team should maintain a prompt library — a shared document of tested, high-performing prompts organized by use case. Subject lines, ad copy, blog outlines, customer research questions, competitive analysis frameworks. When a prompt works, save it. When it doesn't, annotate why and iterate.</p>
    `,
  },
  {
    slug: "ai-marketing-stack-2026",
    title: "The AI Marketing Stack: What You Actually Need in 2026",
    excerpt:
      "There are 11,000+ MarTech tools. You need maybe 6. Here's how to build a lean, AI-native marketing stack.",
    date: "2026-01-10",
    readingTime: "7 min read",
    category: "Tools",
    author: authors.james,
    coverImage: "/images/post-techstack.jpg",
    content: `
      <p>The MarTech landscape has over 11,000 tools. The AI marketing subset alone has grown to 2,000+. If you're feeling tool fatigue, you're not alone. Here's the uncomfortable truth: most marketing teams need six tools, not sixty. Let's build the stack.</p>

      <h2>Layer 1: The Data Foundation</h2>

      <p>Everything starts with data. You need a customer data platform (CDP) that consolidates behavioral, transactional, and demographic data into unified profiles. Segment, Rudderstack, or Hightouch are the leaders. Pick one. Without clean, unified data, every AI tool downstream will underperform.</p>

      <p>This is the layer most teams skip. They bolt AI tools onto fragmented data and wonder why the results are mediocre. Don't make that mistake.</p>

      <h2>Layer 2: Content Engine</h2>

      <p>You need one AI writing tool and one AI design tool. For writing: Jasper or Writer. For design: Midjourney or the Canva AI suite. That's it. Don't stack three writing tools because each has a slightly different feature. Pick the one that best fits your workflow and go deep.</p>

      <blockquote>A lean stack mastered beats a bloated stack half-used. Every additional tool adds integration complexity, context-switching cost, and maintenance overhead.</blockquote>

      <h2>Layer 3: Distribution & Optimization</h2>

      <p>Your email platform (Klaviyo, Customer.io, or Braze) handles owned-channel distribution with AI-powered send time and content optimization. Your ad platforms (Meta, Google) have increasingly capable built-in AI — use it, but augment with a tool like Adzooma or Revealbot for cross-platform optimization.</p>

      <h2>Layer 4: Intelligence</h2>

      <p>An analytics platform with AI capabilities — Amplitude, Mixpanel, or PostHog — surfaces insights you'd miss in manual analysis. Pair it with a competitive intelligence tool like Crayon or Klue if you're in a competitive market.</p>

      <h2>The Principle</h2>

      <p>Build the thinnest viable stack. Every tool must justify its seat at the table with measurable impact. If you can't articulate exactly how a tool makes your team faster, smarter, or more effective, cut it. Then invest the savings into going deeper with the tools that remain.</p>
    `,
  },
];

export const categories = [...new Set(posts.map((p) => p.category))];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((p) => p.featured);
}

export function getPostsByCategory(category: string): Post[] {
  if (category === "All") return posts;
  return posts.filter((p) => p.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 3): Post[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return posts.slice(0, limit);
  return posts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}
