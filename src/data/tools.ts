export type ToolCategory =
  | "All"
  | "Content"
  | "Analytics"
  | "Email"
  | "SEO"
  | "Social"
  | "Automation"
  | "Design";

export interface Tool {
  name: string;
  description: string;
  category: ToolCategory;
  url: string;
  pricing: string;
  highlight?: string;
}

export const categories: ToolCategory[] = [
  "All",
  "Content",
  "Analytics",
  "Email",
  "SEO",
  "Social",
  "Automation",
  "Design",
];

export const tools: Tool[] = [
  {
    name: "ChatGPT",
    description:
      "OpenAI's flagship conversational AI. Ideal for brainstorming, copywriting, research summaries, and content ideation at scale.",
    category: "Content",
    url: "https://chat.openai.com",
    pricing: "Free / $20/mo",
    highlight: "Editor's Pick",
  },
  {
    name: "Jasper",
    description:
      "Enterprise AI content platform built specifically for marketing teams. Brand voice control, campaign workflows, and team collaboration.",
    category: "Content",
    url: "https://jasper.ai",
    pricing: "From $49/mo",
  },
  {
    name: "Surfer SEO",
    description:
      "AI-powered content optimization tool. Analyzes top-ranking pages and gives you a real-time content score as you write.",
    category: "SEO",
    url: "https://surferseo.com",
    pricing: "From $89/mo",
    highlight: "Top Rated",
  },
  {
    name: "Clearscope",
    description:
      "Content optimization platform that uses AI to help you create content that ranks. Integrates with Google Docs and WordPress.",
    category: "SEO",
    url: "https://clearscope.io",
    pricing: "From $170/mo",
  },
  {
    name: "Mailchimp AI",
    description:
      "AI-enhanced email marketing with smart send times, predictive segmentation, content optimization, and automated customer journeys.",
    category: "Email",
    url: "https://mailchimp.com",
    pricing: "Free / From $13/mo",
  },
  {
    name: "Klaviyo",
    description:
      "AI-powered email and SMS marketing for e-commerce. Predictive analytics, smart segmentation, and automated flows that drive revenue.",
    category: "Email",
    url: "https://klaviyo.com",
    pricing: "Free / From $20/mo",
    highlight: "Best for E-com",
  },
  {
    name: "HubSpot AI",
    description:
      "Full-stack marketing automation with AI-powered content creation, lead scoring, predictive analytics, and smart CRM workflows.",
    category: "Automation",
    url: "https://hubspot.com",
    pricing: "Free / From $45/mo",
  },
  {
    name: "Zapier AI",
    description:
      "Connect 6,000+ apps with AI-powered automation. Natural language workflow builder makes complex automations accessible to non-engineers.",
    category: "Automation",
    url: "https://zapier.com",
    pricing: "Free / From $19.99/mo",
  },
  {
    name: "Hootsuite",
    description:
      "Social media management with AI-powered content suggestions, best time to post analysis, and social listening across platforms.",
    category: "Social",
    url: "https://hootsuite.com",
    pricing: "From $99/mo",
  },
  {
    name: "Buffer AI",
    description:
      "Social media scheduling with AI Assistant for generating post ideas, repurposing content, and optimizing posting schedules.",
    category: "Social",
    url: "https://buffer.com",
    pricing: "Free / From $6/mo",
  },
  {
    name: "Google Analytics 4",
    description:
      "AI-powered web analytics with predictive metrics, automated insights, anomaly detection, and cross-platform measurement.",
    category: "Analytics",
    url: "https://analytics.google.com",
    pricing: "Free",
    highlight: "Essential",
  },
  {
    name: "Mixpanel",
    description:
      "Product analytics with AI-powered insights. Automatically surfaces trends, anomalies, and correlations in your user behavior data.",
    category: "Analytics",
    url: "https://mixpanel.com",
    pricing: "Free / From $20/mo",
  },
  {
    name: "Mutiny",
    description:
      "AI-powered website personalization. Automatically creates targeted experiences for different audience segments without engineering resources.",
    category: "Automation",
    url: "https://mutinyhq.com",
    pricing: "Custom pricing",
  },
  {
    name: "Midjourney",
    description:
      "AI image generation for marketing visuals. Create ad creatives, social media graphics, and brand imagery from text descriptions.",
    category: "Design",
    url: "https://midjourney.com",
    pricing: "From $10/mo",
    highlight: "Creative Favorite",
  },
  {
    name: "Canva Magic Studio",
    description:
      "AI-powered design suite within Canva. Magic Write, Magic Edit, text-to-image, and brand kit automation for marketing teams.",
    category: "Design",
    url: "https://canva.com",
    pricing: "Free / From $12.99/mo",
  },
  {
    name: "Copy.ai",
    description:
      "AI-powered go-to-market platform. Generate sales copy, email sequences, social posts, and blog content with pre-built workflows.",
    category: "Content",
    url: "https://copy.ai",
    pricing: "Free / From $49/mo",
  },
];
