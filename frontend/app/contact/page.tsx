import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactFormSection from "@/components/ContactFormSection";
import ContactDirect from "@/components/ContactDirect";

export const metadata: Metadata = {
  title: "Contact Us | AutoMatrix",
  description:
    "Tell AutoMatrix about your project. Share a few details and we'll come back with next steps, usually within a few business days.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <PageHero
        pill="Contact Us"
        title={
          <>
            Ready To Collaborate?
            <br className="hidden sm:block" /> Start With Reaching Out
          </>
        }
        description="Share a few details and we'll come back with next steps, usually within a few business days."
        bgSrc="/images/contact/hero-bg.png"
      />
      <ContactFormSection />
      <ContactDirect />
    </main>
  );
}
