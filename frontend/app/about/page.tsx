import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Pill from "@/components/Pill";
import Stats from "@/components/Stats";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { PinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Company Overview | AutoMatrix",
  description: "A next-generation IT and digital services company based in Dhaka, Bangladesh.",
};

const body = "text-base leading-[26px] text-[#5b6b82]";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <div className="p-2 sm:p-3">
        <PageHero
          title="Company Overview"
          subtitle="Who we are and what we stand for."
          crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }, { label: "Company Overview" }]}
        />
      </div>

      <section className="bg-white px-5 py-14 sm:py-[72px]">
        <div className="mx-auto max-w-[1200px]">
          <Pill>Company Overview</Pill>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">
            A Next-Generation IT <br className="hidden sm:block" />
            And Digital Services Company.
          </h2>
          <div className={`mt-8 space-y-6 ${body}`}>
            <p>
              Incorporated in December 2024, AutoMatrix Services Limited is a next generation IT and digital services
              company committed to helping businesses achieve transformative growth and operational excellence. The
              company specializes in CRM solutions, AI-powered automation, omni-channel contact center technology,
              warehouse management systems, and consultancy services for full-spectrum digital transformation strategies.
            </p>
            <p>
              With a digital-first mindset and a strong foundation in intelligent automation, system integration, and
              custom software development, AutoMatrix helps enterprises modernize core systems, streamline workflows and
              make data-driven decisions. Headquartered in Dhaka, Bangladesh, AutoMatrix is a registered private limited
              company, employing a growing team of industry professionals. The organization operates with a strong
              emphasis on innovation, transparency, and measurable outcomes, serving clients across South Asia.
            </p>
          </div>

          <div className="mt-16 grid items-end gap-5 md:grid-cols-3">
            <div className="relative h-[380px] md:h-[460px]">
              <div className="relative size-full overflow-hidden rounded-3xl">
                <Image src="/images/about/meeting.jpg" alt="" fill sizes="400px" className="object-cover" />
              </div>
              <div className="absolute left-6 top-0 flex -translate-y-1/2 items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                <Image src="/images/logo-mark.png" alt="" width={34} height={34} />
                <div>
                  <p className="text-base text-ink">Incorporated</p>
                  <p className="text-sm text-ink/60">December 2024</p>
                </div>
              </div>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-3xl md:h-[386px]">
              <Image src="/images/about/workspace.jpg" alt="" fill sizes="400px" className="object-cover" />
            </div>

            <div className="relative h-[380px] overflow-hidden rounded-3xl md:h-[460px]">
              <Image src="/images/about/office.jpg" alt="" fill sizes="400px" className="object-cover" />
              <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                <PinIcon className="size-8 text-brand-500" />
                <div>
                  <p className="text-base text-ink">Headquartered</p>
                  <p className="text-sm text-ink/60">Gulshan-2, Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="bg-white px-5 py-14 sm:py-[88px]">
        <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-2">
          <article className="flex min-h-[315px] flex-col justify-between gap-10 rounded-3xl bg-mint-100 p-8">
            <h3 className="text-xl text-ink">Our Mission</h3>
            <p className="text-sm leading-[22px] text-ink/85">
              To enable enterprises through technology-led transformation, delivering secure, scalable, and
              intelligent digital platforms while fostering innovation and excellence. We strive to desire, drive,
              and deliver excellence in every solution we provide.
            </p>
          </article>
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl md:min-h-0">
            <Image src="/images/about/mission.jpg" alt="" fill sizes="600px" className="object-cover" />
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl md:min-h-0">
            <Image src="/images/about/vision.jpg" alt="" fill sizes="600px" className="object-cover" />
          </div>
          <article className="flex min-h-[315px] flex-col justify-between gap-10 rounded-3xl bg-mint-100 p-8">
            <h3 className="text-xl text-ink">Our Vision</h3>
            <p className="text-sm leading-[22px] text-ink/85">
              To drive innovation and growth by simplifying technology for businesses, emerging as a leading force in
              transforming enterprises through intelligent solutions and exceptional service. We envision a future
              where our platforms and expertise continually help organizations adapt, innovate, and lead in the
              digital age.
            </p>
          </article>
        </div>
      </section>

      <CtaBanner
        title="Turn Your Technology Into Your Competitive Edge."
        text="Tell us what’s slowing your operations down — we’ll tell you honestly how we can help."
      />
      <Footer />
    </main>
  );
}
