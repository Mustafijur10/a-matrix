import type { Metadata } from "next";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";
import TechHero from "@/components/technology/TechHero";
import RequirementSection from "@/components/technology/RequirementSection";

export const metadata: Metadata = {
  title: "Services | AutoMatrix",
  description:
    "Data science, resource augmentation, software development, CRM & AI automation, supply chain technology, back office, cloud and systems integration from AutoMatrix.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <div className="p-2 sm:p-3">
        <TechHero
          className="pb-20 lg:min-h-[480px]"
          crumbs={[{ label: "Solutions", href: "/services" }, { label: "Services" }]}
          title={
            <>
              Services Built Around
              <br className="hidden sm:block" /> How You Work
            </>
          }
          subtitle="From analytics and cloud to CRM and back-office automation, we design, build and support the systems your teams rely on."
        />
      </div>

      <Solutions />
      <RequirementSection />
      <Footer />
    </main>
  );
}
