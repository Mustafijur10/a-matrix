import type { Metadata } from "next";
import NewsHero from "@/components/news/NewsHero";
import SocialFeed from "@/components/news/SocialFeed";
import LatestNews from "@/components/news/LatestNews";
import ReachOutCta from "@/components/news/ReachOutCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "News & Events | AutoMatrix",
  description:
    "Company updates, press mentions, and upcoming events from AutoMatrix.",
};

export default function NewsEventsPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <div className="p-2 sm:p-3">
        <NewsHero />
      </div>
      <SocialFeed />
      <LatestNews />
      <ReachOutCta />
      <Footer />
    </main>
  );
}
