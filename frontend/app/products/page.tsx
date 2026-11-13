import type { Metadata } from "next";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import TechHero from "@/components/technology/TechHero";
import ProductShowcase from "@/components/technology/ProductShowcase";
import WorkflowFeatures from "@/components/technology/WorkflowFeatures";
import CapabilityGrid from "@/components/technology/CapabilityGrid";

export const metadata: Metadata = {
  title: "Omnitrix | AutoMatrix",
  description:
    "Omnitrix is an enterprise customer experience platform that brings customer engagement, CRM, communication, automation, and intelligence together in one connected ecosystem.",
};

// Set NEXT_PUBLIC_OMNITRIX_URL in .env.local to the live product URL
const OMNITRIX_URL = process.env.NEXT_PUBLIC_OMNITRIX_URL ?? "#";

export default function ProductsPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <div className="p-2 sm:p-3">
        <TechHero
          className="pb-24 lg:pb-[268px]"
          crumbs={[{ label: "Solutions", href: "/services" }, { label: "Product", href: "/products" }, { label: "Omnitrix" }]}
          title={
            <>
              One Connected Platform
              <br className="hidden sm:block" /> For Customer Experience
            </>
          }
          subtitle="Omnitrix is an enterprise customer experience platform that brings customer engagement, CRM, communication, automation, and intelligence together in one connected ecosystem."
        >
          <Button href={OMNITRIX_URL} className="mt-9">Go to Omnitrix</Button>
        </TechHero>
      </div>

      <ProductShowcase />
      <WorkflowFeatures />
      <CapabilityGrid ctaHref={OMNITRIX_URL} ctaLabel="Go to Omnitrix" />

      <CtaBanner
        title="See Omnitrix In Action"
        text="Tell us about your customer experience goals and we'll show how Omnitrix can help."
        secondary={{ label: "Find out more", href: OMNITRIX_URL }}
      />
      <Footer />
    </main>
  );
}
