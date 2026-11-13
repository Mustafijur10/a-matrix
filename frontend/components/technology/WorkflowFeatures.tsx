import Image from "next/image";
import Pill from "@/components/Pill";

type Feature = { title: string; desc: string };
type Row = { heading: string; features: [Feature, Feature]; img?: string };

// Swap `img` per row once you export the individual visuals from Figma.
const DEFAULT_IMG = "/images/solutions/crm-ai.png";

const rows: Row[] = [
  {
    heading: "Every customer conversation, one connected view",
    features: [
      { title: "Omnichannel Engagement", desc: "Unifies customer interactions across social media, messaging, email, and web through a single workspace, enabling faster responses and more consistent customer experiences." },
      { title: "Omni-CRM", desc: "Centralizes customer profiles, interaction history, queries, and case information to provide a connected view of every customer relationship." },
    ],
  },
  {
    heading: "Every request resolved and measured",
    features: [
      { title: "Omni-CMS & Ticketing", desc: "Enables structured management of customer queries, complaints, and service requests, with escalation and cross-team coordination throughout the resolution lifecycle." },
      { title: "CSAT & Customer Feedback", desc: "Enables customer satisfaction measurement through surveys, ratings, feedback monitoring, and performance reporting to support continuous service improvement." },
    ],
  },
  {
    heading: "Routine conversations, handled automatically",
    features: [
      { title: "AI-Powered Chatbot", desc: "Provides conversational self-service for common customer needs, including information requests, complaints, status tracking, and other routine interactions, with Bangla and English support." },
      { title: "Smart IVR", desc: "Transforms traditional voice interactions into intelligent self-service journeys by connecting customers with relevant information, backend systems, and guided workflows." },
    ],
  },
  {
    heading: "Your contact center and knowledge in one place",
    features: [
      { title: "Enterprise Contact Center Engine", desc: "Supports inbound and outbound communications with call routing, IVR, recording, monitoring, CRM integration, and real-time operational analytics." },
      { title: "Knowledge Management", desc: "Provides a structured environment for managing, organizing, searching, and governing knowledge assets, helping users and service teams access the right information efficiently." },
    ],
  },
];

function Visual({ src }: { src: string }) {
  return (
    <div className="relative h-[240px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#e8fbf4] to-[#92ebcb] sm:h-[270px]">
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />
      <div className="absolute inset-x-[16%] bottom-[7%] top-[13%] overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-12px_rgba(7,32,31,0.25)]">
        <Image src={src} alt="" fill sizes="(min-width:1024px) 320px, 70vw" className="object-contain object-top p-2" />
      </div>
    </div>
  );
}

export default function WorkflowFeatures() {
  return (
    <section className="bg-white px-5 pt-20 sm:pt-[110px]">
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

        <ul className="mt-12 flex flex-col gap-5">
          {rows.map((row, i) => (
            <li key={row.heading} className="rounded-[32px] border border-ink/10 bg-white p-4 sm:p-5">
              <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <Visual src={row.img ?? DEFAULT_IMG} />
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1 md:pl-4" : "md:pr-4"} px-1 pb-2 md:px-0 md:pb-0`}>
                  <h3 className="max-w-[360px] text-2xl leading-8 text-ink sm:text-[26px] sm:leading-[34px]">{row.heading}</h3>
                  <ul className="mt-6 flex flex-col gap-5">
                    {row.features.map((f) => (
                      <li key={f.title}>
                        <p className="flex items-center gap-2.5 text-[17px] text-ink">
                          <span aria-hidden className="size-2.5 shrink-0 rounded-full bg-[#6BC5A0]" />
                          {f.title}
                        </p>
                        <p className="mt-2 text-[15px] leading-[22px] text-[#5b6b82]">{f.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* teal glow divider */}
      <div
        aria-hidden
        className="mx-auto mt-8 h-[110px] max-w-[1000px] bg-[radial-gradient(ellipse_50%_100%_at_50%_100%,rgba(63,165,149,0.55),transparent_75%)] [mask-image:linear-gradient(to_bottom,transparent,black_60%)]"
      />
    </section>
  );
}
