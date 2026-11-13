import Button from "@/components/Button";
import Pill from "@/components/Pill";

const items = [
  ["Social media, messaging, email, web", "Unified in a single workspace"],
  ["Customer profiles", "Centralized with full interaction history"],
  ["Case information", "Queries and cases in a connected view"],
  ["Escalation", "Cross-team coordination"],
  ["Surveys and ratings", "Measure customer satisfaction"],
  ["Feedback and reporting", "Monitor feedback and performance"],
  ["Bangla and English chatbot", "Conversational self-service"],
  ["Call routing and IVR", "Intelligent self-service voice journeys"],
  ["Recording and monitoring", "Inbound and outbound communications"],
  ["Real-time analytics", "Operational insight across the contact center"],
  ["CRM integration", "Connected to backend systems and workflows"],
  ["Knowledge governance", "Manage, organize, search & govern knowledge"],
];

export default function CapabilityGrid({ ctaHref, ctaLabel }: { ctaHref: string; ctaLabel: string }) {
  return (
    <section className="bg-white px-5 pb-20 pt-10 sm:pb-[100px] sm:pt-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <Pill>How it works</Pill>
          <h2 className="mx-auto mt-4 max-w-[520px] text-3xl font-medium tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">
            One Workflow Across Every Customer Touchpoint
          </h2>
          <p className="mx-auto mt-4 max-w-[430px] text-[15px] leading-[22px] text-ink/55">
            Omnitrix is designed to help organizations deliver seamless customer experiences while improving operational visibility and efficiency.
          </p>
        </div>

        {/* dashed cell borders: each cell draws its top/left edge, the wrapper clips the outer ones */}
        <div className="mt-12 overflow-hidden rounded-[28px] border border-dashed border-brand-500/35">
          <ul className="-ml-px -mt-px grid w-[calc(100%+1px)] sm:grid-cols-2 lg:grid-cols-3">
            {items.map(([title, desc]) => (
              <li key={title} className="border-l border-t border-dashed border-brand-500/35 px-6 py-6 sm:px-8 sm:py-7">
                <p className="text-[17px] text-ink">{title}</p>
                <p className="mt-2 text-sm leading-5 text-[#5b6b82]">{desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
