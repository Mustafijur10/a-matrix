"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import Pill from "./Pill";

const industries = [
  { id: "telecommunications", name: "Telecommunications", desc: "CRM, omnichannel engagement, and contact center technology for complex customer ecosystems." },
  { id: "banking", name: "Banking", desc: "AI chatbots, CRM, and workflow automation for secure, compliant customer service." },
  { id: "retail", name: "Retail", desc: "Omnichannel commerce, warehouse, and supply chain systems that keep stock and customers in sync." },
  { id: "consumer-electronics", name: "Consumer Electronics", desc: "After-sales CRM, warranty workflows, and support automation across every channel." },
  { id: "fmcg", name: "FMCG", desc: "Distribution, inventory, and back-office automation for fast-moving operations." },
  { id: "government", name: "Government", desc: "Digitized public services and back-office workflows that reduce manual effort." },
];

const R = 30; // node distance from center, % of circle diameter

export default function Industries() {
  const [active, setActive] = useState(0);
  const cur = industries[active];

  return (
    <section className="relative overflow-hidden bg-white bg-[url('/images/hex-pattern.png')] bg-cover px-5 py-14 sm:py-[72px]">
      <Image src="/images/deco/mark-left.png" alt="" width={190} height={230} className="pointer-events-none absolute left-0 top-0 hidden lg:block" />
      <Image src="/images/deco/mark-right.png" alt="" width={190} height={230} className="pointer-events-none absolute bottom-0 right-0 hidden lg:block" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="text-center">
          <Pill>Who We Serve</Pill>
          <h2 className="mx-auto mt-4 max-w-[560px] text-3xl font-medium tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">
            Technology Solutions Across Diverse Industries
          </h2>
          <p className="mx-auto mt-4 max-w-[330px] text-[13px] leading-[18px] text-ink/65">
            Adaptable solutions built for the evolving digital, operational, and
            customer-engagement needs of every industry we serve.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Wheel */}
          <div className="relative mx-auto aspect-square w-full max-w-[430px] rounded-full bg-[radial-gradient(circle,#ffffff_0%,#eef7f4_65%,#f2f7f6_100%)]">
            <div className="absolute left-1/2 top-1/2 grid aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_0_0_8px_rgba(63,165,149,0.08)]">
              <Image src="/images/logo-mark.png" alt="AutoMatrix" width={80} height={80} className="w-[55%]" />
            </div>

            {industries.map((ind, i) => {
              const a = ((-90 + i * 60) * Math.PI) / 180;
              const on = i === active;
              return (
                <button
                  key={ind.id}
                  type="button"
                  aria-label={ind.name}
                  aria-pressed={on}
                  onClick={() => setActive(i)}
                  className={`absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition sm:size-12 ${
                    on
                      ? "bg-brand-600 shadow-[0_8px_20px_-4px_rgba(47,143,128,0.6)]"
                      : "bg-white shadow-sm hover:shadow-md"
                  }`}
                  style={{
                    left: `${50 + R * Math.cos(a)}%`,
                    top: `${50 + R * Math.sin(a)}%`,
                  }}
                >
                  <Image
                    src={`/images/industries/${ind.id}.svg`}
                    alt=""
                    width={22}
                    height={22}
                    className={on ? "brightness-0 invert" : ""}
                  />
                  {on && (
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1 text-xs text-ink shadow">
                      {ind.name}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <div className="max-w-[440px]">
            <h3 className="text-[22px] font-medium text-ink">{cur.name}</h3>
            <p className="mt-2 text-[15px] leading-6 text-ink/75">{cur.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {industries.map((ind, i) => (
                <li key={ind.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`rounded-lg px-4 py-2 text-[13px] transition ${
                      i === active
                        ? "bg-brand-600 text-white"
                        : "bg-surface text-ink/75 hover:bg-neutral-200"
                    }`}
                  >
                    {ind.name}
                  </button>
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-6 h-12 rounded-xl px-6 text-[15px]">
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
