import Pill from "@/components/Pill";
import type { ReactNode } from "react";

const svg = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const icons: Record<string, ReactNode> = {
  telecom: (
    <svg {...svg}>
      <circle cx="12" cy="9" r="1.6" />
      <path d="M8.5 5.5a5 5 0 0 0 0 7M15.5 5.5a5 5 0 0 1 0 7M6 3.5a8 8 0 0 0 0 11M18 3.5a8 8 0 0 1 0 11M12 11l-3 10M12 11l3 10M9.8 17h4.4" />
    </svg>
  ),
  bank: (
    <svg {...svg}>
      <path d="M3 9.5 12 4l9 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />
    </svg>
  ),
  retail: (
    <svg {...svg}>
      <path d="M3 4h2.5l2 11h10l2-8H6.3" />
      <circle cx="9" cy="19" r="1.3" />
      <circle cx="17" cy="19" r="1.3" />
    </svg>
  ),
  electronics: (
    <svg {...svg}>
      <rect x="5" y="5" width="14" height="10" rx="1.5" />
      <path d="M2.5 18.5h19" />
    </svg>
  ),
  manufacturing: (
    <svg {...svg}>
      <path d="M3 20V10l5 3V10l5 3V6h3l1 5v9ZM3 20h18M8 17h1M12 17h1M16 17h1" />
    </svg>
  ),
  government: (
    <svg {...svg}>
      <circle cx="12" cy="8" r="3" />
      <path d="M12 3v1M12 12v1M7 8H6M18 8h-1M3 16l4-1.5 4 2 3-1.5 4 .5M3 16v3h4M21 16.5V19h-6" />
    </svg>
  ),
  consumer: (
    <svg {...svg}>
      <path d="M12 3v2M6.5 5.5 8 7M17.5 5.5 16 7M4 10h2M18 10h2" />
      <circle cx="12" cy="11" r="2" />
      <path d="M8.5 19v-2a3.5 3.5 0 0 1 7 0v2M2.5 19v-1.5a3 3 0 0 1 4-2.8M21.5 19v-1.5a3 3 0 0 0-4-2.8" />
    </svg>
  ),
};

const industries: { title: string; desc: string; icon: keyof typeof icons }[] = [
  {
    title: "Telecommunications",
    icon: "telecom",
    desc: "Technology solutions designed to support complex customer ecosystems, including CRM, omnichannel engagement, contact center platforms, automation, analytics, and enterprise system integration.",
  },
  {
    title: "Banking & Financial Services",
    icon: "bank",
    desc: "Digital solutions that support customer engagement, process automation, CRM, analytics, and secure technology environments, helping financial institutions improve efficiency and deliver more connected digital experiences.",
  },
  {
    title: "Retail & E-Commerce",
    icon: "retail",
    desc: "Technology solutions that connect customer engagement, CRM, automation, and operational systems to support seamless digital experiences and improve business visibility.",
  },
  {
    title: "Consumer Electronics",
    icon: "electronics",
    desc: "Digital platforms and customer engagement technologies that support service management, CRM, omnichannel communication, and integrated customer journeys.",
  },
  {
    title: "FMCG & Manufacturing",
    icon: "manufacturing",
    desc: "Technology solutions focused on process optimization, workflow automation, enterprise applications, and warehouse and inventory management to improve operational efficiency and supply chain visibility.",
  },
  {
    title: "Government & Public Sector",
    icon: "government",
    desc: "Digital platforms and automation solutions designed to support citizen engagement, service management, workflow optimization, and integrated enterprise processes.",
  },
  {
    title: "Footwear & Consumer Businesses",
    icon: "consumer",
    desc: "Technology-enabled customer engagement, CRM, digital communication, and operational solutions designed around the needs of consumer-facing businesses.",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="bg-surface px-5 py-14 sm:py-[72px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <Pill>Technologies</Pill>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">
            Technology And Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-[460px] text-base leading-6 text-[#5b6b82]">
            Decades of combined experience across software development, cloud computing, and IT project delivery.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((it, i) => (
            <li
              key={it.title}
              className={`relative flex flex-col items-center overflow-hidden rounded-[36px] border border-ink/[0.06] bg-white px-7 pb-12 pt-10 text-center ${
                i === industries.length - 1 ? "sm:col-span-2 sm:justify-self-center sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:col-start-2 lg:w-full" : ""
              }`}
            >
              {/* dotted texture fading out toward the bottom */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-36 opacity-60 [background-image:radial-gradient(rgba(11,27,46,0.18)_1px,transparent_1.2px)] [background-size:14px_14px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
              />
              <span className="relative grid size-14 place-items-center rounded-2xl bg-gradient-to-b from-brand-500 to-brand-600 text-white shadow-[0_6px_16px_-6px_rgba(47,143,128,0.6)]">
                {icons[it.icon]}
              </span>
              <h3 className="relative mt-8 text-[22px] font-medium leading-7 text-ink">{it.title}</h3>
              <p className="relative mt-4 text-base leading-6 text-[#5b6b82]">{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
