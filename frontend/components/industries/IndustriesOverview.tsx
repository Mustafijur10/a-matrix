import Image from "next/image";
import Pill from "@/components/Pill";

export default function IndustriesOverview() {
  return (
    <section className="bg-white px-5 py-14 sm:py-[72px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_460px] lg:gap-16">
        <div>
          <Pill>Company Overview</Pill>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">
            A Next-Generation IT <br className="hidden sm:block" />
            And Digital Services Company.
          </h2>
          <p className="mt-6 max-w-[600px] text-base leading-[26px] text-[#5b6b82]">
            Automatrix delivers adaptable technology solutions designed to address the ever-evolving needs of
            businesses. Serving needs that range from digital and operational to client-facing engagement, Automatrix
            caters to diverse industries. By combining software engineering and intelligent technologies, we support
            organizations on their modernization journey by connecting systems and creating a more efficient digital
            experience for our partners.
          </p>
        </div>

        <div className="relative aspect-[460/320] w-full overflow-hidden rounded-3xl">
          {/* Export the office photo from Figma -> public/images/industries/overview.jpg */}
          <Image
            src="/images/industries/overview.jpg"
            alt="Team working in a modern open-plan office"
            fill
            sizes="(min-width:1024px) 460px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
