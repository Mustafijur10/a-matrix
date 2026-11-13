import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import TechHero from "@/components/technology/TechHero";
import IndustriesOverview from "@/components/industries/IndustriesOverview";
import IndustriesGrid from "@/components/industries/IndustriesGrid";

export const metadata: Metadata = {
  title: "Industries | AutoMatrix",
  description:
    "Technology solutions across telecommunications, banking, retail, consumer electronics, FMCG, government and consumer businesses, delivered by AutoMatrix.",
};

export default function IndustriesPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <div className="p-2 sm:p-3">
        <TechHero
          className="pb-20 lg:min-h-[350px]"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Technology & Solutions", href: "/services" },
            { label: "Industries" },
          ]}
          title="Technology & Solutions"
          subtitle="Omnitrix: one connected platform for customer experience."
        />
      </div>

      <IndustriesOverview />
      <IndustriesGrid />

      <CtaBanner
        title="Let's Modernize Your Business."
        text="Tell us what's slowing your operations down — we'll tell you honestly how we can help."
      />
      <Footer />
    </main>
  );
}
