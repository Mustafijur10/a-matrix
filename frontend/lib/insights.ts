// Temporary mock data. Replace getInsights/getInsightBySlug with backend fetch() calls.
export type Block =
  | { t: "h"; text: string }
  | { t: "p"; text: string }
  | { t: "img"; src: string; alt: string }
  | { t: "tip"; title: string; text: string }
  | { t: "quote"; text: string; by: string };

export type Insight = {
  slug: string;
  type: "case-study" | "article";
  title: string;
  summary: string;
  date: string; // ISO yyyy-mm-dd
  readTime: number;
  image: string;
  author: string;
  heroSubtitle: string;
  glance?: { industry: string; services: string; chips: string[] };
  blocks: Block[];
};

const placeholder: Block[] = [
  { t: "h", text: "The challenge" },
  { t: "p", text: "Replace with your content." },
  { t: "h", text: "Our approach" },
  { t: "p", text: "Replace with your content." },
  { t: "h", text: "The outcome" },
  { t: "p", text: "Replace with your content." },
];

const glance = {
  industry: "Telecommunications · Retail & E-commerce",
  services: "Telecommunications · Retail & E-commerce",
  chips: ["CRM & AI Automation", "Systems Integration"],
};

export const insights: Insight[] = [
  {
    slug: "cloud-migration-devops", type: "case-study", title: "Cloud Migration & DevOps",
    summary: "Migrate legacy workloads, containerize apps, and build CI/CD pipelines.",
    date: "2026-11-08", readTime: 5, image: "/images/insights/cloud-devops.jpg", author: "Daniel Jones",
    heroSubtitle: "Migrate legacy workloads, containerize apps, and build CI/CD pipelines.", glance, blocks: placeholder,
  },
  {
    slug: "ai-chatbots-for-banking", type: "case-study", title: "AI Chatbots for Banking",
    summary: "Automate inquiries, complaints, and status tracking in Bangla + English.",
    date: "2026-11-09", readTime: 9, image: "/images/insights/chatbots-banking.jpg", author: "Daniel Jones",
    heroSubtitle: "Automate inquiries, complaints, and status tracking in Bangla + English.", glance, blocks: placeholder,
  },
  {
    slug: "telecom-cx-at-scale", type: "case-study", title: "Telecom CX at Scale",
    summary: "Support 170M+ customer interactions a year with robust contact center and CRM.",
    date: "2026-11-10", readTime: 3, image: "/images/insights/telecom-cx.jpg", author: "Daniel Jones",
    heroSubtitle: "Support 170M+ customer interactions a year with robust contact center and CRM.", glance, blocks: placeholder,
  },
  {
    slug: "omnichannel-cx-one-workspace", type: "article", title: "Omnichannel CX: One Workspace",
    summary: "Unifying social, messaging, email, and web conversations so teams respond faster and more consistently.",
    date: "2025-07-02", readTime: 8, image: "/images/insights/omnichannel-cx.jpg", author: "Daniel Jones",
    heroSubtitle: "Unifying social, messaging, email, and web conversations so teams respond faster and more consistently.",
    glance,
    blocks: [
      { t: "h", text: "The challenge" },
      { t: "p", text: "Customer conversations were spread across social media, messaging, email, and web channels. Teams had to switch between tools, and context was easily lost between interactions." },
      { t: "h", text: "Our approach" },
      { t: "p", text: "We brought every channel into a single workspace using Omnitrix omnichannel engagement. Omni-CRM centralized customer profiles, interaction history, and case information, while ticketing added structured escalation and cross-team coordination." },
      { t: "tip", title: "Pro Tip: Your CLAUDE.md is a multiplier", text: "The quality of your CLAUDE.md directly determines the quality of agent output. Teams who invest 2–3 hours writing a thorough CLAUDE.md consistently outperform those who skip it. Include your architectural decisions, not just your style preferences." },
      { t: "h", text: "The outcome" },
      { t: "p", text: "Teams respond faster, customers get a more consistent experience, and every relationship now has a connected view across channels." },
      { t: "img", src: "/images/insights/content-tech.jpg", alt: "Abstract technology illustration" },
      { t: "h", text: "The Productivity Curve Is Real And It's Uncomfortable" },
      { t: "p", text: "Every team we worked with experienced a productivity dip in the first 3–4 weeks. Engineers who are used to writing code are suddenly spending more time writing specifications for code. That feels like regression. It isn't — it's the skill gap that determines whether you get 20% gains or 200% gains on the other side." },
      { t: "quote", text: "The biggest mistake companies make isn't choosing the wrong model. It's never changing how engineers work.", by: "Daniel Jones, Founder & CTO" },
      { t: "h", text: "The Productivity Curve Is Real And It's Uncomfortable" },
      { t: "p", text: "Every team we worked with experienced a productivity dip in the first 3–4 weeks. Engineers who are used to writing code are suddenly spending more time writing specifications for code. That feels like regression. It isn't — it's the skill gap that determines whether you get 20% gains or 200% gains on the other side." },
    ],
  },
  { slug: "article-placeholder-2", type: "article", title: "Placeholder article title", summary: "Replace with your article summary.", date: "2026-11-09", readTime: 9, image: "/images/insights/chatbots-banking.jpg", author: "Daniel Jones", heroSubtitle: "Replace with your article summary.", blocks: placeholder },
  { slug: "article-placeholder-3", type: "article", title: "Placeholder article title", summary: "Replace with your article summary.", date: "2026-11-08", readTime: 5, image: "/images/insights/cloud-devops.jpg", author: "Daniel Jones", heroSubtitle: "Replace with your article summary.", blocks: placeholder },
];

export async function getInsights(type?: Insight["type"]) { return type ? insights.filter((i) => i.type === type) : insights; }
export async function getInsightBySlug(slug: string) { return insights.find((i) => i.slug === slug) ?? null; }

export const formatLong = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
export const formatDMY = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" });
