import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactFormSection from "@/components/ContactFormSection";
import ContactDirect from "@/components/ContactDirect";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | AutoMatrix",
  description:
    "Tell AutoMatrix about your project. Share a few details and we'll come back with next steps, usually within a few business days.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <div className="p-2 sm:p-3">
        <PageHero
          title={
            <>
              Ready To Collaborate?
              <br className="hidden sm:block" /> Start With Reaching Out
            </>
          }
          subtitle="Share a few details and we'll come back with next steps, usually within a few business days."
          crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />
      </div>
      <ContactFormSection />
      <ContactDirect />
      <Footer />
    </main>
  );
}
