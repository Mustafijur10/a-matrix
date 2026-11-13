import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Pill from "@/components/Pill";
import TeamGrid from "@/components/TeamGrid";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { members, spotlight } from "@/data/team";

export const metadata: Metadata = {
  title: "Meet The Team | AutoMatrix",
  description: "Leadership, people, and capabilities at AutoMatrix Services Ltd.",
};

const experience = [
  { icon: "telecom", title: "Telecommunications", text: "Solutions we developed help handle over 170 million customer interactions a year through our partners, including contact center platforms and CRM integrations used by leading mobile operators, designed for high availability, security, and scalability." },
  { icon: "finance", title: "Finance & E-Commerce", text: "Secure, scalable cloud infrastructures for financial services, e-commerce platforms with payment integrations, an AI-driven banking chatbot, and mobile financial services (MFS) API integrations with PCI-DSS compliance." },
  { icon: "public-sector", title: "Public Sector & Utilities", text: "Workflow automation for a public services agency, with GIS, billing, and citizen self-service portal integrations, built around rigorous data security and user-friendly design." },
  { icon: "enterprise-it", title: "Enterprise IT & Cloud", text: "Cloud migrations to AWS/Azure, containerized legacy applications, and CI/CD pipelines that help clients reduce IT costs and increase agility." },
];

function Heading({ pill, title, text }: { pill: string; title: string; text: string }) {
  return (
    <div className="text-center">
      <Pill>{pill}</Pill>
      <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">{title}</h2>
      <p className="mx-auto mt-3 max-w-[400px] text-[15px] leading-[22px] text-ink/55">{text}</p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <div className="p-2 sm:p-3">
        <PageHero
          title="Meet The Team"
          subtitle="Leadership, people, and capabilities."
          crumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Meet The Team" }]}
        />
      </div>

      <section className="bg-white px-5 py-14 sm:py-[72px]">
        <div className="mx-auto max-w-[1200px]">
          <Heading pill="Experience" title="Technical Experience" text="Decades of combined experience across software development, cloud computing, and IT project delivery." />
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {experience.map((e) => (
              <li key={e.title} className="flex min-h-[340px] flex-col items-center rounded-[32px] border border-neutral-200 bg-[radial-gradient(#e9e9e9_1px,transparent_1px)] [background-size:16px_16px] px-8 py-10 text-center sm:min-h-[380px]">
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-b from-brand-500 to-brand-600 shadow-md">
                  <Image src={`/images/experience/${e.icon}.svg`} alt="" width={28} height={28} className="brightness-0 invert" />
                </span>
                <h3 className="mt-6 text-xl font-medium text-ink">{e.title}</h3>
                <p className="mt-3 max-w-[380px] text-[15px] leading-6 text-ink/55">{e.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 pb-14 sm:pb-[88px]">
        <div className="mx-auto max-w-[1200px]">
          <Heading pill="Featured Profile" title="Leadership Spotlight" text="Get to know the people driving strategy, growth, and innovation at Automatrix Services Ltd." />
          <div className="mt-10">
            <TeamGrid members={spotlight} />
          </div>
        </div>
      </section>

      <div className="relative aspect-[4/3] w-full sm:aspect-[1440/745]">
        <Image src="/images/team/banner.jpg" alt="Our team in a planning meeting" fill sizes="1440px" className="object-cover" />
      </div>

      <section className="bg-white px-5 py-14 sm:py-[88px]">
        <div className="mx-auto max-w-[1200px]">
          <Heading pill="Team" title="Meet The Team" text="The people who scope, sell and support your project. Open any profile for their background and focus areas." />
          <div className="mt-10">
            <TeamGrid members={members} />
          </div>
        </div>
      </section>

      <CtaBanner title="Let’s Build A Smarter, Faster And Efficient Business." text="Tell us what’s slowing your operations down — we’ll tell you honestly how we can help." />
      <Footer />
    </main>
  );
}
