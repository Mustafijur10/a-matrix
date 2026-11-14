import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/Footer";
import SectionBadge from "@/components/shared/SectionBadge";
import CtaBanner from "@/components/shared/CtaBanner";
import CopyShare from "@/components/shared/CopyShare";
import Icon from "@/components/shared/Icon";
import ArticleBody from "@/components/insights/ArticleBody";
import AtAGlance from "@/components/insights/AtAGlance";
import InsightCard from "@/components/insights/InsightCard";
import { formatDMY, getInsightBySlug, getInsights } from "@/lib/insights";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getInsights()).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const item = await getInsightBySlug((await params).slug);
  return { title: item ? `${item.title} | Insights | AutoMatrix` : "Not found", description: item?.summary };
}

export default async function InsightDetailPage({ params }: Params) {
  const { slug } = await params;
  const item = await getInsightBySlug(slug);
  if (!item) notFound();

  const more = (await getInsights()).filter((i) => i.slug !== slug).slice(0, 3);
  const sep = <span aria-hidden className="h-4 w-px bg-white/40" />;

  return (
    <main>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: item.title }]}
        title={item.title}
        subtitle={item.heroSubtitle}
      >
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white">
          <span className="text-white/90">Author: <span className="text-white">{item.author}</span></span>
          {sep}
          <span className="flex items-center gap-2"><Icon name="clock-white" size={16} />{item.readTime} min read</span>
          {sep}
          <span className="flex items-center gap-2"><Icon name="calendar-white" size={16} />{formatDMY(item.date)}</span>
        </div>
      </PageHero>

      <section className="bg-white px-5 pb-16 pt-6 sm:pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative aspect-[2.6] overflow-hidden rounded-3xl bg-[#E5E7EB]">
            <Image src={item.image} alt="" fill priority sizes="(min-width:1024px) 960px, 100vw" className="object-cover" />
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.9fr_1fr]">
            <article><ArticleBody blocks={item.blocks} /></article>
            <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
              {item.glance && <AtAGlance glance={item.glance} />}
              <CopyShare title={item.title} />
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] px-5 pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-12 flex max-w-xl flex-col items-center text-center">
            <SectionBadge>Articles</SectionBadge>
            <h2 className="mt-4 text-3xl font-medium text-[#0F1A2B] sm:text-5xl">Ideas For Smarter Operations</h2>
            <p className="mt-4 text-sm text-[#6B7280]">Short reads on AI, automation, and customer experience from our team.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {more.map((m) => <InsightCard key={m.slug} item={m} tone="white" />)}
          </div>
        </div>
      </section>

      <CtaBanner tone="gray" title="Let's Modernize The Next Part Of Your Business." text="Tell us what's slowing your operations down — we'll tell you honestly how we can help." label="Get a Free Consultation" href="/contact" />
      <Footer />
    </main>
  );
}
