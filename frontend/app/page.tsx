import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Statement from "@/components/Statement";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <div className="p-2 sm:p-3">
        <Hero />
      </div>
      <WhyUs />
      <Statement />
      <Solutions />
      <Stats />
      <Industries />
      <Approach />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
