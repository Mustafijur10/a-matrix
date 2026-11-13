import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionBadge from "@/components/shared/SectionBadge";
import CtaBanner from "@/components/shared/CtaBanner";
import InsightsCarousel from "@/components/insights/InsightsCarousel";
import Footer from "@/components/Footer";
import { getInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | AutoMatrix",
  description: "Case studies and articles on digital transformation in practice.",
};

function Heading({ badge, title, text }: { badge: string; title: string; text: string }) {
  return (
    <div className="mx-auto mb-12 flex max-w-xl flex-col items-center text-center">
      <SectionBadge>{badge}</SectionBadge>
      <h2 className="mt-4 text-3xl font-medium text-[#0F1A2B] sm:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">{text}</p>
    </div>
  );
}

export default async function InsightsPage() {
  const [cases, articles] = await Promise.all([getInsights("case-study"), getInsights("article")]);
  return (
    <main>
      <PageHero title="Insights" subtitle="Case studies and articles on digital transformation in practice." />

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px]">
          <Heading badge="Case Study" title="Digital Transformation, In Practice" text="See how we help businesses modernize CRM, automation, omnichannel CX, and cloud operations." />
          <InsightsCarousel items={cases} />
        </div>
      </section>

      <section className="bg-white px-5 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Heading badge="Articles" title="Ideas For Smarter Operations" text="Short reads on AI, automation, and customer experience from our team." />
          <InsightsCarousel items={articles} />
        </div>
      </section>

      <CtaBanner tone="gray" title="Let's Modernize The Next Part Of Your Business." text="Tell us what's slowing your operations down — we'll tell you honestly how we can help." label="Get a Free Consultation" href="/contact" />
      <Footer />
    </main>
  );
}
